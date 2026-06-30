"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Coin from "./Coin";
import Reveal from "./Reveal";

/**
 * The story beat. Calm paper, a single large headline, two lines of copy,
 * and one slowly drifting coin. No grid, no cards, no icons.
 */
export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-paper px-6 py-28 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-wide items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="font-mono text-[11px] tracking-label text-ink/45">
              (THE MAKING)
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-7 text-ink text-[clamp(52px,9vw,148px)]">
              Roasted,
              <br />
              never fried.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-9 max-w-md text-[16px] leading-relaxed text-ink/65">
              Stone-ground whole grain, rolled paper-thin and slow-roasted in
              small batches. One honest coin, made the long way.
            </p>
          </Reveal>
        </div>

        <motion.div style={{ y }} className="flex justify-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[62vw] max-w-[420px] md:w-[34vw]"
          >
            <Coin accent="#A9803E" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
