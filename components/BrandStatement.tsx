import Reveal from "./Reveal";

/**
 * A quiet, dark poster between the hero and the first flavour. One idea,
 * set big. No product, no buttons — just the brand's promise and air.
 */
export default function BrandStatement() {
  return (
    <section className="flex min-h-[88svh] items-center bg-ink px-6 py-32 text-bone md:px-12">
      <div className="mx-auto w-full max-w-wide">
        <Reveal>
          <span className="font-mono text-[11px] tracking-label text-bone/45">
            (THE IDEA)
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-8 max-w-[14ch] text-[clamp(40px,8vw,124px)]">
            Five flavours. One honest crunch.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-md text-[16px] leading-relaxed text-bone/60">
            We took the everyday khakhra and made it round, thin and properly
            roasted. Nothing fried, nothing fake.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
