import React from "react";
import {
  Camera,
  Heart,
  Users,
  Briefcase,
  Album,
  Plane,
  Zap,
  Sparkles,
  Film,
} from "lucide-react";

function Services() {
  const services = [
    {
      id: 0,
      title: "Wedding Photography & Videography",
      icon: Heart,
      shortDesc:
        "Your love story deserves to be told with emotion, elegance, and cinematic artistry. From the quiet moments of preparation to the grand celebration, we capture every tear, every smile, and every magical detail that makes your day uniquely yours.",
      features: [
        "Full Wedding Day Coverage",
        "Pre-Wedding & Engagement Shoots",
        "Bridal & Groom Portraits",
        "Candid Moments Photography",
        "Destination Wedding Coverage",
        "Cultural & Traditional Wedding Photography",
        "Couple Teaser Videos",
        "Full-Length Wedding Films",
        "Drone Wedding Coverage"
      ],
      color: "from-rose-400 via-pink-400 to-purple-400",
    },
    {
      id: 1,
      title: "Event Photography & Videography",
      icon: Users,
      shortDesc:
        "Every celebration tells a story. Whether it's a milestone birthday, corporate achievement, or intimate gathering, we document your event with the same care and professionalism that has made us Islamabad's trusted choice.",
      features: [
        "Birthday Parties",
        "Corporate Events & Conferences",
        "Bridal & Baby Showers",
        "Anniversaries",
        "Product Launches",
        "Private Dinners & Celebrations"
      ],
      color: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      id: 2,
      title: "Couple & Portrait Sessions",
      icon: Camera,
      shortDesc:
        "Capture your connection in its purest form. Our intimate portrait sessions celebrate your personality, your love, and your story with stunning imagery that feels authentic and timeless.",
      features: [
        "Outdoor Couple Photoshoots",
        "Studio Portraits",
        "Lifestyle Photography",
        "Pre-Wedding Storytelling Sessions"
      ],
      color: "from-purple-400 via-violet-400 to-indigo-400",
    },
    {
      id: 3,
      title: "Commercial & Brand Photography",
      icon: Briefcase,
      shortDesc:
        "Elevate your brand with visuals that command attention. From fashion editorials to product photography, we create images that don't just showcase your work—they tell your brand's story.",
      features: [
        "Fashion & Editorial Shoots",
        "Product Photography",
        "Food & Beverage Photography",
        "Interior & Architectural Photography",
        "Business Profile Headshots"
      ],
      color: "from-emerald-400 via-teal-400 to-cyan-400",
    },
    {
      id: 4,
      title: "Albums & Prints",
      icon: Album,
      shortDesc:
        "Your memories deserve more than a hard drive. We create heirloom-quality albums and stunning prints that transform your digital moments into tangible treasures you'll cherish for generations.",
      features: [
        "Custom-Designed Wedding Albums",
        "Premium Printed Photo Albums",
        "Canvas Prints & Wall Art",
        "Photo Box Keepsakes"
      ],
      color: "from-amber-400 via-orange-400 to-rose-400",
    },
    {
      id: 5,
      title: "Premium Add-Ons",
      icon: Zap,
      shortDesc:
        "Take your coverage to the next level with cutting-edge features. From breathtaking drone footage to same-day highlight reels, these enhancements add an extra layer of magic to your memories.",
      features: [
        "Drone Photography & Videography",
        "Same-Day Edit Videos",
        "Live Streaming for Events",
        "Slow-Motion Highlight Videos",
        "Behind-the-Scenes Coverage"
      ],
      color: "from-violet-400 via-purple-400 to-fuchsia-400",
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
        className={`group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-700 hover:scale-[1.02] hover:border-white/30 ${
          isFeatured
            ? "lg:col-span-2 xl:col-span-3 p-10 min-h-[450px]"
            : "p-8 min-h-[520px]"
        }`}
      >
        <div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl -z-10`}
        />
        
        <div 
          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className={`mb-6 ${isFeatured ? 'text-center' : ''}`}>
            <div 
              className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${isFeatured ? 'mx-auto' : ''}`}
            >
              <Icon size={32} className="text-white" strokeWidth={1.5} />
            </div>
            
            <h3 className={`font-bold text-white mb-3 transition-all duration-500 ${
              isFeatured ? "text-3xl" : "text-2xl"
            }`}>
              {service.title}
            </h3>
            
            <p className={`text-gray-400 leading-relaxed ${
              isFeatured ? "text-lg max-w-4xl mx-auto" : "text-base"
            }`}>
              {service.shortDesc}
            </p>
          </div>

          <div className="flex-grow mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-gray-400" />
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                What's Included
              </h4>
            </div>
            
            <div className={`space-y-3 ${isFeatured ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" : ""}`}>
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group/item"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={isFeatured ? "text-center" : ""}>
            <button 
              className={`group/btn relative px-7 py-3.5 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105`}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Started
                <Sparkles className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-500" />
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
            <Film className="w-6 h-6 text-rose-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-400 to-transparent" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Photography Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            From weddings to corporate events, portraits to commercial shoots — every moment we capture 
            is infused with emotion, artistry, and a commitment to excellence that has made us one of{" "}
            <span className="text-rose-300 font-medium">Islamabad's most trusted photographers</span>.
          </p>
        </div>

        <div className="mb-12">
          <ServiceCard service={services[0]} isFeatured={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.slice(1).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-amber-500/20 blur-3xl -z-10" />
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6 border border-rose-500/30">
                <Sparkles className="w-4 h-4 text-rose-300" />
                <span className="text-sm text-rose-200 font-medium">Limited Availability</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Let's Create Something{" "}
                <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you're planning your dream wedding, hosting a special event, or need professional 
                photography services, we'd love to hear your story and bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    <Heart className="w-5 h-5" />
                    Book Your Date Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button 
                  className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                  onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Camera className="w-5 h-5" />
                    View Our Portfolio
                  </span>
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Available for 2025 bookings</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-600" />
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span>Destination coverage available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Services;