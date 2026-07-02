import { ArrowUpRight, Flame } from "lucide-react";
import type { Flavour } from "@/lib/flavours";
import Pack from "./Pack";
import { Sunburst } from "./AbstractShape";
import FloatingChips from "./FloatingChips";
import { IngredientIcon } from "./Ingredients";
import Reveal from "./Reveal";

export default function FlavourSection({ flavour, index }: { flavour: Flavour; index: number }) {
  const flip = index % 2 === 1;

  return (
    <section
      id={index === 0 ? "flavours" : flavour.id}
      className="relative flex min-h-[100svh] items-center overflow-hidden py-20 md:py-24"
      style={{ background: flavour.bg, color: flavour.on }}
    >
      <Sunburst
        color={hexA(flavour.on, 0.06)}
        className="left-1/2 top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2"
      />
      <FloatingChips />

      <div className="relative z-10 mx-auto grid w-full max-w-wide items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        {/* COPY */}
        <div className={`order-2 ${flip ? "md:order-2" : "md:order-1"}`}>
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.22em] opacity-80">
              <span>{String(index + 1).padStart(2, "0")} / 05</span>
              <span className="h-px w-8" style={{ background: flavour.on, opacity: 0.5 }} />
              <span className="uppercase">{flavour.kicker}</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(48px,9vw,130px)] leading-[0.88] lowercase">{flavour.name}</h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-[clamp(17px,2vw,22px)] font-semibold leading-snug">{flavour.line}</p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex items-center gap-5">
              <span className="text-sm font-bold tracking-[0.1em]">100g · ₹{flavour.price}</span>
              <Heat n={flavour.heat} on={flavour.on} />
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-4 flex items-center gap-4">
              {flavour.ingredients.map((ing) => (
                <span key={ing} className="w-8 opacity-90">
                  <IngredientIcon type={ing} className="h-full w-full" />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-pill px-7 py-4 text-base font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: flavour.on, color: flavour.bg }}
            >
              Shop {flavour.name}
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>

        {/* PACK */}
        <Reveal
          delay={0.15}
          y={40}
          className={`relative order-1 mx-auto w-full max-w-sm ${flip ? "md:order-1" : "md:order-2"}`}
        >
          <Pack flavour={flavour} />
        </Reveal>
      </div>
    </section>
  );
}

function Heat({ n, on }: { n: number; on: string }) {
  return (
    <span className="flex items-center gap-1" aria-label={`heat ${n} of 4`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Flame key={i} size={14} fill={i < n ? on : "none"} color={on} opacity={i < n ? 1 : 0.35} />
      ))}
    </span>
  );
}

function hexA(hex: string, a: number) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
