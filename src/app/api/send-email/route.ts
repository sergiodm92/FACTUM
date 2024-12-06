import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Configurar el transportador de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true para 465, false para otros puertos como 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Mapa para rastrear solicitudes por IP
const emailTracker = new Map();

const rateLimit = Number(process.env.EMAIL_RATE_LIMIT) || 2;

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const now = Date.now();

    // Verificar o inicializar contador para la IP
    if (!emailTracker.has(clientIp)) {
      emailTracker.set(clientIp, { count: 1, timestamp: now });
    } else {
      const userData = emailTracker.get(clientIp);

      // Limpiar contador si han pasado más de 1 hora
      if (now - userData.timestamp > 60 * 60 * 1000) {
        emailTracker.set(clientIp, { count: 1, timestamp: now });
      } else if (userData.count >= rateLimit) {
        return NextResponse.json(
          { message: "Límite de correos alcanzado para esta IP. Inténtalo más tarde." },
          { status: 429 }
        );
      } else {
        // Incrementar el contador
        userData.count += 1;
        emailTracker.set(clientIp, userData);
      }
    }

    const body = await req.json();
    const { subject, text, html } = body;

    // Validar datos
    if (!subject || !text) {
      return NextResponse.json(
        { message: "Asunto y texto son obligatorios" },
        { status: 400 }
      );
    }

    // Configurar el correo
    const mailOptions = {
      from: `"Tu Empresa" <${process.env.EMAIL_USER}>`, // Remitente
      to: process.env.TO_EMAIL, // Destinatario
      subject, // Asunto
      text, // Texto plano
      html, // HTML opcional
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);

    console.log("Correo enviado: %s", info.messageId);

    return NextResponse.json(
      { message: "Correo enviado exitosamente", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json(
      { message: "Error enviando el correo", error: error.message },
      { status: 500 }
    );
  }
}

// Limpieza periódica del mapa
setInterval(() => {
  const now = Date.now();
  const expiryTime = 60 * 60 * 1000; // 1 hora
  emailTracker.forEach((data, ip) => {
    if (now - data.timestamp > expiryTime) {
      emailTracker.delete(ip);
    }
  });
}, 10 * 60 * 1000); // Ejecuta cada 10 minutos
