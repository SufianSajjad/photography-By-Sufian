import React, { memo } from "react";
import { Code, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">TECHVERSA</h2>
              <p className="text-xs text-gray-400 tracking-wide">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:techversa.io@gmail.com"
                className="hover:text-white transition-colors"
              >
                techversa.io@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Bahria Town, Lahore</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div>© {currentYear} TechVersa. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
