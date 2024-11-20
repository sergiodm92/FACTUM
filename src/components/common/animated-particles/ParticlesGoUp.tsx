import React, { useEffect, useRef } from 'react';

interface ParticlesGoUpProps {
  numberOfParticles?: number; // Número de partículas (opcional, por defecto 100)
}

const ParticlesGoUp: React.FC<ParticlesGoUpProps> = ({ numberOfParticles = 100 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    update: () => void;
    draw: () => void;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    const scaleCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    scaleCanvas();

    const getRandomOrange = () => {
      const red = Math.floor(Math.random() * 56) + 200;
      const green = Math.floor(Math.random() * 101) + 100;
      const blue = Math.floor(Math.random() * 50);
      return `rgba(${red}, ${green}, ${blue}, 0.7)`;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width / window.devicePixelRatio;
        this.y = canvas.height / window.devicePixelRatio;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1.5;
        this.speedY = -(Math.random() * 1.75 + 0.5);
        this.color = getRandomOrange();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y + this.size < 0) {
          this.y = canvas.height / window.devicePixelRatio;
          this.x = Math.random() * canvas.width / window.devicePixelRatio;
        }

        if (this.x > canvas.width / window.devicePixelRatio) this.x = 0;
        else if (this.x < 0) this.x = canvas.width / window.devicePixelRatio;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    let animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      scaleCanvas();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [numberOfParticles]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />;
};

export default ParticlesGoUp;
