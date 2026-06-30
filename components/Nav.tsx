"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#flavours", label: "Flavours" },
  { href: "#why", label: "Why INHAUS" },
  { href: "#ingredients", label: "Inside" },
  { href: "#reviews", label: "Reviews" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? "bg-bone/80 py-3 shadow-[0_1px_0_rgba(0,0,0,.06)] backdrop-blur-md" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-wide items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="INHAUS home">
          <span className="relative grid h-4 w-4 place-items-center rounded-full border-2 border-masala">
            <span className="h-1 w-1 rounded-full bg-masala" />
          </span>
          <span className="text-lg font-bold tracking-[0.06em]">INHAUS</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/80 transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#flavours"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bone transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Shop
          </a>
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <div
        className={`grid overflow-hidden px-5 transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="flex min-h-0 flex-col gap-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-2xl font-semibold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
