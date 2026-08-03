import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that returns [ref, inView] for scroll-triggered animations.
 * Uses IntersectionObserver for performance.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0 to 1)
 * @param {string} options.rootMargin - Root margin
 * @param {boolean} options.once - Only trigger once (default: true)
 */
export const useInView = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return [ref, inView];
};
