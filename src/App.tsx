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
import ThemeProvider from "./context/ThemeContext";

// Lazy-loaded sections
const Hero = lazy(
  () => import(/* webpackChunkName: "hero" */ "./components/Hero")
);
const Services = lazy(
  () => import(/* webpackChunkName: "services" */ "./components/Services")
);
const Expertise = lazy(
  () => import(/* webpackChunkName: "expertise" */ "./components/Expertise")
);
const Standard = lazy(
  () => import(/* webpackChunkName: "standard" */ "./components/Standard")
);
const Team = lazy(
  () => import(/* webpackChunkName: "team" */ "./components/Team")
);
const Contact = lazy(
  () => import(/* webpackChunkName: "contact" */ "./components/Contact")
);

// Spinner
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center p-8 min-h-[200px]">
    <div className="relative">
      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400/30 rounded-full"></div>
    </div>
    <span className="ml-3 text-gray-400 text-sm">Loading...</span>
  </div>
));
LoadingSpinner.displayName = "LoadingSpinner";

// ✅ Fixed useIntersectionObserver hook
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
      { threshold, rootMargin: "50px" }
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
  [key: string]: any;
};

// LazySection component
const LazySection = memo(
  ({
    Component,
    fallback = <LoadingSpinner />,
    className = "",
    ...props
  }: LazySectionProps) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
      <div ref={ref} className={className}>
        {isVisible ? (
          <Suspense fallback={fallback}>
            <Component {...props} />
          </Suspense>
        ) : (
          <div className="min-h-[200px]" />
        )}
      </div>
    );
  }
);
LazySection.displayName = "LazySection";

// Background
const AppBackground = memo(() => (
  <div className="fixed inset-0 -z-10">
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
      { Component: Services, key: "services" },
      { Component: Expertise, key: "expertise" },
      { Component: Standard, key: "standard" },
      { Component: Team, key: "team" },
      { Component: Contact, key: "contact" },
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      import("./components/Services");
    }, 2000);

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
          {sections.slice(1).map(({ Component, key }) => (
            <LazySection
              key={key}
              Component={Component}
              fallback={<LoadingSpinner />}
            />
          ))}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
});
App.displayName = "App";

export default App;
