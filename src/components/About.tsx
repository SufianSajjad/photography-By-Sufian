import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Waleed',
      role: 'Full Stack Developer & Blockchain Specialist',
      description: 'Expert in modern web technologies, mobile development, and blockchain solutions. Passionate about creating innovative digital experiences.',
      skills: ['React', 'Node.js', 'Solidity', 'React Native', 'Next.js', 'Web3.js'],
      experience: '5+ years'
    },
    {
      name: 'Abdullah',
      role: 'Mobile Developer & AI Specialist',
      description: 'Specialized in cross-platform mobile development and AI integration. Focused on delivering high-performance applications with cutting-edge features.',
      skills: ['Flutter', 'Kotlin', 'Python', 'TensorFlow', 'Swift', 'AI/ML'],
      experience: '5+ years'
    }
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '30+', label: 'Happy Clients' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,_rgba(59,130,246,0.07),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.07),_transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-widest mb-2 text-sm">Why Choose Us?</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the Future of Digital Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists dedicated to creating exceptional digital solutions for ambitious businesses. Our expertise spans web, mobile, blockchain, and AI—empowering you to thrive in a fast-evolving world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.experience} of experience
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                {member.description}
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are committed to delivering innovative, scalable, and high-performance solutions that help businesses thrive in the digital age. 
              Our expertise spans from traditional web development to cutting-edge blockchain and AI technologies, ensuring we can tackle any challenge 
              and bring your vision to life with excellence and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 