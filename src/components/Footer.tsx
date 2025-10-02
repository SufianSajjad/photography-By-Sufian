import React, { memo } from "react";
import { Camera, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Wedding Photography & Videography",
    "Pre-Wedding Shoots", 
    "Event Photography",
    "Couple Portrait Sessions",
    "Destination Weddings",
    "Commercial Photography"
  ];

  const socialLinks = [
    {
      name: "Instagram - @weddingsbysufian",
      icon: Instagram,
      url: "https://instagram.com/weddingsbysufian",
      color: "hover:text-pink-400"
    },
    {
      name: "Instagram - @photographybysufian", 
      icon: Instagram,
      url: "https://instagram.com/photographybysufian",
      color: "hover:text-rose-400"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com/weddingsbysufian",
      color: "hover:text-blue-400"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/923445271525",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black">
      {/* Elegant top border with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-rose-500/50 via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section - More Elegant */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 via-purple-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                  Sufian Sajjad
                </h2>
                <p className="text-xs text-gray-400 tracking-widest uppercase font-light">
                  Photography
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 font-light">
              Capturing love stories across Pakistan and beyond. We specialize in weddings, 
              portraits, and special events with cinematic elegance and emotional depth.
            </p>

            {/* Elegant badge */}
            <div className="flex items-center space-x-2 text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-gray-400 font-light">Trusted by 250+ Couples</span>
            </div>
          </div>

          {/* Quick Links - Refined */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center group font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Updated */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm font-light flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Premium Look */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300 group">
                <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Studio Location</p>
                  <a 
                    href="https://maps.app.goo.gl/41BR4WVAgnj2Bx237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-rose-400 transition-colors font-light"
                  >
                    The Centaurus Mall<br />Islamabad, Pakistan
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+923445271525"
                    className="hover:text-green-400 transition-colors duration-300 font-light"
                  >
                    +92 344 5271525
                  </a>
                  <br />
                  <a 
                    href="tel:+923225072406"
                    className="hover:text-green-400 transition-colors duration-300 text-sm font-light"
                  >
                    +92 322 5072406
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:photographybysufian@gmail.com"
                    className="hover:text-blue-400 transition-colors duration-300 text-sm font-light break-all"
                  >
                    photographybysufian@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links - More Elegant */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4 tracking-wide">Follow Our Journey</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105`}
                      title={social.name}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs font-light truncate">{social.name.split(' - ')[0]}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - More Refined */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
              <span className="font-light">© {currentYear} Photography by Sufian. All rights reserved.</span>
              <div className="flex items-center space-x-1.5">
                <span className="font-light">Crafted with</span>
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span className="font-light">in Islamabad</span>
              </div>
            </div>

            {/* Business Hours - Cleaner */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p className="font-medium text-white mb-1 tracking-wide">Available 24/7</p>
              <p className="font-light">Book your session anytime</p>
            </div>
          </div>
        </div>

        {/* Additional Info - More Elegant */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed font-light">
            Professional wedding photography services across Islamabad, Rawalpindi, Lahore, Kashmir, and all major cities in Pakistan. 
            Available for destination weddings worldwide. Specializing in traditional Pakistani weddings, Mehndi ceremonies, 
            Barat celebrations, Walima receptions, engagement shoots, and portrait photography.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);