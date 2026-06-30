"use client";

import { useState } from "react";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="bg-ink px-5 pt-24 text-bone md:px-10">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-12 border-b border-bone/15 pb-20 md:grid-cols-2 md:gap-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-masala">FIRST-BATCH ACCESS</span>
            <h2 className="display mt-4 text-[clamp(32px,5vw,64px)] leading-[0.95]">
              Get the next roast first.
            </h2>
            <div className="mt-8 flex max-w-md items-center gap-3 border-b border-bone/30 pb-3">
              <input
                type="email"
                required
                placeholder="you@in-haus.co"
                className="w-full bg-transparent text-xl outline-none placeholder:text-bone/35"
              />
              <button
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bone/30 transition-colors hover:bg-masala hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
              </button>
            </div>
            {done && <p className="mt-3 font-mono text-xs text-masala">✓ You&apos;re on the list. First batch is yours.</p>}
          </form>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { h: "SHOP", items: ["Magic Masala", "Pani Puri", "Zeera", "Methi", "Schezwan"] },
              { h: "HOUSE", items: ["Why INHAUS", "What's inside", "Reviews", "Stockists"] },
              { h: "CONTACT", items: ["hello@in-haus.co", "Instagram", "Returns"] },
            ].map((col) => (
              <div key={col.h} className="flex flex-col gap-3">
                <span className="font-mono text-[11px] tracking-[0.18em] text-bone/45">{col.h}</span>
                {col.items.map((it) => (
                  <a key={it} href="#" className="text-sm text-bone/80 transition-colors hover:text-masala">
                    {it}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div
          className="select-none py-8 text-center font-bold leading-[0.8] tracking-[-0.03em]"
          style={{ fontSize: "clamp(64px,22vw,340px)", color: "transparent", WebkitTextStroke: "1px rgba(245,241,232,.18)" }}
          aria-hidden
        >
          INHAUS
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-bone/15 py-7 font-mono text-[11px] tracking-[0.1em] text-bone/45">
          <span>© 2026 INHAUS FOODS — ROASTED IN-HAUS</span>
          <span>Ø38·0MM / 2·0MM / 0% PALM</span>
        </div>
      </div>
    </footer>
  );
}
