"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Coin from "./Coin";

/**
 * The opening statement. Quiet bone paper, one huge headline, one beautifully
 * lit coin drifting on a gentle parallax, a single CTA. Mostly empty space.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 26]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-bone px-6 pb-10 pt-28 md:px-12 md:pb-14"
    >
      {/* the coin — the single hero object */}
      <motion.div
        style={{ y, rotate }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[78vw] max-w-[560px] -translate-x-1/2 -translate-y-[46%] md:w-[42vw]"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Coin accent="#E8612C" />
        </motion.div>
      </motion.div>

      {/* top label */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex items-center justify-between font-mono text-[11px] tracking-label text-ink/55"
      >
        <span>COIN KHAKHRA</span>
        <span className="hidden sm:block">EST. IN-HAUS</span>
        <span>FIVE FLAVOURS</span>
      </motion.div>

      {/* headline + CTA */}
      <div className="relative z-10">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display text-ink text-[clamp(72px,17vw,260px)]"
        >
          A new shape
          <br />
          of crunch.
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xs text-[15px] leading-snug text-ink/65">
            Whole-grain, slow-roasted, never fried.
          </p>
          <a
            href="#flavours"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-bone transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore flavours
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
