import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Updates = () => {
  const updates = [
    {
      date: 'Jan 2026',
      title: 'Multi-Agent Orchestration',
      description: 'Deploy and manage multiple AI agents working in concert for complex tasks.',
      badge: 'New'
    },
    {
      date: 'Feb 2026',
      title: '10x Performance Boost',
      description: 'Significant infrastructure improvements delivering unprecedented speed.',
      badge: 'Featured'
    },
    {
      date: 'Mar 2026',
      title: 'Unified Commerce Platform',
      description: 'Seamlessly manage all channels from a single, intuitive dashboard.',
      badge: 'Enterprise'
    },
  ]

  useEffect(() => {
    const updateItems = document.querySelectorAll('.update-item')
    updateItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="updates" className="relative w-full py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Latest Updates
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Stay updated with the latest features and improvements
        </p>

        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={index} className="update-item glassmorphism p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-semibold">{update.date}</span>
                    <span className="px-3 py-1 bg-accent bg-opacity-20 text-accent rounded-full text-sm font-semibold">
                      {update.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{update.title}</h3>
                  <p className="text-gray-400">{update.description}</p>
                </div>
                <button className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition font-semibold whitespace-nowrap">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates
