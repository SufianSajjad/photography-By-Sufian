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
      shortDesc: "Secure, decentralized systems",
      description:
        "Build cutting-edge blockchain solutions with smart contracts, DeFi platforms, and Web3 integrations that revolutionize digital transactions.",
      keyFeatures: [
        "Smart Contract Development",
        "DeFi Platform Creation",
        "NFT Marketplace Solutions",
        "Web3 Integration",
        "Cryptocurrency Wallets",
        "DApp Development",
      ],
      benefits: [
        "Enhanced Security",
        "Transparency",
        "Cost Reduction",
        "Global Accessibility",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: Brain,
      shortDesc: "Intelligent automation solutions",
      description:
        "Empower your business with custom AI models, NLP solutions, and intelligent automation systems that drive innovation and efficiency.",
      keyFeatures: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Mining & Analysis",
      ],
      benefits: [
        "Process Automation",
        "Data-Driven Insights",
        "Improved Efficiency",
        "Competitive Advantage",
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
      id: 2,
      title: "Full Stack Development",
      icon: Code,
      shortDesc: "Complete web solutions",
      description:
        "End-to-end web application development using modern frameworks and scalable architectures that deliver exceptional user experiences.",
      keyFeatures: [
        "Modern Framework Development",
        "API Design & Development",
        "Database Architecture",
        "Cloud Integration",
        "Performance Optimization",
        "Security Implementation",
      ],
      benefits: [
        "Scalable Solutions",
        "Fast Development",
        "Maintainable Code",
        "Cross-Platform Compatibility",
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: Smartphone,
      shortDesc: "Cross-platform mobile apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android with superior performance and engaging user interfaces.",
      keyFeatures: [
        "Cross-Platform Development",
        "Native Performance",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      benefits: [
        "Wider Reach",
        "Cost Efficiency",
        "Faster Time to Market",
        "Consistent Experience",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      icon: Database,
      shortDesc: "Scalable cloud infrastructure",
      description:
        "Robust cloud architecture, database optimization, and automated deployment pipelines that ensure reliability and scalability.",
      keyFeatures: [
        "Cloud Architecture Design",
        "Database Optimization",
        "CI/CD Pipeline Setup",
        "Security & Compliance",
        "Monitoring & Logging",
        "Disaster Recovery",
      ],
      benefits: [
        "Scalability",
        "Reliability",
        "Cost Optimization",
        "Faster Deployment",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      id: 5,
      title: "UI/UX Design",
      icon: Globe,
      shortDesc: "Beautiful user experiences",
      description:
        "Modern, intuitive designs that convert visitors into customers with exceptional user experiences and conversion optimization.",
      keyFeatures: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Responsive Design",
        "Conversion Optimization",
        "Accessibility Design",
        "Design Systems",
      ],
      benefits: [
        "Higher Conversion Rates",
        "Better User Engagement",
        "Reduced Bounce Rate",
        "Brand Recognition",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <p className="text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wider font-medium">
              Our Services
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Building Smart <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive business growth and innovation
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
            >
              <div
                className={`h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  service.bgColor
                } ${service.borderColor} hover:shadow-xl ${
                  hoveredService === service.id
                    ? "shadow-xl scale-[1.02] -translate-y-1"
                    : "shadow-lg"
                }`}
              >
                {/* Service Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm lg:text-base">
                    Key Features:
                  </h4>
                  <div className="space-y-3">
                    {service.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {service.keyFeatures.length > 4 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        +{service.keyFeatures.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm lg:text-base">
                    Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
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
