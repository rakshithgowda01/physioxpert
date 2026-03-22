import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollFadeWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * ScrollFadeWrapper Component
 * Design: Wraps sections with fade in/out on scroll effect
 * - Fades in as section enters viewport
 * - Fades out as section leaves viewport
 * - Smooth parallax movement
 */
export default function ScrollFadeWrapper({ children, className = "" }: ScrollFadeWrapperProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Fade effect based on scroll position
  const opacity = useTransform(
    scrollY,
    [0, 300, 1500, 1800],
    [0.3, 1, 1, 0.3]
  );

  const y = useTransform(
    scrollY,
    [0, 500, 1500],
    [100, 0, -100]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
