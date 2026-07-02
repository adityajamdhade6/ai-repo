import type { Ingredient } from "@/lib/flavours";

/** Flat 2D poster-style ingredient marks. Original art, no copied illustrations. */
export function IngredientIcon({ type, className = "" }: { type: Ingredient; className?: string }) {
  const stroke = { stroke: "#111111", strokeWidth: 2.5 } as const;
  switch (type) {
    case "chilli":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path d="M14 10c2 5 1 9-2 13-4 6-3 13 4 15 8 2 14-4 15-12 1-7-3-10-7-9-3 1-3-3-1-5" fill="#FF1D25" {...stroke} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 10c-1-3 1-5 4-4" fill="#0B9D3A" {...stroke} strokeLinecap="round" />
        </svg>
      );
    case "coriander":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path d="M24 42V20" {...stroke} strokeLinecap="round" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path d={`M24 ${30 - i * 8}c-6-2-11 1-13 6 6 1 11-1 13-6Z`} fill="#0B9D3A" stroke="#111111" strokeWidth="2" />
              <path d={`M24 ${30 - i * 8}c6-2 11 1 13 6-6 1-11-1-13-6Z`} fill="#3CBE60" stroke="#111111" strokeWidth="2" />
            </g>
          ))}
        </svg>
      );
    case "methi":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path d="M24 42V20" {...stroke} strokeLinecap="round" />
          {[0, 1].map((i) => (
            <g key={i}>
              <path d={`M24 ${28 - i * 10}c-6-2-11 1-13 6 6 1 11-1 13-6Z`} fill="#0B9D3A" stroke="#111111" strokeWidth="2" />
              <path d={`M24 ${28 - i * 10}c6-2 11 1 13 6-6 1-11-1-13-6Z`} fill="#0B9D3A" stroke="#111111" strokeWidth="2" />
            </g>
          ))}
        </svg>
      );
    case "mint":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path d="M24 40C14 34 10 24 16 14c4 8 10 6 14 12 3 5 0 11-6 14Z" fill="#3CBE60" stroke="#111111" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 40c0-10-3-18-8-26" stroke="#111111" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "puri":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="16" fill="#E9C88A" stroke="#111111" strokeWidth="2.5" />
          <circle cx="24" cy="20" r="4.5" fill="#111111" opacity=".18" />
          <circle cx="18" cy="28" r="2" fill="#111111" opacity=".18" />
          <circle cx="30" cy="29" r="1.6" fill="#111111" opacity=".18" />
        </svg>
      );
    case "lime":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="15" fill="#9CC04A" stroke="#111111" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="10" fill="#D8ED9E" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d="M24 24L24 14" stroke="#9CC04A" strokeWidth="1.5" transform={`rotate(${i * 45} 24 24)`} />
          ))}
        </svg>
      );
    case "cumin":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          {[
            [14, 18, 20],
            [30, 16, -15],
            [22, 30, 35],
            [33, 32, 10],
            [16, 33, -25],
          ].map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="2.4" ry="6.5" fill="#8a5a2a" stroke="#111111" strokeWidth="1" transform={`rotate(${r} ${x} ${y})`} />
          ))}
        </svg>
      );
    case "peppercorn":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          {[
            [18, 20, 6],
            [30, 18, 5],
            [24, 30, 7],
            [33, 30, 4.5],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#2b2018" stroke="#111111" strokeWidth="1" />
          ))}
        </svg>
      );
    case "garlic":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path d="M24 8c5 6 9 14 8 22-1 7-15 7-16 0-1-8 3-16 8-22Z" fill="#F3ECDD" stroke="#111111" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 10c0 18 0 22 0 30M18 16c-2 8-2 14 0 22M30 16c2 8 2 14 0 22" stroke="#cdbfa3" strokeWidth="1.5" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}
