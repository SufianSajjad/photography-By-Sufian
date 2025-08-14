import React from "react";
import { Camera, Heart, Award, Star } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

const Hero: React.FC = () => {
  const features = [
    { icon: Camera, text: "Professional Quality" },
    { icon: Heart, text: "Emotional Storytelling" },
    { icon: Award, text: "Award-Winning Work" },
  ];

  const stats = [
    { number: 150, label: "Weddings Captured", suffix: "+" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
    { number: 200, label: "Happy Couples", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
  ];

  // Animated counter component
  const AnimatedStat: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
    const { count, elementRef } = useCountUp({
      end: stat.number,
      duration: 2000 + index * 200, // Stagger animations
      startOnView: true,
      threshold: 0.1,
    });

    return (
      <div ref={elementRef} className="text-center group">
        <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
      </div>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Hero Background Image - Replace with your best wedding/portrait photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful wedding photography by Sufian Sajjad"
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
          draggable={false}
        />
      </div>

      {/* Artistic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-slate-900/70 to-blue-900/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Capturing
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-white bg-clip-text text-transparent">
              Life's Magic
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Camera className="w-6 h-6 text-purple-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

      

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-4 h-4 text-purple-300" />
              {feature.text}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() =>
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <span className="flex items-center gap-2">
              View Portfolio
              <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 rounded-lg border-2 border-white/30 text-white text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform"
          >
            <span className="flex items-center gap-2">
              Book Session
              <Heart className="w-5 h-5 group-hover:text-red-300 transition-colors duration-300" />
            </span>
          </button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Client Rating */}
        {/* <div className="mt-12 flex items-center justify-center gap-2 text-amber-300">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-white ml-2 font-medium">4.9/5 from 200+ happy clients</span>
        </div> */}

       
      </div>
    </section>
  );
};

export default Hero;