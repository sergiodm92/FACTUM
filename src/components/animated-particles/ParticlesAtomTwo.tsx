import React, { useEffect, useRef } from 'react';

interface ParticlesAtomTwoProps {
  particleCount?: number; // Número de partículas (opcional, por defecto 80)
}

const ParticlesAtomTwo: React.FC<ParticlesAtomTwoProps> = ({ particleCount = 80 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      shape: 'circle' | 'square';
    }> = [];

    const createParticle = (): {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      shape: "circle" | "square";
    } => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.1,
      shape: Math.random() > 0.5 ? "circle" : "square", // Garantiza un literal válido
    });

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    const drawParticle = (particle: typeof particles[0]) => {
      ctx.fillStyle = `rgba(255, 140, 50, ${particle.opacity})`;

      if (particle.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(
          particle.x - particle.size / 2,
          particle.y - particle.size / 2,
          particle.size,
          particle.size
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Draw connecting lines
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 140, 50, ${0.05 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Draw particle
        drawParticle(particle);

        // Reset position if particle goes off screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default ParticlesAtomTwo;
