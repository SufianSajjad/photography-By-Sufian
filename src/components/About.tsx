import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Award, Eye, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const photographyJourney = [
    {
      year: '2019',
      title: 'Photography Passion Ignited',
      description: 'Started photography as a hobby, capturing family moments and local events in Lahore.',
      icon: Camera
    },
    {
      year: '2021',
      title: 'Professional Transition',
      description: 'Turned passion into profession, booking first wedding and establishing signature style.',
      icon: Heart
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received local photography awards and expanded to destination weddings across Pakistan.',
      icon: Award
    },
    {
      year: '2025',
      title: 'Artistic Evolution',
      description: 'Now specializing in cinematic storytelling with 200+ successful weddings captured.',
      icon: Eye
    }
  ];

  const stats = [
    { icon: Camera, number: '200+', label: 'Weddings Captured' },
    { icon: Heart, number: '98%', label: 'Client Satisfaction' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: MapPin, number: '15+', label: 'Cities Covered' }
  ];

  const expertise = [
    'Wedding Photography',
    'Portrait Sessions',
    'Event Coverage',
    'Cinematic Videography',
    'Drone Photography',
    'Photo Editing'
  ];

  return (
      <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

      {/* Artistic Background Elements */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest mb-2 text-sm">About Sufian</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Capturing Stories, Creating Memories
          </h2>
         
        </motion.div>
 
        {/* Philosophy & Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Photography Philosophy</h3>
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Photography is more than just capturing images—it's about preserving emotions, telling stories, and creating art that stands the test of time. 
              I believe in a blend of candid moments and artistic composition, ensuring that every photograph reflects the genuine joy, love, and celebration of your special day.
            </p>
            <div className="flex items-center justify-center gap-4 text-purple-600 dark:text-purple-400">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="font-medium">Artistic Vision</span>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Emotional Depth</span>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Timeless Quality</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;