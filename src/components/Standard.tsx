import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type StandardItem = {
  id: number;
  stat: string;
  label: string;
  image: string;
};

const standards: StandardItem[] = [
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

// Animated Counter Hook
function useAnimatedCounter(target: number | string, duration = 1.5) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    let end = typeof target === "string" ? parseFloat(target) : target;
    if (isNaN(end)) {
      setValue(0);
      return;
    }
    let startTime: number | null = null;
    function animateCounter(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animateCounter);
      else setValue(Number(end));
    }
    requestAnimationFrame(animateCounter);
    // eslint-disable-next-line
  }, [target, duration]);
  return value;
}

// StatCard component to use the hook correctly
function StatCard({ item }: { item: StandardItem }) {
  const isPercent = typeof item.stat === "string" && item.stat.includes("%");
  const isPlus = typeof item.stat === "string" && item.stat.includes("+");
  const statNum = parseInt(item.stat.replace(/[^0-9]/g, ""));
  const animatedValue = useAnimatedCounter(statNum);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)" }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center shadow-lg group transition-all duration-300"
    >
      {/* Image source: Unsplash or your own image */}
      <div className="mb-6 relative">
        <img
          src={item.image}
          alt={item.label}
          className="w-42 h-52 mx-auto rounded object-cover border-2 border-green-200 shadow-xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded" />
      </div>
      <div className="text-4xl font-bold text-green-400 flex items-center justify-center">
        {animatedValue}
        {isPlus && <span>+</span>}
        {isPercent && <span>%</span>}
      </div>
      <div className="mt-2 text-gray-300 font-medium text-lg">{item.label}</div>
    </motion.div>
  );
}

const Standard: React.FC = () => {
  return (
    <section
      id="standards"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
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
