import React, { useState } from 'react';
import { Check, Star, Camera, Clock, Users, Image, Video, Zap } from 'lucide-react';

// Allowed categories
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
        name: 'Basic Wedding',
        price: '$999',
        duration: '4 Hours',
        popular: false,
        description: 'Perfect for small wedding ceremonies',
        features: [
          'Professional photographer',
          '200+ edited photos',
          'Online gallery',
          'Print release'
        ]
      },
      {
        name: 'Premium Wedding',
        price: '$1,999',
        duration: '8 Hours',
        popular: true,
        description: 'Comprehensive coverage for your special day',
        features: [
          '2 professional photographers',
          '500+ edited photos',
          'Luxury album',
          'Drone coverage',
          'Same-day preview'
        ],
        addOns: ['Extra hour - $200', 'Photo booth - $300']
      }
    ],
    portrait: [
      {
        name: 'Portrait Session',
        price: '$299',
        duration: '1 Hour',
        popular: false,
        description: 'Perfect for individuals or couples',
        features: [
          'Outdoor or studio session',
          '15 edited photos',
          'Online gallery'
        ]
      }
    ],
    event: [
      {
        name: 'Corporate Event',
        price: '$799',
        duration: '3 Hours',
        popular: false,
        description: 'Professional coverage for business events',
        features: [
          'Candid and posed shots',
          'Unlimited photos',
          'Online gallery'
        ]
      }
    ]
  };

  const currentPackages = packages[selectedCategory];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Packages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect package for your needs
          </p>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            {(['wedding', 'portrait', 'event'] as PackageCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border ${
                pkg.popular
                  ? 'border-blue-500'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" /> Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {pkg.duration}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.addOns && (
                  <>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Add-ons:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.addOns.map((addon) => (
                        <li
                          key={addon}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
