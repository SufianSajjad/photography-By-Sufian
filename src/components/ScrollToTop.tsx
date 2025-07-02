import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttled scroll handler for better performance
    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(toggleVisibility, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
          style={{
            background: "linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={24} 
            className="text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-200" 
          />
          
          {/* Animated ring on hover */}
          <div className="absolute inset-0 rounded-full border border-blue-400/40 group-hover:border-blue-300/60 group-hover:scale-110 transition-all duration-300" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/10 group-hover:bg-blue-400/20 transition-all duration-300" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full animate-pulse">
            <div className="w-full h-full rounded-full bg-blue-400/5"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 