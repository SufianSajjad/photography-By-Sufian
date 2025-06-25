import React from 'react';
import { motion } from 'framer-motion';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Next.js', color: 'bg-black dark:bg-white' },
        { name: 'Angular', color: 'bg-red-500' },
        { name: 'Vue.js', color: 'bg-green-500' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Express.js', color: 'bg-gray-800' },
        { name: 'Java Spring Boot', color: 'bg-green-700' },
        { name: '.NET', color: 'bg-purple-600' },
        { name: 'Python', color: 'bg-yellow-500' },
        { name: 'Go', color: 'bg-blue-500' },
      ]
    },
    {
      title: 'Mobile',
      technologies: [
        { name: 'React Native', color: 'bg-blue-500' },
        { name: 'Flutter', color: 'bg-blue-400' },
        { name: 'Kotlin', color: 'bg-purple-500' },
        { name: 'Swift', color: 'bg-orange-500' },
        { name: 'Ionic', color: 'bg-blue-600' },
        { name: 'Xamarin', color: 'bg-purple-700' },
      ]
    },
    {
      title: 'Database',
      technologies: [
        { name: 'MongoDB', color: 'bg-green-500' },
        { name: 'PostgreSQL', color: 'bg-blue-600' },
        { name: 'MySQL', color: 'bg-blue-500' },
        { name: 'Redis', color: 'bg-red-500' },
        { name: 'Firebase', color: 'bg-yellow-500' },
        { name: 'Supabase', color: 'bg-green-600' },
      ]
    },
    {
      title: 'Blockchain',
      technologies: [
        { name: 'Solidity', color: 'bg-gray-800' },
        { name: 'Web3.js', color: 'bg-orange-500' },
        { name: 'Ethers.js', color: 'bg-blue-500' },
        { name: 'Hardhat', color: 'bg-yellow-500' },
        { name: 'Truffle', color: 'bg-orange-600' },
        { name: 'IPFS', color: 'bg-blue-600' },
      ]
    },
    {
      title: 'AI & ML',
      technologies: [
        { name: 'TensorFlow', color: 'bg-orange-500' },
        { name: 'PyTorch', color: 'bg-red-500' },
        { name: 'OpenAI API', color: 'bg-green-500' },
        { name: 'Hugging Face', color: 'bg-yellow-500' },
        { name: 'Scikit-learn', color: 'bg-orange-600' },
        { name: 'Pandas', color: 'bg-blue-500' },
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build world-class applications
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We stay up-to-date with the latest technologies and frameworks to deliver the best solutions for our clients.
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

export default Technologies; 