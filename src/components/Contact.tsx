import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 321 1234567", "+92 42 1234567"],
      link: "tel:+923211234567",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@techversa.com", "support@techversa.com"],
      link: "mailto:info@techversa.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Bahria Town, Lahore", "Punjab, Pakistan"],
      link: "https://maps.google.com/?q=Bahria+Town+Lahore",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      link: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/techversa",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/techversa",
      bgColor: "from-blue-400 to-blue-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/techversa",
      bgColor: "from-blue-600 to-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/techversa",
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/923211234567",
      bgColor: "from-green-500 to-green-600",
    },
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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(34,197,94,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wider font-medium">
              Get In Touch
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Reach out to us and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIdx) => (
                        <p key={detailIdx} className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                          {info.link ? (
                            <a
                              href={info.link}
                              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group/link"
                              target={info.link.startsWith('http') ? "_blank" : undefined}
                              rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            >
                              {detail}
                              {info.link.startsWith('http') && (
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                              )}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>

              {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-xl">
                Follow Us
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, idx) => (
                  <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-3 p-4 bg-gradient-to-r ${social.bgColor} rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      title={social.name}
                    >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{social.name}</span>
                  </motion.a>
                  ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">
                Our Location
              </h4>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.227375047!2d74.00472469726561!3d31.483103089077267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sBahria%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704110400000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="TechVersa Office Location"
                />
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss your ideas and turn them into reality. We're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="mailto:info@techversa.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary text-center"
                >
                  Send Email
                </motion.a>
                <motion.a
                  href="tel:+923211234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary text-center"
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
