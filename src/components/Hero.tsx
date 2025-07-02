import React from "react";
import { Zap, Shield, Users } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

const Hero: React.FC = () => {
  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Secure & Reliable" },
    { icon: Users, text: "User-Centric" },
  ];

  const stats = [
    { number: 15, label: "Projects Completed", suffix: "+" },
    { number: 95, label: "Client Satisfaction", suffix: "%" },
    { number: 10, label: "Happy Clients", suffix: "+" },
    { number: 3, label: "Years Experience", suffix: "+" },
  ];

  // Animated counter component
  const AnimatedStat: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
    const { count, elementRef } = useCountUp({
      end: stat.number,
      duration: 2000 + index * 200, // Stagger animations
      startOnView: true,
      threshold: 0.1, // Lower threshold for earlier triggering
    });

    return (
      <div ref={elementRef} className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-gray-400">{stat.label}</div>
      </div>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gray-950"
    >
      {/* Lazy-loaded background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background/laptoponsofa.jpg"
          alt="Background"
          loading="lazy"
          className="w-full h-full object-cover pt-20 opacity-30 mix-blend-lighten"
          draggable={false}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white pt-16 tracking-tight">
          <span>Let's Seal</span>
          <br />
          <span className="text-gray-300">The Tech Deal!</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Smart AI & Blockchain solutions built to grow your business.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center mb-12">
          <button
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-md bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition duration-200 shadow"
          >
            Explore Services
          </button>

          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-md border border-gray-500 text-gray-200 text-base font-medium hover:bg-gray-800 transition duration-200"
          >
            Get Started
          </button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-slow">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
