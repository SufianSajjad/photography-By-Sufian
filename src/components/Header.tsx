import React, { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone, Mail, Camera, Instagram, Facebook } from "lucide-react";

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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-gray-700/50" : "bg-transparent"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(14, 14, 14, 0.95) 0%, rgba(9, 13, 19, 0.95) 100%)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(8, 2, 14, 0.1) inset"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 focus:outline-none group"
          >
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-slate-800/90 hover:bg-slate-700 border border-slate-600/50"
                  : "bg-slate-800/70 hover:bg-slate-700/90 backdrop-blur-sm border border-white/10"
              }`}
            >
              <Camera className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />
            </div>
            <div className="text-left">
              <div className={`text-xl font-bold tracking-tight ${
                isScrolled ? "text-white" : "text-white"
              }`}>
                Sufian Sajjad
              </div>
              <div className={`text-sm font-medium ${
                isScrolled ? "text-purple-300" : "text-purple-200"
              }`}>
                Photography
              </div>
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
                    ? "text-gray-100 hover:text-purple-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-purple-400 to-blue-400"
                      : "bg-gradient-to-r from-white to-purple-400"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Contact Button & Social Links */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/sufian_sajjad_photography"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-400 hover:text-purple-400 hover:bg-slate-700/50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/sufiansajjadphotography"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-400 hover:text-blue-400 hover:bg-slate-700/50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={() => scrollToSection("#contact")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 border border-purple-500/30"
                  : "bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white hover:from-purple-600 hover:to-blue-600 backdrop-blur-sm border border-white/20"
              }`}
            >
              Book Session
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-slate-800/90 border border-slate-600/50"
                  : "bg-slate-800/70 backdrop-blur-sm border border-white/10"
              }`}
            >
              <Camera className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-white">Sufian Sajjad</div>
              <div className="text-xs text-purple-300 font-medium">Photography</div>
            </div>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "bg-slate-700 hover:bg-slate-600 border border-slate-600/50"
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
            className="lg:hidden shadow-xl rounded-b-lg border-t border-slate-600/50 overflow-hidden backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)",
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-200 hover:bg-slate-700/50 hover:text-purple-400 transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-600/50">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  Book Session
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>+92 321 1234567</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>sufian.sajjad@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 pt-3">
                    <a
                      href="https://instagram.com/sufian_sajjad_photography"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-400 hover:text-purple-400 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/sufiansajjadphotography"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
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