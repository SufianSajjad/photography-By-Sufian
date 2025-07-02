import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Shield,
  Cpu,
  Brain,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Code2,
  CloudCog,
  Blocks,
  SlidersHorizontal,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload background images for better performance
  useEffect(() => {
    const imageUrls = [
      "/images/background/cryptoCurrnecy.jpg",
      "/images/background/aimachinelearningmanandrobot.jpg",
      "/images/background/fullStack.jpg",
      "/images/background/systemPrograming2.jpg",
      "/images/background/mobiledevelopment.jpg",
      "/images/background/CloudAndDevops.jpg",
      "/images/background/customersoftwaredevelopment.jpg",
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
  }, []);

  // Memoize services data to prevent recreation on every render
  const services = useMemo(
    () => [
      {
        id: 0,
        title: "Blockchain Development",
        icon: Blocks,
        shortDesc:
          "End-to-end blockchain solutions across all major chains — Ethereum, BNB, Polygon, Solana, Avalanche, and more. From smart contracts and dApps to Web3 integrations and crypto bots.",
        color: "from-blue-400 to-cyan-400",
        iconBg: "bg-gradient-to-br from-blue-600/60 to-cyan-400/40",
        borderColor: "border-blue-400/60",
        bgImage: "/images/background/cryptoCurrnecy.jpg",
      },
      {
        id: 1,
        title: "AI & Machine Learning",
        icon: Brain,
        shortDesc:
          "Custom AI and ML solutions to automate tasks, analyze data, and power intelligent decision-making.",
        color: "from-teal-400 to-cyan-400",
        iconBg: "bg-gradient-to-br from-teal-600/60 to-cyan-400/40",
        borderColor: "border-teal-400/60",
        bgImage: "/images/background/aimachinelearningmanandrobot.jpg",
      },
      {
        id: 2,
        title: "Full Stack Development",
        icon: Code2,
        shortDesc:
          "End-to-end web and mobile apps with modern frameworks and architectures for seamless user experiences.",
        color: "from-indigo-400 to-purple-400",
        iconBg: "bg-gradient-to-br from-indigo-600/60 to-purple-400/40",
        borderColor: "border-indigo-400/60",
        bgImage: "/images/background/fullStack.jpg",
      },
      {
        id: 3,
        title: "Systems Programming",
        icon: Cpu,
        shortDesc:
          "Performance-driven development using C, C++, Rust, and Go for embedded, desktop, and high-efficiency applications.",
        color: "from-green-400 to-emerald-400",
        iconBg: "bg-gradient-to-br from-green-600/60 to-emerald-400/40",
        borderColor: "border-green-400/60",
        bgImage: "/images/background/systemPrograming2.jpg",
      },
      {
        id: 4,
        title: "Mobile App Development",
        icon: Smartphone,
        shortDesc:
          "Cross-platform and native mobile apps built with React Native, Next, Angular, or native stacks — fast, secure, and user-friendly.",
        color: "from-purple-400 to-pink-400",
        iconBg: "bg-gradient-to-br from-purple-600/60 to-pink-400/40",
        borderColor: "border-purple-400/60",
        bgImage: "/images/background/mobiledevelopment.jpg",
      },
      {
        id: 5,
        title: "Cloud & DevOps",
        icon: CloudCog,
        shortDesc:
          "Scalable cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, and automation for fast, reliable deployments.",
        color: "from-orange-400 to-red-400",
        iconBg: "bg-gradient-to-br from-orange-600/60 to-red-400/40",
        borderColor: "border-orange-400/60",
        bgImage: "/images/background/CloudAndDevops.jpg",
      },
      {
        id: 6,
        title: "Custom Software Development",
        icon: SlidersHorizontal,
        shortDesc:
          "Tailored software solutions across platforms — desktop, cloud, automation tools, integrations, and more.",
        color: "from-gray-400 to-slate-400",
        iconBg: "bg-gradient-to-br from-gray-600/60 to-slate-400/40",
        borderColor: "border-gray-400/60",
        bgImage: "/images/background/customersoftwaredevelopment.jpg",
      },
    ],
    []
  );

  // Memoize stats to prevent recreation
  const stats = useMemo(
    () => [
      { icon: Rocket, label: "Projects Completed", value: 15, suffix: "+" },
      { icon: Target, label: "Client Satisfaction", value: 98, suffix: "%" },
      { icon: Users, label: "Happy Clients", value: 50, suffix: "+" },
      { icon: TrendingUp, label: "Success Rate", value: 95, suffix: "%" },
    ],
    []
  );

  // Memoize motion variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      },
    }),
    []
  );

  const gridVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
      },
    }),
    []
  );

  // Animated stat component
  const AnimatedStat: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
    const { count, elementRef } = useCountUp({
      end: stat.value,
      duration: 2500 + index * 300, // Stagger animations
      startOnView: false, // Temporarily disable for testing
      threshold: 0.1, // Lower threshold for earlier triggering
    });

    const Icon = stat.icon;

    console.log(`Services stat ${stat.label}: count = ${count}, target = ${stat.value}`);

    return (
      <div ref={elementRef} className="text-center group">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-gray-400">{stat.label}</div>
      </div>
    );
  };

  // Optimized service card component to prevent recreation
  const ServiceCard = React.memo(
    ({
      service,
      isFirst = false,
    }: {
      service: {
        icon: React.ElementType;
        title: string;
        shortDesc: string;
        bgImage: string;
        borderColor: string;
        iconBg: string;
      };
      isFirst?: boolean;
    }) => {
      const Icon = service.icon;

      const cardStyles = isFirst
        ? "max-w-3xl mx-auto px-6 py-8 min-h-[280px]"
        : "px-4 py-6 min-h-[260px]";

      return (
        <div
          className={`relative rounded-2xl border ${service.borderColor} shadow-md hover:shadow-lg transition-all duration-300 ease-out overflow-hidden group ${cardStyles}`}
          style={{ 
            contain: 'layout style paint',
            willChange: 'transform, opacity'
          }}
        >
          {/* Background Image with loading state */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
              imagesLoaded ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              backgroundImage: imagesLoaded ? `url('${service.bgImage}')` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'translateZ(0)', // Force hardware acceleration
            }}
          />

          {/* Fallback background while loading */}
          {!imagesLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Icon & Content */}
          <div className="relative z-20 text-center">
            <div
              className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl ${service.iconBg} border border-white/20 shadow-sm`}
            >
              <Icon size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed max-w-md mx-auto">
              {service.shortDesc}
            </p>
          </div>
        </div>
      );
    }
  );

  ServiceCard.displayName = "ServiceCard";

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
      style={{ contain: 'layout style' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.05),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge AI, Blockchain, and full-stack solutions
            tailored to elevate modern businesses. Discover how we can help you
            innovate and grow.
          </p>
        </div>

        {/* Optimized Parallax Circuit Overlay - Removed window reference */}

        {/* Services Cards */}
        <div className="flex flex-col gap-10 mt-12">
          {/* Dedicated row for Blockchain Development */}
          <div className="w-full">
            <ServiceCard service={services[0]} isFirst={true} />
          </div>

          {/* Grid for remaining services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(1).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Animated Stats Section */}
        {/* <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Track Record
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </div> */}
          
          {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <AnimatedStat key={idx} stat={stat} index={idx} />
            ))}
          </div>*/}
        </div>
      
    </section>
  );
};

export default Services;
