"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    k: "01",
    title: "Baked, never fried",
    body: "Slow-roasted at 180°C until the disc crackles. No fryer, no palm oil, no greasy aftertaste — just the grain.",
  },
  {
    k: "02",
    title: "One kitchen, one roast",
    body: "Rolled, pressed and roasted under a single roof, then sealed within the hour. In-haus is the only standard we cook to.",
  },
  {
    k: "03",
    title: "Engineered to 2mm",
    body: "Every coin is the same Ø38mm, 2mm-thin disc. Precision you can hear in the snap and feel in the bite.",
  },
  {
    k: "04",
    title: "Roasted to order",
    body: "We bake for the order, not the warehouse. What ships to you left the roast days ago, not months.",
  },
];

export default function WhyInhaus() {
  return (
    <section id="why" className="relative bg-bone px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-wide">
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-xs tracking-[0.22em] text-masala">WHY INHAUS</span>
          <h2 className="display mt-5 text-[clamp(38px,6.5vw,90px)] leading-[0.95]">
            A snack, taken apart and built back better.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <motion.article
              key={c.k}
              className="group rounded-3xl border border-ink/10 bg-white/40 p-8 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: (i % 2) * 0.08 }}
            >
              <span className="font-mono text-sm text-masala">{c.k}</span>
              <h3 className="mt-5 text-[clamp(24px,3vw,36px)] font-semibold leading-tight">{c.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
