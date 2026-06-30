"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#flavours", label: "Flavours" },
  { href: "#story", label: "Story" },
];

/**
 * Minimal, transparent navigation. Uses mix-blend-difference so the small
 * wordmark and links stay legible over any flavour-world colour without a bar.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);

  // lock scroll when the mobile sheet is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-wide items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a
          href="#top"
          className="text-[15px] font-bold tracking-[0.04em] text-white mix-blend-difference"
          aria-label="INHAUS home"
        >
          INHAUS
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-[0.02em] text-white mix-blend-difference"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#flavours"
              className="font-mono text-[12px] tracking-[0.18em] text-white mix-blend-difference"
            >
              SHOP →
            </a>
          </li>
        </ul>

        <button
          className="relative z-50 flex flex-col gap-[5px] p-1 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 bg-white mix-blend-difference transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white mix-blend-difference transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white mix-blend-difference transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-4 px-8">
          {[...LINKS, { href: "#flavours", label: "Shop" }].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block text-bone text-[clamp(44px,12vw,72px)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
