import Reveal from "./Reveal";

/**
 * The breath between flavours. A single line of big, quiet type on bone
 * paper — lots of empty space, no product, no buttons. Keeps the rhythm
 * bright → quiet → bright.
 */
export default function Interstitial({ text }: { text: string }) {
  return (
    <section className="flex min-h-[64svh] items-center justify-center bg-bone px-6 py-28 text-center">
      <Reveal>
        <p className="display max-w-[16ch] text-[clamp(36px,7vw,104px)] text-ink/85">
          {text}
        </p>
      </Reveal>
    </section>
  );
}
