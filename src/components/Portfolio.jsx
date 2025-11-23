import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      title: 'EduLearn Platform',
      category: 'LMS',
      description: 'A comprehensive learning management system for online education',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'ShopSmart E-commerce',
      category: 'eCommerce',
      description: 'Modern e-commerce platform with AI-powered recommendations',
      tags: ['Next.js', 'Stripe', 'Firebase']
    },
    {
      title: 'BusinessFlow ERP',
      category: 'ERP',
      description: 'Enterprise resource planning system for manufacturing',
      tags: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'MarketPro Retail',
      category: 'eCommerce',
      description: 'Multi-vendor marketplace with real-time analytics',
      tags: ['React', 'GraphQL', 'AWS']
    }
  ]

  return (
    <section id="portfolio" className="relative py-20 px-6 bg-light overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-purple-300/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Animated Gradient Header */}
              <div className="h-48 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-bold text-lg animate-gradient">
                {project.title}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
