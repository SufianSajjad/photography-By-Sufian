import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Brain,
  Zap,
  Globe,
  Cpu,
  Server
} from 'lucide-react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'Modern frameworks and libraries for building responsive user interfaces',
      technologies: [
        { name: 'React', color: 'bg-blue-500', level: 'Expert' },
        { name: 'Next.js', color: 'bg-black dark:bg-white', level: 'Expert' },
        { name: 'Angular', color: 'bg-red-500', level: 'Advanced' },
        { name: 'Vue.js', color: 'bg-green-500', level: 'Advanced' },
        { name: 'TypeScript', color: 'bg-blue-600', level: 'Expert' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500', level: 'Expert' },
        { name: 'Svelte', color: 'bg-orange-500', level: 'Intermediate' },
        { name: 'Nuxt.js', color: 'bg-green-600', level: 'Advanced' },
        //
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      description: 'Robust server-side technologies for scalable applications',
      technologies: [
        { name: 'Node.js', color: 'bg-green-600', level: 'Expert' },
        { name: 'Express.js', color: 'bg-gray-800', level: 'Expert' },
        { name: 'Java Spring Boot', color: 'bg-green-700', level: 'Advanced' },
        { name: '.NET Core', color: 'bg-purple-600', level: 'Advanced' },
        { name: 'Python Django', color: 'bg-yellow-500', level: 'Expert' },
        { name: 'Go', color: 'bg-blue-500', level: 'Intermediate' },
        { name: 'PHP Laravel', color: 'bg-red-600', level: 'Advanced' },
        { name: 'Ruby on Rails', color: 'bg-red-500', level: 'Intermediate' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform and native mobile app development',
      technologies: [
        { name: 'React Native', color: 'bg-blue-500', level: 'Expert' },
        { name: 'Flutter', color: 'bg-blue-400', level: 'Advanced' },
        { name: 'Kotlin', color: 'bg-purple-500', level: 'Advanced' },
        { name: 'Swift', color: 'bg-orange-500', level: 'Advanced' },
        { name: 'Ionic', color: 'bg-blue-600', level: 'Intermediate' },
        { name: 'Xamarin', color: 'bg-purple-700', level: 'Intermediate' },
        { name: 'Unity', color: 'bg-gray-700', level: 'Intermediate' },
        { name: 'Cordova', color: 'bg-gray-600', level: 'Intermediate' },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      description: 'Relational and NoSQL databases for data management',
      technologies: [
        { name: 'MongoDB', color: 'bg-green-500', level: 'Expert' },
        { name: 'PostgreSQL', color: 'bg-blue-600', level: 'Expert' },
        { name: 'MySQL', color: 'bg-blue-500', level: 'Advanced' },
        { name: 'Redis', color: 'bg-red-500', level: 'Advanced' },
        { name: 'Firebase', color: 'bg-yellow-500', level: 'Expert' },
        { name: 'Supabase', color: 'bg-green-600', level: 'Advanced' },
        { name: 'DynamoDB', color: 'bg-blue-700', level: 'Intermediate' },
        { name: 'Elasticsearch', color: 'bg-yellow-600', level: 'Intermediate' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud platforms and infrastructure management',
      technologies: [
        { name: 'AWS', color: 'bg-orange-500', level: 'Expert' },
        { name: 'Docker', color: 'bg-blue-500', level: 'Expert' },
        { name: 'Kubernetes', color: 'bg-blue-600', level: 'Advanced' },
        { name: 'Terraform', color: 'bg-purple-500', level: 'Advanced' },
        { name: 'Azure', color: 'bg-blue-700', level: 'Advanced' },
        { name: 'Google Cloud', color: 'bg-blue-500', level: 'Intermediate' },
        { name: 'Jenkins', color: 'bg-red-600', level: 'Intermediate' },
        { name: 'GitLab CI', color: 'bg-orange-600', level: 'Intermediate' },
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: Shield,
      description: 'Decentralized technologies and smart contracts',
      technologies: [
        { name: 'Solidity', color: 'bg-gray-800', level: 'Expert' },
        { name: 'Web3.js', color: 'bg-orange-500', level: 'Expert' },
        { name: 'Ethers.js', color: 'bg-blue-500', level: 'Advanced' },
        { name: 'Hardhat', color: 'bg-yellow-500', level: 'Advanced' },
        { name: 'Truffle', color: 'bg-orange-600', level: 'Intermediate' },
        { name: 'IPFS', color: 'bg-blue-600', level: 'Intermediate' },
        { name: 'Polygon', color: 'bg-purple-600', level: 'Advanced' },
        { name: 'Ethereum', color: 'bg-gray-700', level: 'Expert' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Artificial intelligence and data science tools',
      technologies: [
        { name: 'TensorFlow', color: 'bg-orange-500', level: 'Advanced' },
        { name: 'PyTorch', color: 'bg-red-500', level: 'Advanced' },
        { name: 'OpenAI API', color: 'bg-green-500', level: 'Expert' },
        { name: 'Hugging Face', color: 'bg-yellow-500', level: 'Intermediate' },
        { name: 'Scikit-learn', color: 'bg-orange-600', level: 'Advanced' },
        { name: 'Pandas', color: 'bg-blue-500', level: 'Expert' },
        { name: 'NumPy', color: 'bg-blue-600', level: 'Expert' },
        { name: 'Jupyter', color: 'bg-orange-700', level: 'Advanced' },
      ]
    },
    {
      title: 'Testing & Quality',
      icon: Zap,
      description: 'Testing frameworks and quality assurance tools',
      technologies: [
        { name: 'Jest', color: 'bg-red-600', level: 'Expert' },
        { name: 'Cypress', color: 'bg-green-600', level: 'Advanced' },
        { name: 'Selenium', color: 'bg-green-500', level: 'Advanced' },
        { name: 'Playwright', color: 'bg-blue-600', level: 'Intermediate' },
        { name: 'Mocha', color: 'bg-orange-500', level: 'Intermediate' },
        { name: 'Chai', color: 'bg-red-500', level: 'Intermediate' },
        { name: 'Postman', color: 'bg-orange-600', level: 'Expert' },
        { name: 'Swagger', color: 'bg-green-700', level: 'Advanced' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

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
    <section id="technologies" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
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
            <Cpu className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <p className="text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wider font-medium">
              Technology Stack
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build world-class applications
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-accent-400 mb-4 shadow-lg">
                <cat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">{cat.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">{cat.description}</p>
              {/* Tech Logos Grid */}
              <div className="grid grid-cols-4 gap-4 mt-2">
                {cat.technologies.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.15, zIndex: 2 }}
                    className="relative flex flex-col items-center group cursor-pointer"
                  >
                    {/* Logo image source: https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/{techname}.svg */}
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:ring-2 group-hover:ring-primary-400 transition-all duration-200`}>
                      <img
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.name.replace(/\s|\./g, '').toLowerCase()}.svg`}
                        alt={tech.name + " logo"}
                        className="w-7 h-7 object-contain"
                        draggable="false"
                        style={{ filter: 'invert(0.2) sepia(1) saturate(5) hue-rotate(180deg)' }}
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-30 shadow-lg">
                      {tech.name} <span className="ml-1 text-primary-400">({tech.level})</span>
                    </div>
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
              We stay up-to-date with the latest technologies and frameworks to deliver the best solutions for our clients. Our expertise spans across multiple domains, ensuring we can tackle any technical challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 