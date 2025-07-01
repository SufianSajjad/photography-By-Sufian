import React from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  MessageCircle,
  Code,
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
    company: ["About Us", "Our Team", "Portfolio", "Testimonials", "Contact"],
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/techversa",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/techversa",
      label: "Twitter",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/techversa",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/techversa",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/923211234567",
      label: "WhatsApp",
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "+92 321 1234567", href: "tel:+923211234567" },
    {
      icon: Mail,
      text: "info@techversa.com",
      href: "mailto:info@techversa.com",
    },
    { icon: MapPin, text: "Bahria Town, Lahore", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Subtle top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {/* Logo and Brand */}
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

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                We deliver innovative technology solutions that drive business
                growth and digital transformation. Our expertise spans across
                modern web technologies, mobile applications, and enterprise
                solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <div className="p-2 bg-gray-800 rounded-md">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TechVersa. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
