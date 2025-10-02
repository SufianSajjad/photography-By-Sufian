import React, { useState, useEffect, useRef } from "react";
import { Camera, Film, MapPin, Heart, Award, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  const features = [
    { icon: Heart, text: "Emotion-Driven Storytelling" },
    { icon: Film, text: "Cinematic Wedding Films" },
    { icon: MapPin, text: "Destination Weddings" },
  ];

  const stats = [
    { number: 250, label: "Weddings Captured", suffix: "+" },
    { number: 500, label: "Magical Moments", suffix: "+" },
    { number: 8, label: "Years of Excellence", suffix: "+" },
    { number: 100, label: "Five-Star Reviews", suffix: "%" },
  ];

  const AnimatedStat: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000 + index * 200;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCount(stat.number);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [stat.number, index, hasAnimated]);

    return (
      <div ref={elementRef} className="text-center group">
        <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent">
          {count}
          {stat.suffix}
        </div>
        <div className="text-sm md:text-base text-gray-300 font-light tracking-wide">
          {stat.label}
        </div>
      </div>
    );
  };

  const openContactForm = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      aria-label="Hero — Photography by Sufian"
    >
      {/* HERO IMAGE with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Elegant Wedding Photography by Sufian - Capturing your most precious moments"
            loading="eager"
            className="w-full h-full object-cover scale-110"
            draggable={false}
          />
        </div>
      </div>

      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-black/70 to-purple-900/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
      
      {/* Subtle animated particles for elegance */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-200 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-rose-200 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">


        {/* Main Heading - More Emotional */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          <span className="block text-white mb-2">Where Love Stories</span>
          <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-purple-200 bg-clip-text text-transparent">
            Become Timeless Art
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Capturing the emotions, the tears, the laughter, and every magical moment 
          of your special day with <span className="text-rose-300 font-medium">cinematic elegance</span>
        </p>

        {/* Feature Pills - More Refined */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-6 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/20"
              >
                <Icon className="w-5 h-5 text-rose-300 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-sm font-light tracking-wide">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons - More Premium */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-white text-base font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explore Our Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <button
            onClick={openContactForm}
            className="group px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-medium hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 hover:border-white backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Book Your Date
            </span>
          </button>
        </div>

        {/* Stats Grid - More Elegant */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mb-6 py-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Trust Line */}
        <p className="text-base md:text-lg text-gray-300 font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Trusted by couples across <span className="text-rose-300 font-medium">Pakistan</span> and around the world
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slow-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(8px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;