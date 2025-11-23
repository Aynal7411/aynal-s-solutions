import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap', icon: '🔍' },
  { number: '02', title: 'Design & Prototyping', description: 'Our designers create intuitive UI/UX designs and interactive prototypes', icon: '🎨' },
  { number: '03', title: 'Development', description: 'Agile development with regular updates and milestone deliveries', icon: '💻' },
  { number: '04', title: 'Testing & Quality', description: 'Comprehensive testing to ensure bug-free and high-performance delivery', icon: '🧪' },
  { number: '05', title: 'Deployment', description: 'Smooth deployment with proper documentation and training', icon: '🚀' },
  { number: '06', title: 'Support & Maintenance', description: 'Ongoing support and maintenance to keep your system running smoothly', icon: '🔧' }
]

const Process = () => {
  return (
    <section id="process" className="relative py-20 px-6 bg-light overflow-hidden">
      {/* Floating Blur Shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-40 -right-24 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to ensure quality, transparency, and successful project delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient Number / Icon */}
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 animate-gradient">
                {step.icon}
              </div>
              <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {/* Floating Circle for Extra Animation */}
              <span className="absolute -top-4 -right-4 w-12 h-12 bg-purple-200/30 rounded-full blur-2xl animate-pulse-slow"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
