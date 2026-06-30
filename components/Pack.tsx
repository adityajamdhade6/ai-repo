"use client";

import Coin from "./Coin";
import type { Flavour } from "@/lib/flavours";

/**
 * Original stand-up pouch product render for a flavour.
 * No copied packaging — generated entirely from colour + type + the coin.
 */
export default function Pack({ flavour, className = "" }: { flavour: Flavour; className?: string }) {
  const { name, accent, bg, wave, image } = flavour;
  const onPack = "#FFF7EE";

  return (
    <div
      className={`relative aspect-[3/4] w-full rounded-[26px] ${className}`}
      style={{
        background: `linear-gradient(160deg, ${tint(accent, 0.18)}, ${bg} 42%, ${wave})`,
        boxShadow: `0 50px 90px -30px rgba(20,12,4,.55), inset 0 2px 0 rgba(255,255,255,.18), inset 0 0 0 1px rgba(0,0,0,.08)`,
      }}
    >
      {/* top seal */}
      <div className="absolute inset-x-0 top-0 h-[8%] overflow-hidden rounded-t-[26px]">
        <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="h-full w-full">
          <rect width="120" height="10" fill="rgba(0,0,0,.18)" />
          <g fill={tint(bg, 0.1)}>
            {Array.from({ length: 30 }).map((_, i) => (
              <polygon key={i} points={`${i * 4},10 ${i * 4 + 2},6 ${i * 4 + 4},10`} />
            ))}
          </g>
        </svg>
      </div>

      {/* glossy sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[26px]"
        style={{ background: "linear-gradient(105deg, rgba(255,255,255,.22) 0%, transparent 30%, transparent 70%, rgba(0,0,0,.12) 100%)" }}
      />

      <div className="relative flex h-full flex-col items-center px-[8%] pb-[8%] pt-[14%]" style={{ color: onPack }}>
        <span className="font-mono text-[clamp(9px,1.1vw,12px)] tracking-[0.32em]">INHAUS</span>
        <h3 className="display mt-1 text-center text-[clamp(22px,3.2vw,40px)] leading-none">{name}</h3>
        <span className="mt-1 font-mono text-[clamp(8px,1vw,11px)] tracking-[0.3em] opacity-80">COIN KHAKHRA</span>

        {/* product window */}
        <div className="relative mt-[6%] flex w-[78%] flex-1 items-center justify-center">
          <div
            className="absolute h-[88%] w-[88%] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,.16), transparent 62%)" }}
          />
          <Coin accent={accent} image={image} className="w-[88%] drop-shadow-2xl" />
        </div>

        <div className="mt-[6%] flex w-full items-center justify-between font-mono text-[clamp(8px,0.95vw,11px)] tracking-[0.18em] opacity-85">
          <span>NET 120g</span>
          <span>ROASTED IN-HAUS</span>
        </div>
      </div>
    </div>
  );
}

/** lighten a hex toward white by t (0-1) */
function tint(hex: string, t: number) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const m = (v: number) => Math.round(v + (255 - v) * t);
  return `rgb(${m(r)},${m(g)},${m(b)})`;
}
