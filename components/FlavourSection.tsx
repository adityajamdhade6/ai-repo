"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Flavour } from "@/lib/flavours";
import Pack from "./Pack";
import Wave, { Sunburst } from "./Wave";
import { FloatingIngredients } from "./Ingredients";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FlavourSection({ flavour, index }: { flavour: Flavour; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const flip = index % 2 === 1;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const packY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      id={index === 0 ? "flavours" : flavour.id}
      data-flavour={flavour.id}
      className="relative flex min-h-[100svh] items-center overflow-hidden py-24"
      style={{ background: flavour.bg, color: flavour.on }}
    >
      <Wave color={flavour.wave} opacity={0.4} />
      <FloatingIngredients items={flavour.ingredients} />

      <div className="relative z-10 mx-auto grid w-full max-w-wide items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        {/* COPY */}
        <motion.div
          className={`order-2 ${flip ? "md:order-2" : "md:order-1"}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.22em] opacity-80">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8" style={{ background: flavour.on, opacity: 0.5 }} />
            <span>{flavour.kicker.toUpperCase()}</span>
          </div>

          <h2 className="display text-[clamp(52px,9vw,140px)] leading-[0.9]">{flavour.name}</h2>

          <p className="mt-6 max-w-md text-[clamp(18px,2.4vw,26px)] font-medium leading-snug">{flavour.line}</p>
          <p className="mt-4 max-w-md text-[clamp(14px,1.6vw,17px)] leading-relaxed opacity-80">{flavour.blurb}</p>

          <div className="mt-7 flex items-center gap-5">
            <span className="font-mono text-sm tracking-[0.12em] opacity-85">120g · ₹{flavour.price}</span>
            <Heat n={flavour.heat} on={flavour.on} />
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: flavour.on, color: flavour.bg }}
          >
            Shop {flavour.name}
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
          </a>
        </motion.div>

        {/* PACK */}
        <motion.div
          className={`relative order-1 mx-auto w-full max-w-sm ${flip ? "md:order-1" : "md:order-2"}`}
          style={{ y: packY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <motion.div className="absolute -inset-12 -z-10" style={{ rotate: sunRotate }}>
            <Sunburst color={flavour.accent} className="inset-0 h-full w-full" />
          </motion.div>
          <Pack flavour={flavour} />
        </motion.div>
      </div>
    </section>
  );
}

function Heat({ n, on }: { n: number; on: string }) {
  return (
    <span className="flex gap-1" aria-label={`heat ${n} of 4`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className="h-4 w-2 rounded-sm"
          style={{ background: on, opacity: i < n ? 0.95 : 0.28 }}
        />
      ))}
    </span>
  );
}
