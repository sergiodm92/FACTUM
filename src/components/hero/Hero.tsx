import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow from '../../../public/hero-arrows.png'

const Hero: React.FC = () => {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particlesArray: Particle[] = []
    const numberOfParticles = 100

    const getRandomOrange = () => {
      const red = Math.floor(Math.random() * 56) + 200  // Alto en rojo (200-255)
      const green = Math.floor(Math.random() * 101) + 100 // Moderado en verde (100-200)
      const blue = Math.floor(Math.random() * 50)  // Bajo en azul (0-50)
      return `rgba(${red}, ${green}, ${blue}, 0.7)`  // Color con opacidad de 0.7
    }

    class Particle {

      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {

        this.x = canvas ? Math.random() * canvas.width : 0
        this.y = canvas ? canvas.height : 0 // Inician desde la parte inferior del canvas
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1.5 // Movimiento horizontal aleatorio
        this.speedY = -(Math.random()) // Siempre hacia arriba
        this.color = getRandomOrange()  // Color en tonos de naranja
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Reinicia la partícula cuando llega a la parte superior
        if (this.y + this.size < 0) {
          this.y = canvas?.height || 0
          this.x = canvas ? Math.random() * canvas.width : 0
        }

        // Si la partícula sale por los lados, reaparece en el otro lado
        if (canvas && this.x > canvas.width) this.x = 0
        else if (canvas && this.x < 0) this.x = canvas.width
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.closePath()
          ctx.fill()
        }
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function animate() {
      if (ctx && canvas) {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].draw()
        }
      }
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const titles = [
    "Nuestro trabajo es mejorar tu negocio",
    "Aumentamos tu rendimiento",
    "Compromiso en cada paso",
    "Te acompañamos en tu camino",
    "Optimizamos tus procesos",
    "Transformamos tus ventas",
    "Agregamos valor a tu negocio",
    "Mejoramos tus procesos",
    "Automatizacón"
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Desactiva las flechas para mayor simplicidad
    autoplay: true, // Activa el autoplay
    autoplaySpeed: 3000, // Velocidad del autoplay (en ms)
    afterChange: (current:number) => setCurrentSlide(current),
    customPaging: (i:number) => (
      <div className="relative">
        <div className={`w-[8px] h-[8px] bg-transparent ${i === currentSlide ? 'bg-orange-700' : 'bg-transparent'
          } border-orange-600 border-[1px] rounded-full absolute top-0 left-0 mt-5 slick-dot`}></div>
      </div>
    ),
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-orange-600 to-orange-800 dark:bg-gradient-to-b dark:from-black dark:via-[#1a0b00] dark:to-[#321605]">
      {/* Fondo de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Slider de texto */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <Slider {...settings}>
          {titles.map((title, index) => (
            <div key={`title-${index}`}>
              <h1 className="text-6xl font-semi-bold mb-4 text-white">{title}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <a href='#aboutus' className="absolute bottom-12 animate-up-down cursor-pointer">
      <img src={arrow} alt="hero"  />
      </a>
    </section>
  )
}

export default Hero
