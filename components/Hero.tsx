"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Pack from "./Pack";
import FloatingChips from "./FloatingChips";
import { Sunburst } from "./AbstractShape";
import { FLAVOURS } from "@/lib/flavours";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[76px]"
      style={{ background: "#FF1E63" }}
    >
      <Sunburst color="rgba(17,17,17,0.06)" className="left-1/2 top-1/2 h-[140vh] w-[140vh] -translate-x-1/2 -translate-y-1/2" />
      <FloatingChips />

      <div className="relative z-10 mx-auto flex w-full max-w-wide flex-1 flex-col px-5 md:px-10">
        <div className="flex items-center justify-between pt-8 text-[11px] font-bold tracking-[0.2em] text-black/70 md:pt-10">
          <span>EST. INDIA</span>
          <span className="hidden md:block">BAKED, NOT FRIED</span>
          <span>FIVE FLAVOURS</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10 text-center">
          <motion.h1
            className="display text-[clamp(52px,13vw,190px)] leading-[0.84] tracking-[-0.01em] text-black lowercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            crunch
            <br />
            different.
          </motion.h1>

          <motion.p
            className="max-w-lg text-[clamp(16px,2vw,20px)] font-semibold leading-snug text-black/80"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            Not your regular khakhra. Whole-grain discs, slow-roasted, never fried — five bold flavours, zero boring bites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            <a
              href="#flavours"
              className="group inline-flex items-center gap-2 rounded-pill bg-black px-8 py-4 text-base font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* five packs cluster */}
        <motion.div
          className="relative mx-auto grid w-full max-w-3xl grid-cols-5 items-end gap-3 pb-10 md:gap-5 md:pb-14"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
        >
          {FLAVOURS.map((f, i) => {
            const rotations = [-6, -3, 0, 3, 6];
            const lifts = ["mt-8", "mt-3", "mt-0", "mt-3", "mt-8"];
            return (
              <div
                key={f.id}
                className={`${lifts[i]} transition-transform duration-300 hover:-translate-y-2`}
                style={{ transform: `rotate(${rotations[i]}deg)` }}
              >
                <Pack flavour={f} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
