import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // Animated background using canvas
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = `rgba(0, 122, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 122, 255, ${0.1 * (1 - distance / 150)})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Text animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
    })

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
    })

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.6,
    })
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden pt-20" ref={heroRef}>
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
          The RenAIssance
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          Experience the future of commerce with AI-powered agentic platforms and seamless integrations
        </p>
        <div className="hero-cta flex gap-4">
          <button className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">
            Explore Editions
          </button>
          <button className="px-8 py-3 glassmorphism text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
