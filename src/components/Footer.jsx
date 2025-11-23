import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-dark text-white py-16 px-6 overflow-hidden">
      {/* Floating / Blur shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl grid md:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
            Aynal's Solutions
            </span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Crafting exceptional digital solutions that drive growth through innovative eCommerce, LMS, and ERP systems.
          </p>
          <div className="flex space-x-4">
            {["LinkedIn", "Twitter", "GitHub"].map((item, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gradient bg-clip-text text-transparent from-pink-400 via-purple-400 to-blue-400 animate-gradient">
            Services
          </h3>
          <ul className="space-y-2 text-gray-400">
            {["eCommerce Development", "LMS Platforms", "ERP Systems", "Custom Web Apps"].map((service, idx) => (
              <li key={idx}>
                <a className="hover:text-white transition-colors">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gradient bg-clip-text text-transparent from-pink-400 via-purple-400 to-blue-400 animate-gradient">
            Company
          </h3>
          <ul className="space-y-2 text-gray-400">
            {["About Us", "Portfolio", "Careers", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Aynal's Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
