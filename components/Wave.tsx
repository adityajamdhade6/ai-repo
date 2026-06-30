"use client";

/** Decorative wavy background lines — original, colour-configurable. */
export default function Wave({ color, className = "", opacity = 0.5 }: { color: string; className?: string; opacity?: number }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ opacity }}
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 120 + i * 80;
        return (
          <path
            key={i}
            d={`M-50 ${y} C 200 ${y - 60}, 400 ${y + 60}, 650 ${y} S 1100 ${y - 60}, 1250 ${y}`}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeOpacity={0.55}
          />
        );
      })}
    </svg>
  );
}

/** Big radiating sunburst used behind product renders. */
export function Sunburst({ color, className = "" }: { color: string; className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
      style={{
        background: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 8deg, ${color} 8deg 16deg)`,
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 6%, rgba(0,0,0,.8) 30%, transparent 76%)",
        maskImage: "radial-gradient(circle at 50% 50%, #000 6%, rgba(0,0,0,.8) 30%, transparent 76%)",
      }}
    />
  );
}
