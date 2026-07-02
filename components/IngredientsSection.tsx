import type { Ingredient } from "@/lib/flavours";
import { IngredientIcon } from "./Ingredients";
import Reveal from "./Reveal";

const ITEMS: { type: Ingredient; label: string }[] = [
  { type: "chilli", label: "Red Chilli" },
  { type: "cumin", label: "Toasted Cumin" },
  { type: "mint", label: "Fresh Mint" },
  { type: "methi", label: "Fenugreek Leaf" },
  { type: "garlic", label: "Roasted Garlic" },
  { type: "peppercorn", label: "Black Pepper" },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="relative bg-cream py-24 text-black md:py-36">
      <div className="mx-auto max-w-wide px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.25em] text-masala">WHAT&apos;S INSIDE</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-5 text-[clamp(38px,7vw,100px)] leading-[0.92] lowercase">
              whole grain.
              <br />
              real spice. nothing fake.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.type} delay={i * 0.05} className="flex flex-col items-center text-center">
              <IngredientIcon type={it.type} className="h-20 w-20 md:h-28 md:w-28" />
              <span className="mt-5 text-sm font-bold tracking-[0.04em]">{it.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
