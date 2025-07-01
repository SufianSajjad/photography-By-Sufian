import React, { useState } from "react";
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

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "Blockchain Development",
      icon: Blocks,
      shortDesc:
        "End-to-end blockchain solutions across all major chains — Ethereum, BNB, Polygon, Solana, Avalanche, and more. From smart contracts and dApps to Web3 integrations and crypto bots.",
      color: "from-blue-400 to-cyan-400",
      iconBg: "bg-gradient-to-br from-blue-600/60 to-cyan-400/40",
      borderColor: "border-blue-400/60",
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
    },
  ];

  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "150+" },
    { icon: Target, label: "Client Satisfaction", value: "98%" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.05),_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge AI, Blockchain, and full-stack solutions
            tailored to elevate modern businesses. Discover how we can help you
            innovate and grow.
          </p>
        </motion.div>
        {/* Stats Section */}

        {/* Parallax Circuit Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: typeof window !== "undefined" ? window.scrollY * 0.9 : 0, // slower parallax
          }}
        >
          <div
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
              backgroundSize: "contain", // smaller pattern for subtlety
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              width: "100%",
              height: "100%",
              opacity: 0.05, // more subtle
              mixBlendMode: "soft-light", // smoother blend
              filter: "grayscale(100%) blur(1px)", // dull & professional
            }}
          />
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-col gap-10 mt-12">
          {/* Dedicated row for Blockchain Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            {(() => {
              const service = services[0];
              const Icon = service.icon;
              return (
                <div
                  className={`relative group rounded-2xl border ${service.borderColor} shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-blue-400/60 mx-auto`}
                  style={{
                    minHeight: 280,
                    maxWidth: "800px",
                    padding: "2rem 1.5rem",
                  }}
                >
                  {/* Background Image with softened blur and brightness */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/background/cryptoCurrnecy.jpg"
                      alt="Service Background"
                      className="w-full h-full object-cover scale-[1.03] blur-[1.5px] brightness-95 opacity-60"
                      draggable={false}
                    />
                  </div>

                  {/* Subtle overlay for contrast */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />

                  {/* Optional grid pattern overlay */}

                  {/* Content */}
                  <div className="relative z-30">
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl ${service.iconBg} shadow-lg backdrop-blur-sm border border-white/20`}
                    >
                      <Icon size={32} className="text-white drop-shadow-md" />
                    </div>

                    {/* Title & Description */}
                    <div className="px-6 text-center">
                      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight drop-shadow">
                        {service.title}
                      </h3>
                      <p className="text-gray-100 text-base leading-relaxed max-w-lg mx-auto drop-shadow-sm">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-blue-400/60 transition-all duration-500 z-30" />
                </div>
              );
            })()}
          </motion.div>

          {/* Grid for remaining services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(1).map((service, idx) => {
              const Icon = service.icon;
              // Array of different background images for variety
              const backgroundImages = [
                "/images/background/aimachinelearningmanandrobot.jpg",
                "/images/background/fullStack.jpg",
                "/images/background/systemPrograming2.jpg",
                "/images/background/mobiledevelopment.jpg",
                "/images/background/CloudAndDevops.jpg",
                "/images/background/customersoftwaredevelopment.jpg",
              ];
              const bgImage = backgroundImages[idx % backgroundImages.length];

              return (
                <div
                  key={service.id}
                  className={`relative group rounded-2xl border ${service.borderColor} shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-blue-400/60`}
                  style={{ minHeight: 260, padding: "1.75rem 1.5rem" }}
                >
                  {/* Background Image with Light Blur */}
                  <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                      backgroundImage: `url('${bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      filter: "blur(1px) brightness(0.33)", // ⬅️ darker + blur
                      transform: "scale(1.1)", // ⬅️ to prevent edge clipping from blur
                    }}
                  />

                  <div
                    className={`relative z-30 flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-xl ${service.iconBg} shadow-md backdrop-blur-sm border border-white/20`}
                  >
                    <Icon size={28} className="text-white drop-shadow-md" />
                  </div>

                  {/* Content Section */}
                  <div className="px-4 text-center relative z-30">
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-gray-100 text-sm leading-relaxed min-h-[48px] drop-shadow-sm">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Professional Hover Border */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-blue-400/50 transition-all duration-500 z-30" />

                  {/* Subtle Corner Accent */}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
