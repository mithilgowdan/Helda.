import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Agentic Commerce',
      description: 'Harness the power of intelligent agents to automate and optimize your entire commerce ecosystem.',
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Performance',
      description: 'Optimized infrastructure delivers sub-100ms response times across all operations.',
    },
    {
      icon: '🔄',
      title: 'Seamless Integrations',
      description: 'Connect with 1000+ apps and platforms with zero-configuration setup.',
    },
    {
      icon: '🎨',
      title: 'Glassmorphic Design',
      description: 'Modern, beautiful UI components that adapt to your brand identity.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Advanced metrics and insights to drive data-backed decisions.',
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with all major standards.',
    },
  ]

  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card')
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="features" className="relative w-full py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Powerful Features
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Everything you need to build, scale, and succeed in modern commerce
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glassmorphism p-8 rounded-2xl hover:shadow-2xl transition duration-300 spotlight group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
