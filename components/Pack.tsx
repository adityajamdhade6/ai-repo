"use client";

import Coin from "./Coin";
import type { Flavour } from "@/lib/flavours";

/**
 * An original stand-up pouch render for a flavour — the single product hero
 * of each flavour section. Generated entirely from colour + type + the coin;
 * no copied packaging. Kept deliberately calm: one soft drop, a faint sheen.
 */
export default function Pack({
  flavour,
  className = "",
}: {
  flavour: Flavour;
  className?: string;
}) {
  const { name, index, accent, bg, wave, on, image } = flavour;

  return (
    <div
      className={`relative aspect-[3/4.1] w-full rounded-[30px] ${className}`}
      style={{
        background: `linear-gradient(168deg, ${tint(bg, 0.12)}, ${bg} 46%, ${wave})`,
        boxShadow: "0 40px 70px -34px rgba(20,12,4,.5)",
      }}
    >
      {/* crimped top seal */}
      <div className="absolute inset-x-0 top-0 h-[7%] overflow-hidden rounded-t-[30px]">
        <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="h-full w-full">
          <rect width="120" height="10" fill="rgba(0,0,0,.16)" />
          <g fill={tint(bg, 0.08)}>
            {Array.from({ length: 30 }).map((_, i) => (
              <polygon key={i} points={`${i * 4},10 ${i * 4 + 2},6 ${i * 4 + 4},10`} />
            ))}
          </g>
        </svg>
      </div>

      {/* faint single sheen — not glassmorphism, just a soft light */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px]"
        style={{
          background:
            "linear-gradient(108deg, rgba(255,255,255,.14) 0%, transparent 34%)",
        }}
      />

      <div
        className="relative flex h-full flex-col items-center px-[9%] pb-[9%] pt-[13%]"
        style={{ color: on }}
      >
        <div className="flex w-full items-center justify-between font-mono text-[clamp(8px,0.95vw,11px)] tracking-[0.3em] opacity-75">
          <span>INHAUS</span>
          <span>{index}</span>
        </div>

        <h3 className="display mt-[7%] text-center text-[clamp(24px,3.4vw,42px)] leading-[0.92]">
          {name}
        </h3>
        <span className="mt-2 font-mono text-[clamp(8px,1vw,11px)] tracking-[0.34em] opacity-70">
          COIN KHAKHRA
        </span>

        {/* product window */}
        <div className="relative mt-[7%] flex w-[82%] flex-1 items-center justify-center">
          <div
            className="absolute h-[92%] w-[92%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,.14), transparent 64%)",
            }}
          />
          <Coin accent={accent} image={image} className="w-[90%]" />
        </div>

        <div className="mt-[7%] flex w-full items-center justify-between font-mono text-[clamp(8px,0.95vw,11px)] tracking-[0.22em] opacity-75">
          <span>NET 120g</span>
          <span>ROASTED IN-HAUS</span>
        </div>
      </div>
    </div>
  );
}

/** lighten a hex toward white by t (0–1) */
function tint(hex: string, t: number) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const m = (v: number) => Math.round(v + (255 - v) * t);
  return `rgb(${m(r)},${m(g)},${m(b)})`;
}
