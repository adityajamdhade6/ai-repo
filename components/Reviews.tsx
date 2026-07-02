import { Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  { q: "I forgot it was healthy. That's the whole review.", a: "Ananya R.", f: "Magic Masala" },
  { q: "Schezwan is criminal. The pack is gone in a day.", a: "Karthik M.", f: "Schezwan" },
  { q: "Pani Puri in a khakhra shouldn't work. It absolutely does.", a: "Dev S.", f: "Pani Puri" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 text-black md:py-32">
      <div className="mx-auto max-w-wide px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end gap-6">
            <span className="display text-[clamp(56px,9vw,100px)] leading-none text-masala">4.9</span>
            <div className="pb-2">
              <div className="flex gap-1 text-masala">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="mt-1 block text-xs font-bold tracking-[0.15em] text-black/55">2,140 VERIFIED PACKS SOLD</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.a} delay={i * 0.08} className="border-t-[3px] border-black pt-6">
              <blockquote className="text-[clamp(20px,2.6vw,28px)] font-bold leading-snug">&ldquo;{r.q}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-xs font-bold tracking-[0.1em] text-black/60">
                <span>{r.a}</span>
                <span>{r.f}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
