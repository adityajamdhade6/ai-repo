"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const QUOTES = [
  { q: "I forgot it was healthy. That's the whole review.", a: "Ananya R." },
  { q: "The Schezwan tin is gone in a day, every time.", a: "Karthik M." },
  { q: "Finally a khakhra that belongs on my desk.", a: "Priya N." },
  { q: "Pani Puri in a coin shouldn't work. It does.", a: "Dev S." },
];

/**
 * One quote at a time, set large. A quiet dark stage, a single rotating
 * pull-quote — no card grids, no marquees.
 */
export default function Reviews() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % QUOTES.length), 4600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section
      id="reviews"
      className="flex min-h-[92svh] items-center bg-ink px-6 py-32 text-bone md:px-12"
    >
      <div className="mx-auto w-full max-w-wide">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-label text-bone/45">
            <span>★★★★★</span>
            <span>4.9 — 2,140 VERIFIED TINS</span>
          </div>
        </Reveal>

        <div className="relative mt-12 min-h-[42svh] md:min-h-[38svh]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="display max-w-[18ch] text-[clamp(34px,6.5vw,104px)]">
                “{QUOTES[i].q}”
              </blockquote>
              <figcaption className="mt-10 font-mono text-[12px] tracking-[0.2em] text-bone/55">
                — {QUOTES[i].a}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
