import React, { useState } from 'react';
import { Check, Star, Camera, Clock, Users, Image, Video, Zap, Heart, Sparkles, Film } from 'lucide-react';

type PackageCategory = 'wedding' | 'portrait' | 'event';

interface Package {
  name: string;
  price: string;
  duration: string;
  popular: boolean;
  description: string;
  features: string[];
  addOns?: string[];
}

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>('wedding');

  const packages: Record<PackageCategory, Package[]> = {
    wedding: [
      {
        name: 'Essential Wedding',
        price: 'PKR 150,000',
        duration: '6 Hours',
        popular: false,
        description: 'Perfect for intimate wedding ceremonies',
        features: [
          '1 Professional Photographer',
          '300+ Edited Photos',
          'Candid & Traditional Shots',
          'Online Gallery Access',
          'Print Release Rights',
          'Basic Color Grading'
        ]
      },
      {
        name: 'Premium Wedding',
        price: 'PKR 300,000',
        duration: 'Full Day',
        popular: true,
        description: 'Complete coverage for your dream wedding',
        features: [
          '2 Professional Photographers',
          '600+ Edited Photos',
          'Cinematic Highlights Video',
          'Drone Coverage',
          'Luxury Photo Album (50 pages)',
          'Same-Day Teaser',
          'Mehndi & Barat Coverage',
          'Online Gallery (Lifetime Access)'
        ],
        addOns: ['Pre-Wedding Shoot - PKR 50,000', 'Extended Coverage +2hrs - PKR 30,000']
      },
      {
        name: 'Cinematic Wedding',
        price: 'PKR 500,000',
        duration: '2-3 Days',
        popular: false,
        description: 'Ultimate wedding storytelling experience',
        features: [
          '3 Professional Photographers',
          '1000+ Edited Photos',
          'Full-Length Wedding Film (20-30 min)',
          'Cinematic Highlights (5-7 min)',
          'Drone Coverage (Multiple Angles)',
          'Premium Album (100 pages)',
          'Same-Day Edit Screening',
          'Complete Event Coverage (Mehndi, Barat, Walima)',
          'Behind-the-Scenes Footage',
          'USB with All RAW Files'
        ],
        addOns: ['Photo Booth Setup - PKR 40,000', 'Live Streaming - PKR 60,000']
      }
    ],
    portrait: [
      {
        name: 'Individual Portrait',
        price: 'PKR 25,000',
        duration: '1 Hour',
        popular: false,
        description: 'Personal or professional portraits',
        features: [
          'Outdoor or Studio Session',
          '20 Edited Photos',
          'Multiple Outfit Changes',
          'Online Gallery',
          'Professional Retouching'
        ]
      },
      {
        name: 'Couple Session',
        price: 'PKR 40,000',
        duration: '2 Hours',
        popular: true,
        description: 'Romantic couple photoshoot',
        features: [
          'Outdoor Location of Choice',
          '40+ Edited Photos',
          'Candid & Posed Shots',
          'Cinematic Video Clip (1 min)',
          'Online Gallery',
          'Print-Ready Files'
        ],
        addOns: ['Extra Location - PKR 10,000']
      },
      {
        name: 'Pre-Wedding Story',
        price: 'PKR 75,000',
        duration: 'Half Day',
        popular: false,
        description: 'Complete pre-wedding experience',
        features: [
          '2 Location Changes',
          '100+ Edited Photos',
          'Cinematic Video (3-5 min)',
          'Drone Shots',
          'Multiple Outfit Changes',
          'Premium Online Gallery',
          'Printed Photo Album (30 pages)'
        ]
      }
    ],
    event: [
      {
        name: 'Birthday Party',
        price: 'PKR 35,000',
        duration: '3 Hours',
        popular: false,
        description: 'Capture memorable birthday moments',
        features: [
          '1 Photographer',
          '150+ Edited Photos',
          'Candid Moments Coverage',
          'Online Gallery',
          'Highlight Video (2 min)'
        ]
      },
      {
        name: 'Corporate Event',
        price: 'PKR 60,000',
        duration: '4 Hours',
        popular: true,
        description: 'Professional event documentation',
        features: [
          '2 Photographers',
          '300+ Edited Photos',
          'Coverage of Key Moments',
          'Professional Group Photos',
          'Same-Day Preview',
          'Online Gallery with Download'
        ],
        addOns: ['Videography - PKR 40,000', 'Live Photo Booth - PKR 30,000']
      },
      {
        name: 'Grand Celebration',
        price: 'PKR 100,000',
        duration: 'Full Day',
        popular: false,
        description: 'Complete event coverage',
        features: [
          '2 Photographers + 1 Videographer',
          '500+ Edited Photos',
          'Cinematic Event Video (10 min)',
          'Drone Coverage',
          'All Event Segments Covered',
          'Professional Lighting Setup',
          'Same-Day Highlights',
          'Unlimited Downloads'
        ]
      }
    ]
  };

  const currentPackages = packages[selectedCategory];

  return (
    <section id="packages" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-rose-500/10 border border-rose-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-rose-400 text-sm font-light tracking-wide">Investment in Memories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
            Our Packages
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Choose the perfect package that captures your story beautifully
          </p>
        </div>

        {/* Category Selector - More Elegant */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-1.5">
            {(['wedding', 'portrait', 'event'] as PackageCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-rose-500/20 ${
                pkg.popular
                  ? 'border-rose-500/50 ring-2 ring-rose-500/30'
                  : 'border-white/10 hover:border-rose-500/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-medium flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-white" /> Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {selectedCategory === 'wedding' && <Heart className="w-6 h-6 text-rose-400" />}
                  {selectedCategory === 'portrait' && <Camera className="w-6 h-6 text-purple-400" />}
                  {selectedCategory === 'event' && <Sparkles className="w-6 h-6 text-amber-400" />}
                  <h3 className="text-2xl font-bold text-white">
                    {pkg.name}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-2">{pkg.price}</p>
                  <div className="flex items-center text-gray-400 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-light">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed">{pkg.description}</p>
                </div>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-gray-300 font-light"
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.addOns && (
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Available Add-ons:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.addOns.map((addon) => (
                        <li
                          key={addon}
                          className="flex items-start text-gray-400 text-sm font-light"
                        >
                          <span className="text-yellow-400 mr-2">+</span>
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Film className="w-5 h-5" />
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-rose-900/20 via-purple-900/20 to-amber-900/20 border border-rose-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Need Something Custom?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Every love story is unique. Let's create a personalized package that perfectly fits your vision, 
            style, and budget. We're flexible and here to make your dreams come true.
          </p>
          <button 
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Camera className="w-5 h-5" />
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;