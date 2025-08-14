import React from "react";
import {
  Camera,
  Heart,
  Users,
  Briefcase,
  Album,
  Video,
  Plane,
  Zap,
} from "lucide-react";

function Services() {
  const services = [
    {
      id: 0,
      title: "Wedding Photography & Videography",
      icon: Heart,
      shortDesc:
        "Complete wedding coverage with elegant, emotional, and cinematic storytelling. From intimate ceremonies to grand celebrations, we preserve every detail so you can relive your special day forever.",
      features: [
        "Full Wedding Day Coverage",
        "Pre-Wedding & Engagement Shoots",
        "Bridal & Groom Portraits",
        "Candid Moments Photography",
        "Destination Wedding Coverage",
        "Cultural & Traditional Photography",
        "Couple Teaser Videos",
        "Full-Length Wedding Films",
        "Drone Wedding Coverage"
      ],
      color: "from-pink-400 to-rose-400",
    },
    {
      id: 1,
      title: "Event Photography & Videography",
      icon: Users,
      shortDesc:
        "Professional coverage for every celebration. From personal milestones to corporate gatherings, we tell your event's story beautifully.",
      features: [
        "Birthday Parties",
        "Corporate Events & Conferences",
        "Bridal & Baby Showers",
        "Anniversaries",
        "Product Launches",
        "Private Dinners & Celebrations"
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Couple & Portrait Sessions",
      icon: Camera,
      shortDesc:
        "Intimate photography sessions that capture your personality and connection. Perfect for couples and individuals seeking striking portraits.",
      features: [
        "Outdoor Couple Photoshoots",
        "Studio Portraits",
        "Lifestyle Photography",
        "Pre-Wedding Storytelling Sessions"
      ],
      color: "from-purple-400 to-indigo-400",
    },
    {
      id: 3,
      title: "Commercial & Brand Photography",
      icon: Briefcase,
      shortDesc:
        "Professional photography that makes brands shine. High-impact visuals for businesses, products, and marketing campaigns.",
      features: [
        "Fashion & Editorial Shoots",
        "Product Photography",
        "Food & Beverage Photography",
        "Interior & Architectural Photography",
        "Business Profile Headshots"
      ],
      color: "from-emerald-400 to-teal-400",
    },
    {
      id: 4,
      title: "Albums & Prints",
      icon: Album,
      shortDesc:
        "Transform your digital memories into beautiful keepsakes. Custom-designed albums and premium prints that last a lifetime.",
      features: [
        "Custom-Designed Wedding Albums",
        "Premium Printed Photo Albums",
        "Canvas Prints & Wall Art",
        "Photo Box Keepsakes"
      ],
      color: "from-amber-400 to-orange-400",
    },
    {
      id: 5,
      title: "Add-On Services",
      icon: Zap,
      shortDesc:
        "Enhance your photography package with cutting-edge features and special touches that make your memories even more spectacular.",
      features: [
        "Drone Photography & Videography",
        "Same-Day Edit Videos",
        "Live Streaming for Events",
        "Slow-Motion Highlight Videos",
        "Behind-the-Scenes Coverage"
      ],
      color: "from-violet-400 to-purple-400",
    },
  ];

  type ServiceType = {
    id: number;
    title: string;
    icon: React.ElementType;
    shortDesc: string;
    features: string[];
    color: string;
  };

  const ServiceCard = ({
    service,
    isFeatured = false,
  }: {
    service: ServiceType;
    isFeatured?: boolean;
  }) => {
    const Icon = service.icon;

    return (
      <div
        className={`group relative rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
          isFeatured
            ? "lg:col-span-2 p-8 min-h-[400px]"
            : "p-6 min-h-[380px]"
        }`}
      >
        {/* Gradient Border Effect */}
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="text-center mb-6">
            <div 
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon size={28} className="text-white" />
            </div>
            <h3 className={`font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text transition-all duration-300 ${
              isFeatured ? "text-2xl" : "text-xl"
            }`}>
              {service.title}
            </h3>
          </div>

          {/* Description */}
          {/* <p className={`text-gray-300 leading-relaxed mb-6 flex-grow ${
            isFeatured ? "text-lg text-center" : "text-base"
          }`}>
            {service.shortDesc}
          </p> */}

          {/* Features List */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">
              What's Included:
            </h4>
            <div className={`space-y-2 ${isFeatured ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : ""}`}>
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center">
            <button 
              className={`px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100`}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(168,85,247,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.08),_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <Camera className="w-6 h-6 text-purple-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Photography <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From intimate moments to grand celebrations, I offer comprehensive photography services 
            tailored to capture your most precious memories with artistic excellence and emotional depth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Service - Wedding Photography (spans 2 columns) */}
          {/* <ServiceCard service={services[0]} isFeatured={true} /> */}
          
          {/* Other Services */}
          {services.slice(1).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Capture Your Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your photography needs and create something beautiful together. 
              Every moment deserves to be preserved with care and artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Consultation
              </button>
              <button 
                className="px-8 py-3 rounded-lg border-2 border-purple-400/50 text-purple-300 font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;