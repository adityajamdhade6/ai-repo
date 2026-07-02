import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import FloatingChips from "./FloatingChips";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 text-cream md:py-40" style={{ background: "#FF1D25" }}>
      <FloatingChips
        spots={[
          { top: "14%", left: "8%", size: 50, rotate: -10, delay: 0 },
          { top: "72%", left: "14%", size: 40, rotate: 15, delay: 0.5 },
          { top: "20%", left: "86%", size: 44, rotate: 6, delay: 0.3 },
          { top: "76%", left: "90%", size: 56, rotate: -18, delay: 0.7 },
        ]}
      />
      <div className="relative z-10 mx-auto max-w-wide px-5 text-center md:px-10">
        <Reveal>
          <h2 className="display text-[clamp(42px,10vw,150px)] leading-[0.9] lowercase balance">
            ready to crunch different?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="#flavours"
            className="group mt-10 inline-flex items-center gap-2 rounded-pill bg-cream px-9 py-5 text-lg font-bold text-black transition-transform hover:-translate-y-0.5"
          >
            Shop Now
            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
