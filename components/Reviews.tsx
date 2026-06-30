"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  { q: "I forgot it was healthy. That's the whole review.", a: "Ananya R.", f: "Magic Masala" },
  { q: "Schezwan is criminal. The tin is gone in a day.", a: "Karthik M.", f: "Schezwan" },
  { q: "Finally a khakhra that looks like it belongs on my desk.", a: "Priya N.", f: "Zeera" },
  { q: "Pani Puri in a coin shouldn't work. It absolutely does.", a: "Dev S.", f: "Pani Puri" },
  { q: "Sent a box as a gift, got three orders from one office.", a: "Meera T.", f: "Methi" },
];

export default function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="reviews" className="overflow-hidden bg-bone py-28 md:py-36">
      <div className="mx-auto mb-12 flex max-w-wide items-center gap-5 px-5 md:px-10">
        <span className="display text-[clamp(48px,8vw,86px)] leading-none text-masala">4.9</span>
        <div>
          <div className="text-xl tracking-[3px] text-masala">★★★★★</div>
          <span className="font-mono text-xs text-ink/55">2,140 verified tins</span>
        </div>
      </div>

      <motion.div
        className="flex w-max gap-5 px-5 md:px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {loop.map((r, i) => (
          <figure
            key={i}
            className="w-[78vw] shrink-0 rounded-3xl border border-ink/10 bg-white/50 p-8 sm:w-[400px]"
          >
            <blockquote className="text-[clamp(18px,2.4vw,24px)] font-medium leading-snug">“{r.q}”</blockquote>
            <figcaption className="mt-6 flex items-center justify-between font-mono text-xs text-ink/55">
              <span>— {r.a}</span>
              <span>{r.f}</span>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
