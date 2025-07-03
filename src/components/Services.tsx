import React from "react";
import {
  Code2,
  Smartphone,
  Brain,
  Cpu,
  CloudCog,
  Blocks,
  SlidersHorizontal,
} from "lucide-react";

function Services() {
  const services = [
    {
      id: 0,
      title: "Blockchain Development",
      icon: Blocks,
      shortDesc:
        "End-to-end blockchain solutions across all major chains — Ethereum, BNB, Polygon, Solana, Avalanche, and more. From smart contracts and dApps to Web3 integrations and crypto bots.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: Brain,
      shortDesc:
        "Custom AI and ML solutions to automate tasks, analyze data, and power intelligent decision-making.",
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Full Stack Development",
      icon: Code2,
      shortDesc:
        "End-to-end web and mobile apps with modern frameworks and architectures for seamless user experiences.",
      color: "from-indigo-400 to-purple-400",
    },
    {
      id: 3,
      title: "Systems Programming",
      icon: Cpu,
      shortDesc:
        "Performance-driven development using C, C++, Rust, and Go for embedded, desktop, and high-efficiency applications.",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      title: "Mobile App Development",
      icon: Smartphone,
      shortDesc:
        "Cross-platform and native mobile apps built with React Native, Next, Angular, or native stacks — fast, secure, and user-friendly.",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      icon: CloudCog,
      shortDesc:
        "Scalable cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, and automation for fast, reliable deployments.",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 6,
      title: "Custom Software Development",
      icon: SlidersHorizontal,
      shortDesc:
        "Tailored software solutions across platforms — desktop, cloud, automation tools, integrations, and more.",
      color: "from-gray-400 to-slate-400",
    },
  ];

  type ServiceType = {
    id: number;
    title: string;
    icon: React.ElementType;
    shortDesc: string;
    color: string;
  };
  const ServiceCard = ({
    service,
    isFirst = false,
  }: {
    service: ServiceType;
    isFirst?: boolean;
  }) => {
    const Icon = service.icon;

    return (
      <div
        className={`relative rounded-2xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 ${
          isFirst
            ? "max-w-3xl mx-auto px-6 py-8 min-h-[280px]"
            : "px-4 py-6 min-h-[260px]"
        }`}
      >
        <div className="text-center space-y-4 px-4">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 shadow">
            <Icon size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge AI, Blockchain, and full-stack solutions
            tailored to elevate modern businesses. Discover how we can help you
            innovate and grow.
          </p>
        </div>

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
      </div>
    </section>
  );
}

export default Services;
