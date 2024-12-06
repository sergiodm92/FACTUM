"use client";
import React, { useEffect, useRef, useMemo, useState } from "react";

interface ParticlesAtomProps {
  numberOfParticles?: number;
}

const ParticlesAtom: React.FC<ParticlesAtomProps> = ({ numberOfParticles }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [screenSize, setScreenSize] = useState<{ width: number; height: number } | null>(null);

  // Actualizar tamaño de pantalla solo en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      };

      handleResize(); // Inicializar tamaño al montar
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Crear partículas iniciales solo una vez, usando useMemo
  const particles = useMemo(() => {
    if (!screenSize) return [];

    const createParticle = () => ({
      x: Math.random() * screenSize.width,
      y: Math.random() * screenSize.height,
      size: Math.random() * 2 + 1.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: `rgba(255, ${Math.floor(Math.random() * 50 + 100)}, 0, ${Math.random() * 0.5 + 0.1})`,
    });

    const particleCount = numberOfParticles || (screenSize.width / 10);
    return Array.from({ length: particleCount }, createParticle);
  }, [numberOfParticles, screenSize]);

  useEffect(() => {
    if (!screenSize) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = screenSize.width;
    canvas.height = screenSize.height;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Dibujar líneas de conexión
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 120, 0, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Dibujar partícula
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Reestablecer posición si la partícula sale de la pantalla
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Limpieza de recursos
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [particles, screenSize]);

  return <canvas ref={canvasRef} className="absolute w-full inset-0 z-0" />;
};

export default ParticlesAtom;
