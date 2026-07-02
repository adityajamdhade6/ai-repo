import Reveal from "./Reveal";

const STATEMENTS = [
  { text: "BAKED.", align: "text-left" },
  { text: "NOT FRIED.", align: "text-right" },
  { text: "CRUNCHY.", align: "text-left" },
  { text: "LIGHT.", align: "text-right" },
  { text: "ANYTIME.", align: "text-left" },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-black py-24 text-cream md:py-32">
      <div className="mx-auto max-w-wide px-5 md:px-10">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.25em] text-masala">WHY COIN KHAKHRA</span>
        </Reveal>

        <div className="mt-8 flex flex-col">
          {STATEMENTS.map((s, i) => (
            <Reveal key={s.text} delay={i * 0.06} className={s.align}>
              <span className="display block text-[clamp(48px,12vw,180px)] leading-[0.86] lowercase">
                {s.text.toLowerCase()}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
