import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Zap,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Full Stack Development",
      "Mobile Development",
      "Blockchain Development",
      "AI & Machine Learning",
      "Cloud & DevOps",
    ],
    company: [
      "About Us", 
      "Our Team", 
      "Portfolio", 
      "Testimonials", 
      "Contact"
    ],
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/techversa", 
      label: "LinkedIn", 
      color: "hover:bg-blue-600" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/techversa", 
      label: "Twitter", 
      color: "hover:bg-blue-400" 
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/techversa", 
      label: "Facebook", 
      color: "hover:bg-blue-700" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/techversa", 
      label: "Instagram", 
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" 
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/923211234567", 
      label: "WhatsApp", 
      color: "hover:bg-green-500" 
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "+92 321 1234567", href: "tel:+923211234567" },
    { icon: Mail, text: "info@techversa.com", href: "mailto:info@techversa.com" },
    { icon: MapPin, text: "Bahria Town, Lahore", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="space-y-6">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    TECHVERSA
                  </h2>
                  <p className="text-xs text-gray-400 tracking-wider">
                    DIGITAL INNOVATION
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transforming ideas into powerful digital experiences. We craft
                innovative solutions that drive growth and deliver exceptional
                results for businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary-600/20 transition-colors duration-200">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 hover:shadow-lg group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} TechVersa. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="hidden sm:inline">in Pakistan</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
