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
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  // const [hoveredService, setHoveredService] = useState(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "Blockchain Development",
      icon: Zap,
      shortDesc: "Secure, decentralized systems",
      description:
        "Build cutting-edge blockchain solutions with smart contracts, DeFi platforms, and Web3 integrations.",
      keyFeatures: [
        "Smart Contracts",
        "DeFi Platforms",
        "NFT Solutions",
        "Web3 Integration",
      ],
      technologies: ["Solidity", "Vyper", "Web3.js", "Ethers.js"],
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
        "Empower your business with custom AI models, NLP solutions, and intelligent automation systems.",
      keyFeatures: [
        "Custom AI Models",
        "NLP Solutions",
        "Computer Vision",
        "AI Automation",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
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
        "End-to-end web application development using modern frameworks and scalable architectures.",
      keyFeatures: [
        "Modern Frameworks",
        "API Development",
        "Database Design",
        "DevOps Integration",
      ],
      technologies: ["React", "Node.js", "Next.js", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: Smartphone,
      shortDesc: "Cross-platform mobile apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android with superior performance.",
      keyFeatures: [
        "Cross-Platform",
        "Native Performance",
        "UI/UX Design",
        "App Store Ready",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
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
        "Robust cloud architecture, database optimization, and automated deployment pipelines.",
      keyFeatures: [
        "Cloud Architecture",
        "Database Optimization",
        "CI/CD Pipelines",
        "Security",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
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
        "Modern, intuitive designs that convert visitors into customers with exceptional user experiences.",
      keyFeatures: [
        "User Research",
        "Prototyping",
        "Responsive Design",
        "Conversion Optimization",
      ],
      technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Our Services
          </div>

          <p className="text-3xl font-bold text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-center leading-relaxed">
            Building Smart AI & Blockchain Solutions <br />
            for Businesses, Customers & Partners
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
            >
              <div
                className={`h-full p-6 lg:p-8 rounded-xl border transition-all duration-300 ${
                  service.bgColor
                } ${service.borderColor} hover:shadow-xl ${
                  hoveredService === service.id
                    ? "shadow-xl scale-[1.02] -translate-y-1"
                    : "shadow-md"
                }`}
              >
                {/* Service Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm lg:text-base leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm lg:text-base">
                    Key Features:
                  </h4>
                  <div className="space-y-2">
                    {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {service.keyFeatures.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        +{service.keyFeatures.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
