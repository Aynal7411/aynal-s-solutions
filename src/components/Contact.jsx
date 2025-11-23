import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden text-white">
      {/* Floating blurred shapes */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Container */}
      <div className="relative z-10 container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
        {/* Left info panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg mb-8 text-blue-200">
            Share your vision, and we’ll bring it to life with cutting-edge digital solutions. Get in touch for a free consultation.
          </p>

          <div className="space-y-6">
            {[
              { icon: "📧", title: "Email Us", value: "hello@softcraft.dev" },
              { icon: "📞", title: "Call Us", value: "+1 (555) 123-4567" },
              { icon: "🕒", title: "Business Hours", value: "Mon-Fri: 9AM-6PM EST" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 text-white text-xl shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="text-blue-100">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right form panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedInput name="name" label="Name *" value={formData.name} onChange={handleChange} />
              <AnimatedInput name="email" label="Email *" value={formData.email} onChange={handleChange} type="email" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedInput name="company" label="Company" value={formData.company} onChange={handleChange} />
              <AnimatedSelect name="service" label="Service Interest" value={formData.service} onChange={handleChange} />
            </div>
            <AnimatedTextarea name="message" label="Project Details *" value={formData.message} onChange={handleChange} />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 font-bold rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Consultation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Animated reusable components
const AnimatedInput = ({ name, label, value, onChange, type = "text" }) => (
  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
    <label className="block text-sm font-medium mb-2 text-blue-100">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={label.includes("*")}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      placeholder={`Your ${label.replace("*", "")}`}
    />
  </motion.div>
);

const AnimatedSelect = ({ name, label, value, onChange }) => (
  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
    <label className="block text-sm font-medium mb-2 text-blue-100">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    >
      <option value="">Select a service</option>
      <option value="ecommerce">eCommerce Solutions</option>
      <option value="lms">Learning Management System</option>
      <option value="erp">ERP System</option>
      <option value="custom">Custom Development</option>
    </select>
  </motion.div>
);

const AnimatedTextarea = ({ name, label, value, onChange }) => (
  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
    <label className="block text-sm font-medium mb-2 text-blue-100">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows="4"
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      placeholder="Tell us about your project requirements..."
    ></textarea>
  </motion.div>
);

export default Contact;
