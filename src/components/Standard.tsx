import React, { useMemo } from "react";

const Standard = () => {
  // Memoize the standards array to prevent re-creation on each render
  const standards = useMemo(
    () => [
      {
        id: 1,
        stat: "5+",
        label: "Clients Supported",
        image: "/images/Standard/laptopCoding.jpg",
      },
      {
        id: 2,
        stat: "24/7",
        label: "Dedicated Support",
        image: "/images/Standard/24hours.jpg",
      },
      {
        id: 3,
        stat: "95%",
        label: "Client Satisfaction",
        image: "/images/Standard/laptopCoding.jpg",
      },
    ],
    []
  );

  // item

  // Memoized StatCard component to prevent unnecessary re-renders
  const StatCard = useMemo(
    () =>
      React.memo(({ item }: { item: (typeof standards)[number] }) => (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center shadow-lg group transition-all duration-300 hover:scale-105">
          <div className="mb-6 relative">
            <img
              src={item.image}
              alt={item.label}
              className="w-42 h-52 mx-auto rounded object-cover border-2 border-green-200 shadow-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded" />
          </div>

          <div className="text-4xl font-bold text-green-400 flex items-center justify-center">
            {item.stat}
          </div>

          <div className="mt-2 text-gray-300 font-medium text-lg">
            {item.label}
          </div>
        </div>
      )),
    []
  );

  return (
    <section
      id="standards"
      className="py-20 bg-gradient-to-br from-black to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            The TECHVERSA Standard
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {standards.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standard;
