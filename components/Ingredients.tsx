"use client";

import { motion } from "framer-motion";
import type { Ingredient } from "@/lib/flavours";

/** Original, simple ingredient marks (no copied illustrations). */
export function IngredientIcon({ type, className = "" }: { type: Ingredient; className?: string }) {
  const common = { className };
  switch (type) {
    case "chilli":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M14 10c2 5 1 9-2 13-4 6-3 13 4 15 8 2 14-4 15-12 1-7-3-10-7-9-3 1-3-3-1-5" fill="none" stroke="#C0271A" strokeWidth="4" strokeLinecap="round" />
          <path d="M16 32c4 4 9 5 13 2" stroke="#7a1810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M14 10c-1-3 1-5 4-4" stroke="#3f7a2e" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "coriander":
    case "methi":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 42V20" stroke="#3f7a2e" strokeWidth="3" strokeLinecap="round" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path d={`M24 ${30 - i * 8}c-6-2-11 1-13 6 6 1 11-1 13-6Z`} fill={type === "methi" ? "#6E7C3A" : "#4f9e3a"} />
              <path d={`M24 ${30 - i * 8}c6-2 11 1 13 6-6 1-11-1-13-6Z`} fill={type === "methi" ? "#7d8c46" : "#5cb046"} />
            </g>
          ))}
        </svg>
      );
    case "mint":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 40C14 34 10 24 16 14c4 8 10 6 14 12 3 5 0 11-6 14Z" fill="#3a9d5a" />
          <path d="M24 40c0-10-3-18-8-26" stroke="#247a44" strokeWidth="2" fill="none" />
        </svg>
      );
    case "puri":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="24" cy="24" r="16" fill="#E0B070" />
          <circle cx="24" cy="24" r="16" fill="none" stroke="#a9742f" strokeWidth="2" />
          <circle cx="24" cy="20" r="5" fill="#9a5a25" opacity=".6" />
          <circle cx="18" cy="28" r="2" fill="#9a5a25" opacity=".5" />
          <circle cx="30" cy="29" r="1.6" fill="#9a5a25" opacity=".5" />
        </svg>
      );
    case "lime":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <circle cx="24" cy="24" r="15" fill="#9CC04A" />
          <circle cx="24" cy="24" r="11" fill="#C7E07A" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d="M24 24L24 13" stroke="#9CC04A" strokeWidth="1.5" transform={`rotate(${i * 45} 24 24)`} />
          ))}
        </svg>
      );
    case "cumin":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          {[
            [14, 18, 20],
            [30, 16, -15],
            [22, 30, 35],
            [33, 32, 10],
            [16, 33, -25],
          ].map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="2.2" ry="6" fill="#8a5a2a" transform={`rotate(${r} ${x} ${y})`} />
          ))}
        </svg>
      );
    case "peppercorn":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          {[
            [18, 20, 6],
            [30, 18, 5],
            [24, 30, 7],
            [33, 30, 4.5],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#2b2018" />
          ))}
        </svg>
      );
    case "garlic":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path d="M24 8c5 6 9 14 8 22-1 7-15 7-16 0-1-8 3-16 8-22Z" fill="#F3ECDD" />
          <path d="M24 10c0 18 0 22 0 30M18 16c-2 8-2 14 0 22M30 16c2 8 2 14 0 22" stroke="#cdbfa3" strokeWidth="1.5" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

const SPOTS = [
  { top: "12%", left: "8%", size: 64, delay: 0, dur: 6 },
  { top: "68%", left: "12%", size: 52, delay: 0.8, dur: 7 },
  { top: "22%", left: "82%", size: 58, delay: 0.4, dur: 6.5 },
  { top: "74%", left: "78%", size: 70, delay: 1.2, dur: 8 },
  { top: "44%", left: "90%", size: 44, delay: 0.6, dur: 6.2 },
  { top: "8%", left: "52%", size: 48, delay: 1.5, dur: 7.4 },
];

export function FloatingIngredients({ items }: { items: Ingredient[] }) {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SPOTS.map((s, i) => {
        const type = items[i % items.length];
        return (
          <motion.div
            key={i}
            className="absolute opacity-90 drop-shadow-lg"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            initial={{ y: 0, rotate: -8 }}
            animate={reduce ? {} : { y: [0, -16, 0], rotate: [-8, 8, -8] }}
            transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <IngredientIcon type={type} className="h-full w-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
