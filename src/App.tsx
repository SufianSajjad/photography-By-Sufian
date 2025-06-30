import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Expertise from "./components/Expertise";
import ThemeProvider from "./context/ThemeContext";
import Standard from "./components/Standard";
import Team from "./components/Team";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900">
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
              <Services />
              <Expertise />
              <Standard />
              <Team />
              <Technologies />
              <About />
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
