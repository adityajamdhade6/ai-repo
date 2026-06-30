"use client";

import { KHAKHRA_TEXTURE } from "@/lib/texture";

type Props = {
  /** spice-dust colour (flavour accent) */
  accent: string;
  /** optional real photo; falls back to the generated coin */
  image?: string;
  className?: string;
};

/**
 * The roasted coin khakhra — an original CSS/SVG product render.
 * Toasted-wheat base + char blisters + a flavour spice dusting.
 */
export default function Coin({ accent, image, className = "" }: Props) {
  if (image) {
    return (
      <div
        className={`relative aspect-square rounded-full ${className}`}
        style={{
          background: `url("${image}") center/cover no-repeat`,
          boxShadow:
            "inset 0 0 0 3px rgba(255,255,255,.22), 0 30px 50px rgba(20,12,4,.4)",
        }}
        aria-hidden
      />
    );
  }

  return (
    <div className={`relative aspect-square rounded-full ${className}`} aria-hidden>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: [
            `radial-gradient(ellipse at 62% 66%, ${hexA(accent, 0.6)}, transparent 56%)`,
            KHAKHRA_TEXTURE,
            "radial-gradient(circle at 50% 50%, transparent 56%, rgba(46,24,8,.42) 100%)",
            "radial-gradient(circle at 38% 30%, #f1ddb0 0%, #d9b074 34%, #a8703a 64%, #6f4420 86%, #4d2e14 100%)",
          ].join(","),
          backgroundSize: "auto, 120% 120%, auto, auto",
          backgroundBlendMode: "soft-light, normal, normal, normal",
          boxShadow:
            "inset 0 0 0 2px rgba(70,40,16,.35), inset 0 -10px 26px rgba(50,28,10,.45), inset 0 8px 22px rgba(255,238,200,.32), 0 30px 50px rgba(20,12,4,.32)",
        }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#3d2410" strokeOpacity="0.45" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#3d2410" strokeOpacity="0.28" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="2" fill="#3d2410" fillOpacity="0.45" />
      </svg>
    </div>
  );
}

/** hex (#rrggbb) + alpha -> rgba() */
function hexA(hex: string, a: number) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
