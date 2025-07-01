import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import Standard from "./components/Standard";
import Team from "./components/Team";
import Expertise from "./components/Expertise";

// Add placeholder components for new sections
const TrustedBy = () => (
  <section className="py-12 bg-transparent text-center">
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
      Trusted By
    </h2>
    <div className="flex flex-wrap justify-center gap-8 opacity-60">
      {/* Placeholder logos, replace with real client logos */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg font-bold"
        >
          Logo
        </div>
      ))}
    </div>
  </section>
);
const Hallmarks = () => (
  <section className="py-16 bg-gradient-to-br from-gray-100/60 to-white/0 dark:from-gray-900/60 dark:to-gray-800/0">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Hallmarks & Case Studies
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Project {i}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
              Short description of a hallmark project or case study. Replace
              with real content.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const Blogs = () => (
  <section className="py-16 bg-transparent">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Latest Blogs
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
            }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-start group transition-all duration-300"
          >
            {/* Image source: Unsplash https://images.unsplash.com/photo-1461749280684-dccba630e2f6 */}
            <img
              src={
                [
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
                  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                ][i - 1]
              }
              alt={`Blog ${i} thumbnail`}
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500"
              draggable="false"
            />
            <h3 className="text-lg font-semibold mb-2">Blog Title {i}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              Short excerpt of the blog post. Replace with real content.
            </p>
            <a
              href="#"
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

function SectionDivider() {
  return (
    <div className="w-full h-12 flex items-center justify-center">
      <div className="w-3/4 h-1 rounded-full bg-gradient-to-r from-transparent via-primary-500/40 to-transparent blur-sm opacity-70" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <Hero />
              {/* <SectionDivider /> */}
              {/* <TrustedBy /> */}
              {/* <SectionDivider /> */}
              <Services />
              <Expertise />
              {/* <SectionDivider /> */}
              <Standard />
              {/* <SectionDivider /> */}
              {/* <Hallmarks /> */}
              {/* <SectionDivider /> */}
              <Team />
              {/* <SectionDivider /> */}
              {/* <Blogs /> */}
              {/* <SectionDivider /> */}
              {/* <About /> */}
              {/* <SectionDivider /> */}
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
