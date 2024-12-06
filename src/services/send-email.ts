export interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
  }
  
  export const sendContactEmail = async (data: ContactFormInputs) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `Mensaje de ${data.name}`,
        text: `Correo de contacto: ${data.email}\n\n${data.message}`,
        html: `<p><strong>Correo de contacto:</strong> ${data.email}</p><p>${data.message}</p>`,
      }),
    });
  
    if (!response.ok) {
      throw new Error(response.status === 429 ? "RATE_LIMIT" : "SEND_ERROR");
    }
  
    return response.json();
  };
  