"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Coin from "./Coin";
import { IngredientIcon } from "./Ingredients";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.from(".hero-line span", {
          yPercent: 120,
          duration: 1,
          ease: "expo.out",
          stagger: 0.08,
          delay: 0.15,
        });
        gsap.from(".hero-coin", { scale: 0.6, opacity: 0, duration: 1.2, ease: "expo.out", delay: 0.1 });
        gsap.from(".hero-fade", { y: 24, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.5, stagger: 0.08 });

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(coinRef.current, {
          yPercent: 38,
          rotate: 26,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 md:px-10">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21,19,14,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(21,19,14,.05) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 42%, #000, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 42%, #000, transparent 78%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-wide flex-1 flex-col">
        {/* meta row */}
        <div className="hero-fade flex items-center justify-between pt-28 font-mono text-[11px] tracking-[0.18em] text-ink/55 md:pt-32">
          <span>EST. IN-HAUS</span>
          <span className="hidden md:block opacity-70">Ø38·0MM / 2·0MM / 0% PALM</span>
          <span>FIVE FLAVOURS</span>
        </div>

        {/* centre */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6 text-center">
          <div
            ref={coinRef}
            className="hero-coin relative"
            style={{ width: "clamp(190px,30vw,360px)" }}
          >
            {/* glow */}
            <div
              className="absolute -inset-10 -z-10 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(232,97,44,.42), transparent 62%)" }}
            />
            <Coin accent="#E8612C" />
            {/* a couple of floating ingredients */}
            <div className="absolute -left-10 top-4 hidden w-12 md:block animate-pulse"><IngredientIcon type="chilli" className="h-full w-full" /></div>
            <div className="absolute -right-8 bottom-6 hidden w-10 md:block"><IngredientIcon type="cumin" className="h-full w-full" /></div>
          </div>

          <h1 className="display text-[clamp(44px,11vw,150px)] leading-[0.86] tracking-[-0.01em]">
            <span className="hero-line block overflow-hidden"><span className="block">The Coin</span></span>
            <span className="hero-line block overflow-hidden"><span className="block text-masala">Khakhra,</span></span>
            <span className="hero-line block overflow-hidden"><span className="block">Re-engineered.</span></span>
          </h1>

          <p className="hero-fade max-w-xl text-[clamp(15px,1.8vw,19px)] leading-relaxed text-ink/70">
            Whole-grain discs, slow-roasted at 180°—never fried. Five flavours, each one designed, baked in our house.
          </p>

          <div className="hero-fade flex flex-wrap items-center justify-center gap-3">
            <a href="#flavours" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-medium text-bone transition-transform hover:-translate-y-0.5">
              Meet the five
              <svg viewBox="0 0 24 24" width="16" height="16" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </a>
            <a href="#why" className="rounded-full border border-ink/25 px-7 py-4 text-base font-medium transition-colors hover:bg-ink hover:text-bone">
              Why in-haus?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
