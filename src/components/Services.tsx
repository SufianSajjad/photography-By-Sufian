import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Full Stack Development',
      icon: Code,
      description: 'End-to-end web application development with modern frameworks and best practices.',
      features: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'MEAN Stack (MongoDB, Express, Angular, Node.js)',
        'PERN Stack (PostgreSQL, Express, React, Node.js)',
        'Next.js Applications',
        'Java Spring Boot',
        '.NET Framework',
        'Electron Desktop Apps'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform and native mobile applications for iOS and Android.',
      features: [
        'React Native Development',
        'Flutter Applications',
        'Kotlin for Android',
        'Swift for iOS',
        'Cross-platform Solutions',
        'Native Performance',
        'App Store Optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Web Applications',
      icon: Globe,
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      features: [
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'API Development',
        'Performance Optimization',
        'SEO Optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Blockchain Development',
      icon: Zap,
      description: 'Decentralized applications and smart contract development.',
      features: [
        'Smart Contract Development',
        'Solidity Programming',
        'Web3.js Integration',
        'Go Blockchain Development',
        'DeFi Applications',
        'NFT Marketplaces',
        'DApp Development'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Database & Backend',
      icon: Database,
      description: 'Robust backend systems and database design for scalable applications.',
      features: [
        'Database Design & Optimization',
        'RESTful API Development',
        'GraphQL APIs',
        'Microservices Architecture',
        'Cloud Deployment',
        'Database Migration',
        'Performance Tuning'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Generative AI',
      icon: Brain,
      description: 'AI-powered applications and machine learning solutions.',
      features: [
        'AI Integration',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbot Development',
        'AI-Powered Analytics',
        'Custom AI Solutions'
      ],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const currentService = services[activeService];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive development solutions covering full stack, mobile, blockchain, and AI technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-primary-500'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {service.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                        activeService === service.id ? 'rotate-90 text-primary-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${currentService.color}`}>
                  <currentService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {currentService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-primary"
                >
                  Get Started with {currentService.title}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 