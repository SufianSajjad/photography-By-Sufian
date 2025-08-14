import React, { useState } from 'react';
import { Heart, Eye, Camera, Users, Building, Baby } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', icon: Camera },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'portraits', label: 'Portraits', icon: Users },
    { id: 'corporate', label: 'Corporate', icon: Building },
    { id: 'family', label: 'Family', icon: Baby }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Nikkah Ceremony',
      subtitle: 'Traditional Wedding',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop',
      views: '2.1k'
    },
    {
      id: 2,
      category: 'portraits',
      title: 'Bridal Portrait',
      subtitle: 'Studio Session',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=800&fit=crop',
      views: '1.8k'
    },
    {
      id: 3,
      category: 'weddings',
      title: 'Mehndi Night',
      subtitle: 'Celebration Photography',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop',
      views: '3.2k'
    },
    {
      id: 4,
      category: 'corporate',
      title: 'Business Portrait',
      subtitle: 'Professional Headshot',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&fit=crop',
      views: '950'
    },
    {
      id: 5,
      category: 'family',
      title: 'Family Session',
      subtitle: 'Outdoor Photography',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=800&fit=crop',
      views: '1.4k'
    },
    {
      id: 6,
      category: 'weddings',
      title: 'Walima Reception',
      subtitle: 'Grand Celebration',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
      views: '2.7k'
    },
    {
      id: 7,
      category: 'portraits',
      title: 'Couple Session',
      subtitle: 'Engagement Photos',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop',
      views: '2.0k'
    },
    {
      id: 8,
      category: 'corporate',
      title: 'Event Coverage',
      subtitle: 'Conference Photography',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=800&fit=crop',
      views: '1.1k'
    },
    {
      id: 9,
      category: 'family',
      title: 'Maternity Shoot',
      subtitle: 'Expecting Parents',
      image: 'https://images.unsplash.com/photo-1555112273-226dc011d6ef?w=600&h=800&fit=crop',
      views: '1.6k'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
          Our Portfolio
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Each photograph is a window into a precious moment. Browse through our collection 
          of weddings, portraits, and special events captured across Punjab.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 mb-3">{item.subtitle}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-300 mb-8 text-lg">
          Ready to create beautiful memories together?
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Your Session
        </button>
      </div>

<style>
  {`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
</style>

    </section>
  );
};

export default Portfolio;