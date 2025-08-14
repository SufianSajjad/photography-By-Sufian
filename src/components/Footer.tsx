import React, { memo } from "react";
import { Camera, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle, Heart, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Wedding Photography",
    "Portrait Sessions", 
    "Corporate Events",
    "Family Photography",
    "Engagement Shoots"
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/photographystudio_pk",
      color: "hover:text-pink-400"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com/photographystudiopk",
      color: "hover:text-blue-400"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/923227287185",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="relative">
      {/* Gradient Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 via-blue-500 to-transparent" />

      <div className="bg-gray-900/80 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    PhotoStudio
                  </h2>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">
                    Capturing Moments
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Professional photography services across Punjab, specializing in weddings, 
                portraits, and special events. Creating timeless memories with artistic vision.
              </p>

              {/* Awards */}
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Best Wedding Photographer 2024</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Studio Address</p>
                    <p className="text-sm text-gray-400">MM Alam Road, Gulberg<br />Lahore, Punjab</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:+923227287185"
                      className="hover:text-green-400 transition-colors duration-200"
                    >
                      +92 322 7287185
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:info@photographystudio.pk"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      info@photographystudio.pk
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Follow Our Work</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700/50 hover:transform hover:scale-110`}
                        title={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© {currentYear} PhotoStudio Pakistan. All rights reserved.</span>
                <div className="hidden md:flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>in Lahore</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="text-sm text-gray-400 text-center md:text-right">
                <p className="font-medium text-white mb-1">Studio Hours</p>
                <p>Mon - Sat: 9AM - 8PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
              Professional photography services across Lahore, Karachi, Islamabad and all major cities in Pakistan. 
              Specializing in traditional Pakistani weddings, modern ceremonies, corporate events, and portrait photography. 
              Licensed and insured with 5+ years of experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);