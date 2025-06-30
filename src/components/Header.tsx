import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const yOffset = -80; // Adjust this to match your header height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Standards", href: "#standards" },
    // { name: "Hallmarks", href: "#about" },
    { name: "Team", href: "#team" },
    // { name: "Blogs", href: "#portfolio" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 pt-9  py-4 sm:px-6 lg:px-8 hidden md:flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 focus:outline-none group"
          >
            <div className="px-3 py-2 bg-gradient-to-r  ">
              <span className="text-white font-extrabold tracking-wide text-sm sm:text-base">
                TECHVERSA
              </span>
            </div>
          </button>
        </div>

        {/* Center: Navigation */}
        <div className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-bold tracking-wide transition-colors duration-200"
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-green-900 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition duration-200"
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="px-6 py-4 space-y-4">
              {[...navItems, { name: "Contact", href: "#contact" }].map(
                (item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
