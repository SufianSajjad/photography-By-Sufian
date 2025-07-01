import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

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
      const yOffset = -80;
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
    { name: "Projects", href: "#Projects" },
    { name: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition">
              <span className="text-white font-semibold text-base tracking-wide">
                TECHVERSA
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-lg text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 relative group transition"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="px-3 py-1.5 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg shadow-lg">
              <span className="text-white font-bold tracking-wider text-sm">
                TECHVERSA
              </span>
            </div>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 shadow-xl rounded-b-lg border-t border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold shadow-lg transition"
                >
                  Contact Us
                </button>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span>+92 321 1234567</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span>info@techversa.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
