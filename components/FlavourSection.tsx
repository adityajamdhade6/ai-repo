"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Pack from "./Pack";
import type { Flavour } from "@/lib/flavours";

/**
 * One full-screen poster per flavour. A single colour world (bg + text +
 * accent), one huge headline, one short line, one CTA, and one large pack
 * render on a gentle parallax. Product side alternates with the index.
 */
export default function FlavourSection({
  flavour,
  index,
}: {
  flavour: Flavour;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const productLeft = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -70]);

  return (
    <section
      ref={ref}
      id={index === 0 ? "flavours" : flavour.id}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-24 md:px-12"
      style={{ background: flavour.bg, color: flavour.on }}
    >
      <div
        className={`mx-auto grid w-full max-w-wide items-center gap-12 md:grid-cols-2 md:gap-16 ${
          productLeft ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* copy */}
        <div className={productLeft ? "md:pl-6" : "md:pr-6"}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 font-mono text-[11px] tracking-label"
            style={{ color: flavour.on }}
          >
            <span>{flavour.index}</span>
            <span className="h-px w-10" style={{ background: flavour.accent }} />
            <span className="opacity-70">{flavour.kicker}</span>
          </motion.div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="display mt-7 text-[clamp(60px,11vw,168px)]"
          >
            {flavour.headline[0]}
            <br />
            <span style={{ color: flavour.accent }}>{flavour.headline[1]}</span>
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xs text-[16px] leading-snug"
            style={{ color: flavour.on, opacity: 0.78 }}
          >
            {flavour.line}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <a
              href="#flavours"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: flavour.on, color: flavour.bg }}
            >
              Add to box
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* product */}
        <motion.div style={{ y }} className="flex justify-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[68vw] max-w-[380px] md:w-[40vw]"
          >
            <Pack flavour={flavour} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
