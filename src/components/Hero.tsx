import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/circui t-bg.jpg')" }}
    >
      {/* Optional dark/light overlay for contrast */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-sm" />

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-spin-reverse" />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
          Let's Seal
        </h1>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
          The Tech Deal!
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-snug">
          Smart AI & Blockchain solutions built to grow your business.
          <br />
        </p>
      </div>

      {/* Animations */}
      <style>{`
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

    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spin-reverse {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }

    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }

    .animate-spin-reverse {
      animation: spin-reverse 25s linear infinite;
    }
  `}</style>
    </section>
  );
};

export default Hero;
