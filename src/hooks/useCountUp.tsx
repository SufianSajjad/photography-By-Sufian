import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
  threshold?: number;
}

export const useCountUp = ({
  end,
  duration = 2000,
  startOnView = true,
  threshold = 0.5,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Intersection Observer for triggering animation when in view
  useEffect(() => {
    if (!startOnView || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnView, threshold]);

  // Count up animation
  useEffect(() => {
    if (startOnView && !isVisible) return;
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end); // Ensure we end at the exact target value
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration, startOnView]);

  // For immediate start (when startOnView is false)
  useEffect(() => {
    if (!startOnView && !hasAnimated.current) {
      setIsVisible(true);
    }
  }, [startOnView]);

  return { count, elementRef };
};

export default useCountUp; 