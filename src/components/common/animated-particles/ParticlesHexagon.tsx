import React, { useEffect, useRef } from 'react';

interface ParticlesHexagonProps {
  particleCount?: number; // Número de partículas (opcional, por defecto 30)
}

const ParticlesHexagon: React.FC<ParticlesHexagonProps> = ({ particleCount = 30 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      angle: number;
      radius: number;
      rotationSpeed: number;
      color: string;
    }> = [];

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 15 + 10,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: `rgba(255, ${Math.floor(Math.random() * 70 + 140)}, 0, ${Math.random() * 0.3 + 0.1})`,
    });

    const drawHexagon = (x: number, y: number, radius: number, angle: number, color: string) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const pointAngle = angle + (Math.PI / 3) * i;
        const px = x + radius * Math.cos(pointAngle);
        const py = y + radius * Math.sin(pointAngle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.angle += particle.rotationSpeed;

        particles.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = other.x - particle.x;
            const dy = other.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 150, 0, ${0.15 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });

        drawHexagon(particle.x, particle.y, particle.radius, particle.angle, particle.color);

        particle.x += Math.cos(particle.angle) * 0.2;
        particle.y += Math.sin(particle.angle) * 0.2;

        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default ParticlesHexagon;
