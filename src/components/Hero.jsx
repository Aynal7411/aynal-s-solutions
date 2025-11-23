import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "3+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 gradient-bg text-black overflow-hidden">

      {/* Animated background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Particles effect */}
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 30 },
            size: { value: 3 },
            move: { enable: true, speed: 1, direction: "none", random: true, outMode: "bounce" },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
          },
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Transform Your <span className="animated-gradient">Business</span> With Powerful Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl mb-8 text-blue-100"
            >
              We craft exceptional eCommerce, LMS, and ERP solutions that drive growth, streamline operations, and elevate your digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="border-2 bg-yellow text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition-all duration-500 text-lg shadow-lg transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors text-lg">
                View Our Work
              </button>
            </motion.div>
          </div>

          {/* Right Column (Floating Stats Cards) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 grid grid-cols-2 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/20 rounded-lg p-6 text-center backdrop-blur-sm shadow-md"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
