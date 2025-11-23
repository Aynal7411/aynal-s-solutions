import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🛒",
    title: "eCommerce Solutions",
    description:
      "Custom online stores with seamless shopping experiences, payment integration, and inventory management.",
    features: ["Shopify/WordPress", "Payment Gateways", "Inventory Management", "Analytics Dashboard"],
  },
  {
    icon: "🎓",
    title: "Learning Management Systems",
    description:
      "Comprehensive LMS platforms for educational institutions and corporate training programs.",
    features: ["Course Management", "Progress Tracking", "Certification", "Mobile Learning"],
  },
  {
    icon: "📊",
    title: "ERP Systems",
    description: "Enterprise resource planning solutions to streamline business operations and data management.",
    features: ["Inventory Control", "HR Management", "Accounting", "Supply Chain"],
  },
  {
    icon: "🌐",
    title: "Custom Web Development",
    description: "Bespoke web applications tailored to your specific business requirements.",
    features: ["React/Node.js", "Responsive Design", "API Integration", "Cloud Deployment"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { y: -10, scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-light relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-dark mb-4"
          >
            Our <span className="animated-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions to power your business growth and operational efficiency.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white-800 rounded-2xl p-8 border border-gray-100 shadow-lg cursor-pointer"
            >
              <div className="text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-primary font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animated Shapes */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
    </section>
  );
}
