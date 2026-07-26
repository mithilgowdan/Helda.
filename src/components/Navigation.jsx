import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'glassmorphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Editions</div>
        <div className="flex gap-8 items-center">
          <a href="#features" className="text-sm hover:text-accent transition">
            Features
          </a>
          <a href="#showcase" className="text-sm hover:text-accent transition">
            Showcase
          </a>
          <a href="#updates" className="text-sm hover:text-accent transition">
            Updates
          </a>
          <button className="px-6 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
