import React, {
  lazy,
  Suspense,
  memo,
  useMemo,
  useCallback,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeProvider from "./context/ThemeContext";

// Lazy-loaded sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Standard from "./components/Standard";
import Team from "./components/Team";
import Contact from "./components/Contact";

// Spinner
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center p-8 min-h-[400px]">
    <div className="relative">
      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400/30 rounded-full"></div>
    </div>
    <span className="ml-3 text-gray-400 text-sm">Loading...</span>
  </div>
));
LoadingSpinner.displayName = "LoadingSpinner";

// Optimized intersection observer hook
const useIntersectionObserver = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "100px 0px", // Preload content earlier
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

// Props for LazySection
type LazySectionProps = {
  Component: React.ComponentType<any>;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
  [key: string]: any;
};

// Optimized LazySection component
const LazySection = memo(
  ({
    Component,
    fallback = <LoadingSpinner />,
    className = "",
    minHeight = "min-h-[400px]",
    ...props
  }: LazySectionProps) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
      <div ref={ref} className={className} style={{ contain: "layout style" }}>
        {isVisible ? (
          <Suspense fallback={fallback}>
            <Component {...props} />
          </Suspense>
        ) : (
          <div className={`${minHeight} bg-transparent`} />
        )}
      </div>
    );
  }
);
LazySection.displayName = "LazySection";

// Background
const AppBackground = memo(() => (
  <div className="fixed inset-0 -z-10" style={{ contain: "strict" }}>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.03),_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.03),_transparent_50%)]" />
  </div>
));
AppBackground.displayName = "AppBackground";

// App
const App = memo(() => {
  const sections = useMemo(
    () => [
      { Component: Hero, key: "hero", priority: true },
      { Component: Services, key: "services", minHeight: "min-h-[600px]" },
      { Component: Expertise, key: "expertise", minHeight: "min-h-[500px]" },
      { Component: Standard, key: "standard", minHeight: "min-h-[400px]" },
      { Component: Team, key: "team", minHeight: "min-h-[500px]" },
      { Component: Contact, key: "contact", minHeight: "min-h-[400px]" },
    ],
    []
  );

  // Preload critical sections
  useEffect(() => {
    const timer = setTimeout(() => {
      Promise.all([
        import("./components/Services"),
        import("./components/Expertise"),
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const ErrorFallback = useCallback(
    ({ error }: { error?: Error }) => (
      <div className="flex items-center justify-center p-8 min-h-[200px] text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h3 className="text-red-800 font-medium mb-2">
            Something went wrong
          </h3>
          <p className="text-red-600 text-sm mb-3">
            {error?.message || "Failed to load section"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    ),
    []
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <AppBackground />
        <Header />
        <main className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
          <Services />
          <Expertise />
          <Standard />
          <Team />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
});
App.displayName = "App";

export default App;
