import React from "react";

const standards = [
  {
    id: 1,
    stat: "15+",
    label: "Clients Supported",
    image: "/images/laptopCoding.jpg", // Replace with actual path or URL
  },
  {
    id: 2,
    stat: "24/7",
    label: "Dedicated Support",
    image: "/images/tableMeeting.jpg",
  },
  {
    id: 3,
    stat: "97%",
    label: "Client Satisfaction",
    image: "/images/24hours.jpg",
  },
];

const Standard: React.FC = () => {
  return (
    <section
      id="standards"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase text-green-400 font-semibold tracking-widest">
            Our Quality
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            The TECHVERSA Standard
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {standards.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-42 h-52 mx-auto rounded object-cover border-2 border-green-20"
                />
              </div>
              <div className="text-4xl font-bold text-green-400">
                {item.stat}
              </div>
              <div className="mt-2 text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standard;
