import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Award, Eye, MapPin, Sparkles, Film, Users } from 'lucide-react';

const About: React.FC = () => {
  const photographyJourney = [
    {
      year: '2017',
      title: 'The Spark of Passion',
      description: 'Discovered the magic of capturing moments, starting with family celebrations and local events across Islamabad and Kashmir.',
      icon: Camera
    },
    {
      year: '2019',
      title: 'Professional Foundation',
      description: 'Established professional wedding photography business in Islamabad, quickly becoming known for authentic storytelling and emotional depth.',
      icon: Heart
    },
    {
      year: '2022',
      title: 'Cinematic Evolution',
      description: 'Expanded to cinematic videography and drone coverage, bringing Hollywood-style production to weddings across Pakistan.',
      icon: Film
    },
    {
      year: '2025',
      title: 'Trusted Excellence',
      description: 'Now Islamabad\'s sought-after wedding photographer, having captured 250+ weddings across Kashmir, Pakistan, and international destinations.',
      icon: Award
    }
  ];

  const stats = [
    { icon: Heart, number: '250+', label: 'Weddings Captured' },
    { icon: Users, number: '500+', label: 'Happy Couples' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: MapPin, number: '20+', label: 'Cities Covered' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Emotion First',
      description: 'Every tear, every smile, every glance—I capture the genuine feelings that make your wedding day uniquely yours.'
    },
    {
      icon: Eye,
      title: 'Artistic Vision',
      description: 'Blending documentary authenticity with fine art composition to create images that are both real and remarkable.'
    },
    {
      icon: Sparkles,
      title: 'Timeless Quality',
      description: 'Using professional equipment and expert editing techniques to ensure your memories look stunning decades from now.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
            <Camera className="w-6 h-6 text-rose-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-400 to-transparent" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Sufian Sajjad
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Professional Wedding Photographer based in Islamabad, serving Rawalakot, Kashmir, and destinations across Pakistan and worldwide
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Image Placeholder */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                    alt="Sufian Sajjad - Wedding Photographer in Islamabad, Rawalakot, and Kashmir"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Right: Story */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Islamabad's Premier Wedding Photographer
                  <span className="block text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text mt-2">
                    Serving Kashmir & Beyond
                  </span>
                </h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Based in Islamabad, I'm a professional wedding photographer specializing in cinematic storytelling 
                    that captures the authentic emotion and beauty of your celebration. Whether you're planning a wedding 
                    in Islamabad's elegant venues, the stunning mountain landscapes of Rawalakot and Kashmir, or anywhere 
                    across Pakistan and the world, I bring the same passion and artistry to every love story.
                  </p>
                  
                  <p>
                    For me, photography isn't just about pressing a button—it's about understanding your unique story, 
                    being present in your most precious moments, and creating timeless art that you'll treasure forever. 
                    As a wedding photographer in Islamabad, I've had the privilege of documenting celebrations from the 
                    capital's luxury hotels to intimate ceremonies in Kashmir's breathtaking valleys.
                  </p>
                  
                  <p>
                    With over 250 weddings captured across Islamabad, Rawalakot, Muzaffarabad, and throughout Kashmir and 
                    Pakistan, I understand the cultural richness and diverse traditions that make each celebration special. 
                    From the vibrant mehndi nights to emotional nikah ceremonies, from grand barat processions to intimate 
                    rukhsati moments—I'm there to capture it all.
                  </p>
                  
                  <p>
                    My approach blends photojournalistic authenticity with cinematic artistry. I don't just document what 
                    happens—I capture how it feels. The anticipation, the joy, the tears, the laughter—these genuine emotions 
                    are what make your wedding uniquely yours, and preserving them is what I do best.
                  </p>
                  
                  <p className="text-rose-300 font-medium">
                    Available for weddings in Islamabad, Rawalakot, Kashmir, major cities across Pakistan, and destination 
                    weddings worldwide. Let's create something beautiful together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            My Photography{" "}
            <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographyJourney.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text">
                        {milestone.year}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">
                      {milestone.title}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Coverage Areas - SEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl p-10 border border-white/10 text-center">
            <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Wedding Photography Across Pakistan & Worldwide
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Based in Islamabad and serving couples throughout Pakistan and international destinations. 
              Specializing in weddings in Islamabad, Rawalakot, Kashmir, and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Islamabad', 
                'Rawalakot', 
                'Kashmir', 
                'Muzaffarabad',
                'Rawalpindi', 
                'Lahore', 
                'Karachi', 
                'Peshawar',
                'Faisalabad',
                'Multan',
                'Destination Weddings'
              ].map((location, idx) => (
                <span 
                  key={idx}
                  className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-200 hover:bg-white/20 transition-all duration-300"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl p-10 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-light">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Guides My{" "}
            <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-rose-500/50 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Planning Your Wedding in Islamabad, Kashmir, or Beyond?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're celebrating in Islamabad, the mountains of Rawalakot, or anywhere in the world, 
              I'd love to capture your love story with the artistry and emotion it deserves.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Heart className="w-5 h-5" />
                Book Your Wedding Photography
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;