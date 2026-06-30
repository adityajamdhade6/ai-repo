"use client";

import { motion } from "framer-motion";
import { IngredientIcon } from "./Ingredients";
import type { Ingredient } from "@/lib/flavours";

const ease = [0.16, 1, 0.3, 1] as const;

const ROWS: { label: string; value: string; icon?: Ingredient }[] = [
  { label: "BASE", value: "100% whole wheat", icon: "coriander" },
  { label: "OIL", value: "Cold-pressed groundnut · 0% palm" },
  { label: "SPICE", value: "Whole, roasted, ground in-haus", icon: "cumin" },
  { label: "METHOD", value: "Roasted at 180°C, never fried" },
  { label: "PRESERVATIVES", value: "None. Sealed, not stabilised." },
  { label: "PER TIN", value: "48 coins · 120g · 480 kcal" },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="relative overflow-hidden bg-ink px-5 py-28 text-bone md:px-10 md:py-36">
      <div className="mx-auto grid max-w-wide gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <span className="font-mono text-xs tracking-[0.22em] text-masala">WHAT&apos;S INSIDE</span>
          <h2 className="display mt-5 text-[clamp(40px,7vw,104px)] leading-[0.92]">
            No marketing.
            <br />
            Just the sheet.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-bone/65">
            Five flavours, one honest recipe underneath. If it isn&apos;t on this list, it isn&apos;t in the coin.
          </p>
          <div className="mt-10 flex gap-4">
            {(["chilli", "mint", "cumin", "methi"] as Ingredient[]).map((t) => (
              <span key={t} className="w-10 opacity-90">
                <IngredientIcon type={t} className="h-full w-full" />
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-bone/20">
          {ROWS.map((r, i) => (
            <motion.div
              key={r.label}
              className="flex items-baseline justify-between gap-6 border-b border-bone/15 py-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            >
              <span className="font-mono text-xs tracking-[0.16em] text-bone/55">{r.label}</span>
              <span className="text-right text-[clamp(16px,2vw,24px)] font-medium">{r.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
