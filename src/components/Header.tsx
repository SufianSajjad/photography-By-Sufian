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
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo - More Elegant */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 focus:outline-none group"
          >
            <div
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-rose-500/30"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Camera className="h-7 w-7 text-rose-400 group-hover:text-rose-300 transition-colors duration-200" />
            </div>
            <div className="text-left">
              <div className={`text-xl font-bold tracking-tight bg-gradient-to-r from-rose-300 via-purple-300 to-amber-300 bg-clip-text text-transparent`}>
                Sufian Sajjad
              </div>
              <div className={`text-xs font-light tracking-widest uppercase ${
                isScrolled ? "text-gray-400" : "text-gray-300"
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
                className={`text-base font-light relative group transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-200 hover:text-rose-400"
                    : "text-white hover:text-rose-300"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-rose-400 to-purple-400"
                      : "bg-gradient-to-r from-rose-300 to-amber-300"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Contact Button & Social Links */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com/weddingsbysufian"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-400 hover:text-pink-400 hover:bg-pink-500/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                title="@weddingsbysufian"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/photographybysufian"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-400 hover:text-rose-400 hover:bg-rose-500/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                title="@photographybysufian"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/weddingsbysufian"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            
            <button
              onClick={() => scrollToSection("#contact")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isScrolled
                  ? "bg-gradient-to-r from-rose-500 to-purple-500 text-white hover:from-rose-600 hover:to-purple-600"
                  : "bg-gradient-to-r from-rose-500/90 to-purple-500/90 text-white hover:from-rose-500 hover:to-purple-500 backdrop-blur-sm border border-white/20"
              }`}
            >
              Book Now
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
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-rose-500/30"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Camera className="h-6 w-6 text-rose-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">Sufian Sajjad</div>
              <div className="text-xs text-gray-400 font-light tracking-wider uppercase">Photography</div>
            </div>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "bg-gray-800/80 hover:bg-gray-700/80 border border-white/10"
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
            className="lg:hidden shadow-xl rounded-b-2xl border-t border-white/10 overflow-hidden backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(17, 24, 39, 0.98) 100%)",
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-200 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200 font-light"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-500 text-white font-medium shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  Book Your Session
                </button>

                <div className="mt-6 space-y-3">
                  <a 
                    href="tel:+923445271525"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-rose-400" />
                    <span>+92 344 5271525</span>
                  </a>
                  <a
                    href="mailto:photographybysufian@gmail.com"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-rose-400" />
                    <span>photographybysufian@gmail.com</span>
                  </a>
                  
                  <div className="flex items-center justify-center space-x-4 pt-3">
                    <a
                      href="https://instagram.com/weddingsbysufian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
                      title="@weddingsbysufian"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/photographybysufian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-300"
                      title="@photographybysufian"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/weddingsbysufian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
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