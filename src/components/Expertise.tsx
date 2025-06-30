import React, { useState } from "react";
import {
  Code,
  Database,
  Globe,
  Cloud,
  Brain,
  Shield,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Expertise: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = [
    {
      id: "programming",
      title: "Blockchain Technologies",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      technologies: [
        { name: "Python", icon: "🐍", color: "bg-yellow-500", proficiency: 95 },
        {
          name: "JavaScript",
          icon: "JS",
          color: "bg-yellow-400",
          proficiency: 92,
        },
        {
          name: "TypeScript",
          icon: "TS",
          color: "bg-blue-500",
          proficiency: 88,
        },
        { name: "Java", icon: "☕", color: "bg-red-600", proficiency: 85 },
        { name: "C++", icon: "C++", color: "bg-blue-600", proficiency: 82 },
        { name: "Go", icon: "Go", color: "bg-cyan-500", proficiency: 78 },
      ],
    },
    {
      id: "frontend",
      title: "AI Technologies",
      icon: Globe,
      color: "from-green-500 to-teal-600",
      technologies: [
        { name: "React.js", icon: "⚛️", color: "bg-cyan-500", proficiency: 94 },
        { name: "Next.js", icon: "▲", color: "bg-black", proficiency: 90 },
        { name: "Vue.js", icon: "V", color: "bg-green-500", proficiency: 85 },
        { name: "Angular", icon: "A", color: "bg-red-500", proficiency: 80 },
        { name: "HTML5", icon: "🌐", color: "bg-orange-500", proficiency: 96 },
        { name: "CSS3", icon: "🎨", color: "bg-blue-500", proficiency: 93 },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      technologies: [
        { name: "Node.js", icon: "🟢", color: "bg-green-600", proficiency: 91 },
        { name: "Flask", icon: "🌶️", color: "bg-gray-700", proficiency: 89 },
        { name: "Django", icon: "🎸", color: "bg-green-700", proficiency: 87 },
        {
          name: "Express.js",
          icon: "E",
          color: "bg-gray-600",
          proficiency: 88,
        },
        { name: "FastAPI", icon: "⚡", color: "bg-teal-500", proficiency: 85 },
        {
          name: "Spring Boot",
          icon: "🍃",
          color: "bg-green-600",
          proficiency: 80,
        },
      ],
    },
    {
      id: "database",
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-600",
      technologies: [
        { name: "MongoDB", icon: "🍃", color: "bg-green-500", proficiency: 90 },
        {
          name: "PostgreSQL",
          icon: "🐘",
          color: "bg-blue-600",
          proficiency: 88,
        },
        { name: "MySQL", icon: "🐬", color: "bg-orange-500", proficiency: 85 },
        { name: "Redis", icon: "🔴", color: "bg-red-500", proficiency: 82 },
        {
          name: "Firebase",
          icon: "🔥",
          color: "bg-yellow-500",
          proficiency: 87,
        },
        { name: "SQLite", icon: "💾", color: "bg-gray-500", proficiency: 90 },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      technologies: [
        {
          name: "TensorFlow",
          icon: "🧠",
          color: "bg-orange-500",
          proficiency: 88,
        },
        { name: "PyTorch", icon: "🔥", color: "bg-red-500", proficiency: 85 },
        { name: "OpenCV", icon: "👁️", color: "bg-blue-500", proficiency: 83 },
        {
          name: "HuggingFace",
          icon: "🤗",
          color: "bg-yellow-500",
          proficiency: 80,
        },
        {
          name: "Scikit-learn",
          icon: "📊",
          color: "bg-orange-400",
          proficiency: 87,
        },
        { name: "Pandas", icon: "🐼", color: "bg-blue-600", proficiency: 92 },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-indigo-500 to-purple-600",
      technologies: [
        { name: "Docker", icon: "🐳", color: "bg-blue-500", proficiency: 89 },
        {
          name: "Kubernetes",
          icon: "☸️",
          color: "bg-blue-600",
          proficiency: 82,
        },
        { name: "AWS", icon: "🌩️", color: "bg-orange-400", proficiency: 85 },
        {
          name: "Google Cloud",
          icon: "☁️",
          color: "bg-blue-500",
          proficiency: 80,
        },
        { name: "Azure", icon: "🌐", color: "bg-blue-600", proficiency: 78 },
        { name: "Jenkins", icon: "🔧", color: "bg-gray-600", proficiency: 75 },
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology stack spanning modern development, AI/ML,
            and cloud infrastructure
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center gap-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Technologies */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      // onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md`}
                        >
                          {tech.icon}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Programming Languages
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              25+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Cloud Platforms
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
