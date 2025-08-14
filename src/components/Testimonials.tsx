import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Camera } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Ayesha & Hamza',
      event: 'Wedding Photography',
      location: 'Lahore, Punjab',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=150&fit=crop&crop=face',
      text: 'Ahmed captured our wedding so beautifully! Every single moment from our Mehndi to Walima was perfectly documented. The way he blended traditional and modern photography styles was exactly what we wanted. Our families are still talking about how professional and friendly the entire team was.',
      highlight: 'Perfect blend of traditional and modern styles'
    },
    {
      id: 2,
      name: 'Sarah Ahmed',
      event: 'Portrait Session',
      location: 'Karachi, Sindh',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face',
      text: 'I needed professional headshots for my business and Ahmed delivered beyond my expectations. The studio session was comfortable, and he guided me through different poses and expressions. The final photos were stunning and have really elevated my professional image.',
      highlight: 'Professional headshots that elevated my business image'
    },
    {
      id: 3,
      name: 'Zara & Bilal',
      event: 'Engagement Shoot',
      location: 'Islamabad, Punjab',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=150&h=150&fit=crop&crop=face',
      text: 'Our engagement shoot was absolutely magical! Ahmed found the most beautiful locations around Islamabad and made us feel so comfortable in front of the camera. The golden hour shots by the lake are our favorites. We can\'t wait to work with him again for our wedding!',
      highlight: 'Made us feel comfortable and captured magical moments'
    },
    {
      id: 4,
      name: 'Fatima Khan',
      event: 'Family Photography',
      location: 'Lahore, Punjab',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'Getting all three generations of our family together for photos seemed impossible, but Ahmed made it happen! He was so patient with our grandparents and amazing with the little ones. The final album is now our family treasure that we\'ll cherish forever.',
      highlight: 'Patient with all ages and created lasting family memories'
    },
    {
      id: 5,
      name: 'Tech Solutions Pak',
      event: 'Corporate Event',
      location: 'Lahore, Punjab',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'Ahmed documented our annual conference flawlessly. He captured not just the formal presentations but also the networking moments and candid interactions. The photos have been perfect for our marketing materials and social media. Highly professional service!',
      highlight: 'Flawless corporate event documentation'
    },
    {
      id: 6,
      name: 'Mariam & Ali',
      event: 'Wedding Photography',
      location: 'Faisalabad, Punjab',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop&crop=face',
      text: 'We chose Ahmed for our destination wedding and it was the best decision! Despite the logistical challenges, his team was incredibly organized and professional. The drone footage of our outdoor ceremony was breathtaking, and the same-day highlights reel had everyone in tears of joy.',
      highlight: 'Breathtaking drone footage and same-day highlights'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
          What Clients Say
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our amazing clients have to say about 
          their photography experience with us.
        </p>
      </div>

      {/* Main Testimonial Display */}
      <div className="relative mb-16">
        <div 
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 transition-all duration-500"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-purple-400/30">
            <Quote className="w-16 h-16" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Client Photo & Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 border-4 border-purple-500/30"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-2">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{currentTestimonial.name}</h3>
              <p className="text-purple-400 font-medium mb-1">{currentTestimonial.event}</p>
              <p className="text-gray-400 text-sm mb-4">{currentTestimonial.location}</p>
              
              {/* Star Rating */}
              <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2 relative">
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 relative z-10">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-4 border border-purple-500/30">
                <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                  <Camera className="w-5 h-5" />
                  <span className="font-semibold text-sm">Highlight:</span>
                </div>
                <p className="text-white font-medium">{currentTestimonial.highlight}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-500/80 transition-all duration-300 transform hover:scale-110 border border-gray-600/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12">
            <button
              onClick={nextTestimonial}
              className="bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-500/80 transition-all duration-300 transform hover:scale-110 border border-gray-600/50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
          <div className="text-gray-300">Happy Couples</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">5.0</div>
          <div className="text-gray-300">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
          <div className="text-gray-300">Events Covered</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
          <div className="text-gray-300">Satisfaction Rate</div>
        </div>
      </div>

      {/* Review Platform Logos */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">Find us on</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-gray-400 font-semibold">Google Reviews</div>
          <div className="text-gray-400 font-semibold">Facebook</div>
          <div className="text-gray-400 font-semibold">Instagram</div>
          <div className="text-gray-400 font-semibold">Wedding.pk</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Your Story?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who trusted us with their precious moments. 
          Let's discuss how we can make your photography dreams come true.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Book Your Session
          </button>
          <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;