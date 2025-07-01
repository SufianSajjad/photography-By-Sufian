import React, { useState } from "react";
import { Code, Database, Globe, Cloud, Brain, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Expertise: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = [
    {
      id: "blockchain",
      title: "Blockchain Technologies",
      icon: Code,
      color: "from-black/20 to-black/30",
      //   backgroundImage: "/images/background/blockchain.jpg",
      technologies: [
        { name: "Solidity", icon: "⟐", color: "bg-gray-700", proficiency: 95 },
        { name: "Ethereum", icon: "Ξ", color: "bg-blue-600", proficiency: 92 },
        {
          name: "Web3.js",
          icon: "W3",
          color: "bg-orange-500",
          proficiency: 88,
        },
        {
          name: "Hardhat",
          icon: "⚒️",
          color: "bg-yellow-600",
          proficiency: 85,
        },
        { name: "IPFS", icon: "📁", color: "bg-teal-600", proficiency: 82 },
        {
          name: "BNB Chain",
          icon: "🟡",
          color: "bg-yellow-500",
          proficiency: 83,
        },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-black/20 to-black/30",
      //  backgroundImage: "/images/background/ai-tech.jpg",
      technologies: [
        {
          name: "TensorFlow",
          icon: "🧠",
          color: "bg-orange-500",
          proficiency: 88,
        },
        { name: "PyTorch", icon: "🔥", color: "bg-red-500", proficiency: 85 },
        { name: "OpenAI", icon: "🤖", color: "bg-green-600", proficiency: 90 },
        {
          name: "Scikit-learn",
          icon: "📊",
          color: "bg-orange-400",
          proficiency: 87,
        },
        { name: "Pandas", icon: "🐼", color: "bg-blue-600", proficiency: 92 },
        { name: "NumPy", icon: "🔢", color: "bg-blue-500", proficiency: 89 },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      color: "from-black/20 to-black/30",
      //   backgroundImage: "/images/background/frontend.jpg",
      technologies: [
        { name: "React.js", icon: "⚛️", color: "bg-cyan-500", proficiency: 94 },
        { name: "Next.js", icon: "▲", color: "bg-black", proficiency: 90 },
        {
          name: "TypeScript",
          icon: "TS",
          color: "bg-blue-500",
          proficiency: 88,
        },
        { name: "Tailwind", icon: "🎨", color: "bg-cyan-400", proficiency: 91 },
        { name: "Vue.js", icon: "V", color: "bg-green-500", proficiency: 85 },
        { name: "Angular", icon: "A", color: "bg-red-500", proficiency: 80 },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Database,
      color: "from-black/20 to-black/30",
      //  backgroundImage: "/images/background/backend.jpg",
      technologies: [
        { name: "Node.js", icon: "🟢", color: "bg-green-600", proficiency: 91 },
        { name: "Python", icon: "🐍", color: "bg-yellow-500", proficiency: 95 },
        {
          name: "Express.js",
          icon: "E",
          color: "bg-gray-600",
          proficiency: 88,
        },
        { name: "FastAPI", icon: "⚡", color: "bg-teal-500", proficiency: 85 },
        { name: "Django", icon: "🎸", color: "bg-green-700", proficiency: 87 },
        { name: "GraphQL", icon: "◉", color: "bg-pink-500", proficiency: 83 },
      ],
    },
    {
      id: "database",
      title: "Database Systems",
      icon: Database,
      color: "from-black/20 to-black/30",
      //  backgroundImage: "/images/background/database.jpg",
      technologies: [
        {
          name: "DynamoDB",
          icon: "🧬",
          color: "bg-indigo-700",
          proficiency: 83,
        },

        // 📡 Distributed Systems

        { name: "MongoDB", icon: "🍃", color: "bg-green-500", proficiency: 90 },
        {
          name: "PostgreSQL",
          icon: "🐘",
          color: "bg-blue-600",
          proficiency: 88,
        },
        { name: "Redis", icon: "🔴", color: "bg-red-500", proficiency: 82 },
        { name: "SQL", icon: "🐬", color: "bg-orange-500", proficiency: 85 },
        {
          name: "Firebase",
          icon: "🔥",
          color: "bg-yellow-500",
          proficiency: 87,
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-black/20 to-black/30",
      // backgroundImage: "/images/background/cloud.jpg",
      technologies: [
        { name: "Docker", icon: "🐳", color: "bg-blue-500", proficiency: 89 },
        { name: "AWS", icon: "🌩️", color: "bg-orange-400", proficiency: 85 },
        {
          name: "Kubernetes",
          icon: "☸️",
          color: "bg-blue-600",
          proficiency: 82,
        },
        { name: "Vercel", icon: "▲", color: "bg-black", proficiency: 88 },
        {
          name: "GitHub Actions",
          icon: "⚙️",
          color: "bg-gray-800",
          proficiency: 86,
        },
        {
          name: "Terraform",
          icon: "🏗️",
          color: "bg-purple-600",
          proficiency: 78,
        },
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology stack spanning blockchain development,
            AI/ML solutions, and modern cloud infrastructure
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  //backgroundImage: `url('${category.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "blur(1px)",
                  transform: "scale(1.05)",
                }}
              />

              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 z-10" />
              <div className="absolute inset-0 bg-white/5 z-20" />

              {/* Category Header */}
              <div
                className={`relative z-30 bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>

              {/* Technologies */}
              <div className="relative z-30 p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      // onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group/tech cursor-pointer"
                    >
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                        <div
                          className={`w-8 h-8 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm`}
                        >
                          {tech.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {tech.name}
                          </span>
                          {/* Proficiency Bar */}
                          {/* <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1">
                            <motion.div
                              className={`${tech.color} h-1.5 rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.proficiency}%` }}
                              transition={{
                                duration: 1,
                                delay: techIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                            />
                          </div> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500 z-40" />
            </motion.div>
          ))}
        </div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              value: "20+",
              label: "Technologies Mastered",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              value: "30+",
              label: "Frameworks & Libraries",
              color: "text-green-600 dark:text-green-400",
            },
            {
              value: "15+",
              label: "Cloud Services",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              value: "5+",
              label: "Years Experience",
              color: "text-orange-600 dark:text-orange-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
