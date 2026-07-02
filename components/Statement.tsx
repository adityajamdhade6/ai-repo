import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "#FFE600" }}>
      <div className="mx-auto max-w-wide px-5 text-center md:px-10">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.25em] text-black/60">02 / THE POINT</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-[clamp(38px,9vw,140px)] leading-[0.9] text-black lowercase balance">
            not your regular khakhra.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
