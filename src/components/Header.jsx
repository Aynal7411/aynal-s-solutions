import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Scroll listener for active link highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // header offset
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu
    }
  };

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Discussion" },
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 bg-opacity-70 shadow-lg transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl">
  <span className="text-white font-bold text-xl select-none">AH</span>
</div>
          <span className="text-white font-bold text-xl">Aynal's Solutions</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`transition-colors font-medium relative py-1 ${
                activeLink === link.id
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-white/30 text-white px-6 py-2 rounded-lg backdrop-blur-md hover:bg-white/50 transition-colors shadow-md">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 relative flex flex-col justify-between items-center">
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transform transition duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transform transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transform transition duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 bg-opacity-90 backdrop-blur-md rounded-b-xl shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`text-white font-medium transition-colors ${
                activeLink === link.id ? "underline" : "hover:text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button className="bg-white/30 text-white px-6 py-2 rounded-lg backdrop-blur-md hover:bg-white/50 transition-colors w-fit shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
