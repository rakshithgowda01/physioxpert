import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook for scroll fade in/out animations
 * Returns opacity and y position based on scroll position
 */
export const useScrollFade = (threshold = 0.2) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Calculate fade based on element position relative to viewport
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);
  const y = useTransform(scrollY, [0, 500], [50, 0]);

  return { ref, opacity, y };
};
