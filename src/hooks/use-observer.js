import { useEffect, useState, useRef } from "react";

export function useObserver(options) {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && triggerOnce) {
          observer.unobserve(entry.target);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [containerRef, isVisible];
}
