import React, { useEffect, useRef } from 'react';

interface ParticleGlowProps {
  particleCount?: number; // Número de partículas (opcional, por defecto 50)
  particleSizeRange?: [number, number]; // Rango de tamaño de partículas
  particleColor?: string; // Color base de las partículas
}

const ParticlesGlow: React.FC<ParticleGlowProps> = ({
  particleCount = 50,
  particleSizeRange = [2, 5],
  particleColor = 'rgba(255, 120, 50',
}) => {
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
      color: string;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const size = Math.random() * (particleSizeRange[1] - particleSizeRange[0]) + particleSizeRange[0];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        color: `${particleColor}, ${Math.random() * 0.3 + 0.2})`,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife: 200 + Math.random() * 100,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const drawCircle = (x: number, y: number, size: number, color: string) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const opacity = Math.sin((particle.life / particle.maxLife) * Math.PI);
        const currentColor = particle.color.replace(/[\d.]+\)$/g, `${opacity})`);

        drawCircle(particle.x, particle.y, particle.size, currentColor);

        particles.forEach((p2, j) => {
          if (index !== j) {
            const dx = p2.x - particle.x;
            const dy = p2.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 120, 50, ${0.1 * (1 - distance / 100) * opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });

        if (
          particle.life >= particle.maxLife ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles[index] = createParticle();
        }
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
  }, [particleCount, particleSizeRange, particleColor]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default ParticlesGlow;
