import React, { memo, useMemo } from "react";
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

  const footerLinks = useMemo(
    () => ({
      services: [
        "Full Stack Development",
        "Mobile Development",
        "Blockchain Development",
        "AI & Machine Learning",
        "Cloud & DevOps",
      ],
      company: ["About Us", "Our Team", "Portfolio", "Testimonials", "Contact"],
    }),
    []
  );

  const socialLinks = useMemo(
    () => [
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
    ],
    []
  );

  const contactInfo = useMemo(
    () => [
      { icon: Phone, text: "+92 321 1234567", href: "tel:+923211234567" },
      {
        icon: Mail,
        text: "info@techversa.com",
        href: "mailto:info@techversa.com",
      },
      { icon: MapPin, text: "Bahria Town, Lahore", href: "#" },
    ],
    []
  );

  const FooterList = ({ title, items }: { title: string; items: string[] }) => (
    <div>
      <h3 className="text-lg font-semibold mb-6 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
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
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-6 space-y-6">
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

            <p className="text-gray-300 leading-relaxed max-w-md">
              We deliver innovative technology solutions that drive business
              growth and digital transformation. Our expertise spans across
              modern web technologies, mobile applications, and enterprise
              solutions.
            </p>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <div className="p-2 bg-gray-800 rounded-md">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </div>

            <div className="flex space-x-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterList title="Services" items={footerLinks.services} />
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <FooterList title="Company" items={footerLinks.company} />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TechVersa. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
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

export default memo(Footer);
