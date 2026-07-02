"use client";

import { motion } from "framer-motion";
import Chip from "./Chip";

type Spot = { top: string; left: string; size: number; rotate: number; delay: number };

const DEFAULT_SPOTS: Spot[] = [
  { top: "10%", left: "6%", size: 64, rotate: -12, delay: 0 },
  { top: "70%", left: "10%", size: 46, rotate: 18, delay: 0.6 },
  { top: "18%", left: "88%", size: 52, rotate: 8, delay: 0.3 },
  { top: "78%", left: "84%", size: 60, rotate: -20, delay: 0.9 },
  { top: "46%", left: "94%", size: 38, rotate: 25, delay: 0.45 },
];

/** A handful of flat 2D khakhra discs floating around a section. Subtle motion only. */
export default function FloatingChips({ spots = DEFAULT_SPOTS }: { spots?: Spot[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {spots.map((s, i) => (
        <motion.div
          key={i}
          className="absolute drop-shadow-md"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5 + i * 0.6, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Chip className="h-full w-full" rotate={s.rotate} />
        </motion.div>
      ))}
    </div>
  );
}
