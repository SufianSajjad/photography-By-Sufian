import React, { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

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
    { name: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-gray-700/50" : "bg-transparent"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1) inset"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 focus:outline-none group"
          >
            <div
              className={` rounded-md transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-600/50"
                  : "bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm"
              }`}
            >
              <img
                src="/images/logo/Techversa.jpeg"
                alt="Company Logo"
                className="h-14 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-lg font-medium relative group transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-100 hover:text-blue-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                      : "bg-gradient-to-r from-white to-cyan-400"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700 border border-blue-500/50"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            }`}
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
            <div
              className={`px-3 py-1.5 rounded-lg shadow-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 border border-blue-500/50"
                  : "bg-gradient-to-r from-blue-600/80 to-cyan-500/80 backdrop-blur-sm"
              }`}
            >
              <img
                src="/images/logo/Techversa.jpeg"
                alt="Company Logo"
                className="h-6 w-auto"
              />
            </div>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "bg-gray-700 hover:bg-gray-600 border border-gray-600/50"
                : "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden shadow-xl rounded-b-lg border-t border-gray-600/50 overflow-hidden backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)",
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-200 hover:bg-gray-700/50 hover:text-blue-400 transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-600/50">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  Contact Us
                </button>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>+92 321 1234567</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
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
