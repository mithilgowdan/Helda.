import React, { useEffect } from 'react'
import gsap from 'gsap'

const CTA = () => {
  useEffect(() => {
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta-content',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })
  }, [])

  return (
    <section className="relative w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="cta-content glassmorphism p-12 rounded-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to Transform Your Commerce?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking merchants using Editions to power their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-black rounded-lg font-bold text-lg hover:bg-blue-600 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-bold text-lg hover:bg-accent hover:text-black transition">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Features</a></li>
              <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">About</a></li>
              <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Docs</a></li>
              <li><a href="#" className="hover:text-accent transition">API</a></li>
              <li><a href="#" className="hover:text-accent transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition">Terms</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Editions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">Twitter</a>
            <a href="#" className="hover:text-accent transition">LinkedIn</a>
            <a href="#" className="hover:text-accent transition">GitHub</a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default CTA
