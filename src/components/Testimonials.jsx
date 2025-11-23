import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "EduTech Solutions",
    role: "CEO",
    content:
      "The LMS platform developed by SoftCraft has transformed our online education delivery. The system is intuitive, scalable, and our students love it!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "RetailPro",
    role: "Operations Director",
    content:
      "Their eCommerce solution increased our online sales by 200% in the first quarter. The team was professional and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Manufacturing Corp",
    role: "IT Manager",
    content:
      "The custom ERP system streamlined our entire operation. Inventory management, HR, and accounting are now seamlessly integrated.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 bg-light overflow-hidden"
    >
      {/* Floating Blur Shapes */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4 animated-gradient">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped
            transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span
                    key={idx}
                    className="text-yellow-400 text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-center">
                "{testimonial.content}"
              </p>
              <div className="text-center">
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
