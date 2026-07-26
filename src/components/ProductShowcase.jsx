import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Sidekick AI',
      description: 'Your intelligent commerce assistant powered by advanced AI models.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Natural Language Commands', 'Real-time Suggestions', 'Context Aware']
    },
    {
      id: 2,
      name: 'Flow Automation',
      description: 'Automate complex workflows with visual no-code builders.',
      color: 'from-purple-500 to-pink-500',
      features: ['Drag & Drop Builder', 'Conditional Logic', '1000+ Integrations']
    },
    {
      id: 3,
      name: 'Analytics Suite',
      description: 'Deep insights into customer behavior and business performance.',
      color: 'from-green-500 to-emerald-500',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports']
    },
  ]

  useEffect(() => {
    const showcaseCards = document.querySelectorAll('.showcase-card')
    showcaseCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="showcase" className="relative w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Product Lineup
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Discover our suite of products designed to transform your commerce experience
        </p>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="showcase-card glassmorphism p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center overflow-hidden group"
            >
              <div className={`flex-1 h-64 rounded-xl bg-gradient-to-br ${product.color} opacity-80 group-hover:opacity-100 transition duration-300`} />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="px-6 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-blue-600 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
