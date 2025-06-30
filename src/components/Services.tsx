import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Shield,
  Cpu,
  Brain,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "Blockchain Development",
      icon: Zap,
      shortDesc: "Secure, decentralized blockchain solutions. Unlock new business models and global trust with Web3 expertise.",
      color: "from-blue-400 to-cyan-400",
      iconBg: "bg-gradient-to-br from-blue-600/60 to-cyan-400/40",
      borderColor: "border-blue-400/60",
    },
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: Brain,
      shortDesc: "Custom AI/ML for automation, analytics, and smarter decisions. Transform your data into real business value.",
      color: "from-teal-400 to-cyan-400",
      iconBg: "bg-gradient-to-br from-teal-600/60 to-cyan-400/40",
      borderColor: "border-teal-400/60",
    },
    {
      id: 2,
      title: "Full Stack Development",
      icon: Code,
      shortDesc: "Robust, scalable web/mobile solutions. Modern architectures for seamless user experiences and rapid launch.",
      color: "from-indigo-400 to-purple-400",
      iconBg: "bg-gradient-to-br from-indigo-600/60 to-purple-400/40",
      borderColor: "border-indigo-400/60",
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: Smartphone,
      shortDesc: "High-performance native/cross-platform apps. Beautiful design meets flawless functionality everywhere.",
      color: "from-green-400 to-emerald-400",
      iconBg: "bg-gradient-to-br from-green-600/60 to-emerald-400/40",
      borderColor: "border-green-400/60",
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      icon: Database,
      shortDesc: "Scale with secure cloud, CI/CD, and automation. Reliable, optimized infrastructure for growth.",
      color: "from-purple-400 to-pink-400",
      iconBg: "bg-gradient-to-br from-purple-600/60 to-pink-400/40",
      borderColor: "border-purple-400/60",
    },
    {
      id: 5,
      title: "UI/UX Design",
      icon: Globe,
      shortDesc: "Stunning, intuitive UI/UX that delights users and drives conversions. Elevate your brand experience.",
      color: "from-orange-400 to-red-400",
      iconBg: "bg-gradient-to-br from-orange-600/60 to-red-400/40",
      borderColor: "border-orange-400/60",
    },
  ];

  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "150+" },
    { icon: Target, label: "Client Satisfaction", value: "98%" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.05),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
            We build innovative digital solutions for ambitious businesses. Explore our core services below.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Circuit Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: typeof window !== 'undefined' ? window.scrollY * 0.06 : 0 }}
        >
          <div
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              opacity: 0.20,
              mixBlendMode: 'lighten',
            }}
          />
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-col gap-10 mt-12">
          {/* Dedicated row for Blockchain Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full"
          >
            {(() => {
              const service = services[0];
              const Icon = service.icon;
              return (
                <div
                  className={`relative group rounded-3xl border ${service.borderColor} bg-white/10 dark:bg-gray-900/40 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/80 mx-auto`}
                  style={{ minHeight: 320, maxWidth: '900px', padding: '2.5rem 2rem' }}
                >
                  {/* Circuit SVG Overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="900" height="320" rx="32" fill="none" />
                    <g stroke="url(#circuitGradient)" strokeWidth="1.2">
                      <path d="M60 60h120v60h80v60h120v60h80v60h120" />
                      <path d="M840 60h-120v60h-80v60h-120v60h-80v60h-120" />
                    </g>
                    <defs>
                      <linearGradient id="circuitGradient" x1="0" y1="0" x2="900" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38bdf8" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Icon with Glassy/Circuit Background */}
                  <div className={`relative flex items-center justify-center w-20 h-20 mx-auto -mt-12 mb-4 rounded-2xl ${service.iconBg} shadow-lg backdrop-blur-md border border-white/20`}>
                    <Icon size={48} className="text-white drop-shadow-lg" style={{ filter: "drop-shadow(0 0 12px #38bdf8)" }} />
                  </div>
                  {/* Title & Short Description */}
                  <div className="px-8 pb-10 pt-2 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">{service.title}</h3>
                    <p className="text-gray-200 text-base leading-relaxed min-h-[48px] max-w-2xl">{service.shortDesc}</p>
                  </div>
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-cyan-400/80 transition-all duration-300" />
                </div>
              );
            })()}
          </motion.div>
          {/* Grid for remaining services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.slice(1).map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`relative group rounded-2xl border ${service.borderColor} bg-white/10 dark:bg-gray-900/40 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-cyan-400/80`}
                  style={{ minHeight: 260, padding: '2rem 1.5rem' }}
                >
                  {/* Circuit SVG Overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="400" height="260" rx="24" fill="none" />
                    <g stroke="url(#circuitGradient)" strokeWidth="1.2">
                      <path d="M30 30h60v40h40v40h60v40h40v40h60" />
                      <path d="M370 30h-60v40h-40v40h-60v40h-40v40h-60" />
                    </g>
                    <defs>
                      <linearGradient id="circuitGradient" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38bdf8" />
                        <stop offset="1" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Icon with Glassy/Circuit Background */}
                  <div className={`relative flex items-center justify-center w-16 h-16 mx-auto -mt-8 mb-2 rounded-xl ${service.iconBg} shadow-lg backdrop-blur-md border border-white/20`}>
                    <Icon size={36} className="text-white drop-shadow-lg" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }} />
                  </div>
                  {/* Title & Short Description */}
                  <div className="px-6 pb-8 pt-2 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">{service.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed min-h-[48px]">{service.shortDesc}</p>
                  </div>
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-cyan-400/80 transition-all duration-300" />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
