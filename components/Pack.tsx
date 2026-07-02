import Chip from "./Chip";
import type { Flavour } from "@/lib/flavours";

/**
 * Original flat 2D poster-style stand-up pouch render.
 * Solid fill, thin black outline, no gradients or glossy shading.
 */
export default function Pack({ flavour, className = "" }: { flavour: Flavour; className?: string }) {
  const { name, on, image } = flavour;

  return (
    <div
      className={`relative aspect-[3/4] w-full rounded-[22px] border-[3px] border-black drop-shadow-[8px_10px_0_rgba(17,17,17,0.18)] ${className}`}
      style={{ background: "#F7F3EB", color: on }}
    >
      {/* top seal — flat zigzag */}
      <div className="absolute inset-x-0 top-0 h-[6%] overflow-hidden rounded-t-[19px] border-b-[3px] border-black">
        <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="h-full w-full">
          <rect width="120" height="10" fill="#111111" />
          {Array.from({ length: 24 }).map((_, i) => (
            <polygon key={i} points={`${i * 5},10 ${i * 5 + 2.5},4 ${i * 5 + 5},10`} fill="#F7F3EB" />
          ))}
        </svg>
      </div>

      <div className="relative flex h-full flex-col items-center px-[8%] pb-[7%] pt-[13%] text-black">
        <span className="text-[clamp(9px,1vw,11px)] font-bold tracking-[0.32em]">COIN KHAKHRA</span>
        <h3 className="display mt-2 text-center text-[clamp(20px,2.8vw,34px)] leading-none lowercase">{name}</h3>

        {/* product window */}
        <div
          className="relative mt-[7%] flex w-[74%] flex-1 items-center justify-center rounded-full border-[3px] border-black"
          style={{ background: flavour.bg }}
        >
          {image ? (
            <div
              className="h-[80%] w-[80%] rounded-full border-[3px] border-black"
              style={{ background: `url("${image}") center/cover no-repeat` }}
              aria-hidden
            />
          ) : (
            <Chip className="h-[80%] w-[80%]" />
          )}
        </div>

        <div className="mt-[6%] flex w-full items-center justify-between text-[clamp(8px,0.85vw,10px)] font-bold tracking-[0.14em]">
          <span>NET 100g</span>
          <span>BAKED, NOT FRIED</span>
        </div>
      </div>
    </div>
  );
}
