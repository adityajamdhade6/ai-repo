"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** travel distance in px */
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "figure";
};

/**
 * The single motion primitive used across the site: a quiet fade + slide
 * that fires once when the element scrolls into view. Honours reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
