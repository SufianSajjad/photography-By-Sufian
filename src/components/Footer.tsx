import React from "react";
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
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Full Stack Development",
      "Mobile Development",
      "Web Applications",
      "Blockchain Development",
      "AI & Machine Learning",
    ],
    technologies: [
      "React & Next.js",
      "React Native & Flutter",
      "Node.js & Express",
      "Solidity & Web3",
      "Python & TensorFlow",
    ],
    company: ["About Us", "Our Team", "Portfolio", "Testimonials", "Contact"],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    {
      icon: Mail,
      href: "mailto:contact@waleedabdullah.com",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "+92 300 1234567", href: "tel:+923001234567" },
    {
      icon: Mail,
      text: "hello@techversa.com",
      href: "mailto:hello@techversa.com",
    },
    { icon: MapPin, text: "Lahore, Pakistan", href: "#" },
  ];

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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
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
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-200">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Technologies
            </h3>
            <ul className="space-y-3">
              {footerLinks.technologies.map((tech, index) => (
                <li key={tech}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {tech}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-white font-medium mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-xs mb-3">
                Get our latest news and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-l-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Waleed & Abdullah. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Pakistan</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
