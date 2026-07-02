/** Flat, tone-on-tone editorial-print background shapes. No gradients, no 3D. */

export function Sunburst({ color, className = "" }: { color: string; className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
      style={{
        background: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 9deg, ${color} 9deg 18deg)`,
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 4%, rgba(0,0,0,.7) 34%, transparent 78%)",
        maskImage: "radial-gradient(circle at 50% 50%, #000 4%, rgba(0,0,0,.7) 34%, transparent 78%)",
      }}
    />
  );
}

export function Blob({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`} aria-hidden>
      <path
        d="M45.7,-58.4C58.5,-49.6,67.3,-33.9,71.4,-16.9C75.5,0.1,74.9,18.4,67.1,32.9C59.3,47.4,44.3,58.1,27.7,64.7C11.1,71.3,-7.1,73.8,-23.6,68.9C-40.1,64,-54.9,51.7,-63.2,36.1C-71.5,20.5,-73.3,1.6,-69.1,-15.6C-64.9,-32.8,-54.7,-48.3,-40.9,-57.1C-27.1,-65.9,-9.7,-68,-16,-64.7"
        fill={color}
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Waves({ color, className = "", opacity = 0.5 }: { color: string; className?: string; opacity?: number }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ opacity }}
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 120 + i * 90;
        return (
          <path
            key={i}
            d={`M-50 ${y} C 200 ${y - 60}, 400 ${y + 60}, 650 ${y} S 1100 ${y - 60}, 1250 ${y}`}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
          />
        );
      })}
    </svg>
  );
}

export function RadialRings({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`} aria-hidden>
      {[92, 74, 56, 38, 20].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth="2" />
      ))}
    </svg>
  );
}
