"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="bg-cream px-5 pt-20 text-black md:px-10">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-12 border-t-[3px] border-black pb-16 pt-12 md:grid-cols-2 md:gap-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <span className="text-xs font-bold tracking-[0.2em] text-masala">FIRST-BATCH ACCESS</span>
            <h2 className="display mt-4 text-[clamp(28px,4.5vw,54px)] leading-[0.95] lowercase">
              get the next roast first.
            </h2>
            <div className="mt-8 flex max-w-md items-center gap-3 border-b-[3px] border-black pb-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent text-lg outline-none placeholder:text-black/35"
              />
              <button
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-black transition-colors hover:bg-black hover:text-cream"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
            {done && <p className="mt-3 text-xs font-bold text-masala">You&apos;re on the list. First batch is yours.</p>}
          </form>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { h: "SHOP", items: ["Magic Masala", "Pani Puri", "Jeera", "Methi", "Schezwan"] },
              { h: "BRAND", items: ["Why Us", "Ingredients", "Reviews"] },
              { h: "CONTACT", items: ["hello@coinkhakhra.com", "Instagram", "Returns"] },
            ].map((col) => (
              <div key={col.h} className="flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-[0.18em] text-black/45">{col.h}</span>
                {col.items.map((it) => (
                  <a key={it} href="#" className="text-sm font-semibold text-black/80 transition-colors hover:text-masala">
                    {it}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div
          className="select-none py-6 text-center font-black leading-[0.8] tracking-[-0.03em]"
          style={{ fontSize: "clamp(56px,20vw,300px)", color: "transparent", WebkitTextStroke: "1.5px rgba(17,17,17,.18)" }}
          aria-hidden
        >
          COIN KHAKHRA
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t-[3px] border-black py-7 text-[11px] font-bold tracking-[0.1em] text-black/55">
          <span>© 2026 COIN KHAKHRA — BAKED, NOT FRIED</span>
          <span>MADE IN INDIA</span>
        </div>
      </div>
    </footer>
  );
}
