"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "#flavours", label: "Flavours" },
  { href: "#why", label: "Why Us" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#reviews", label: "Reviews" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] border-black bg-cream transition-shadow ${
        stuck ? "shadow-[0_2px_0_rgba(17,17,17,0.06)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-wide items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="text-lg font-black tracking-[0.02em] md:text-xl" aria-label="Coin Khakhra home">
          COIN KHAKHRA
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-black/80 transition-colors hover:text-masala">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#flavours"
            className="hidden items-center gap-1.5 rounded-pill bg-black px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Shop Now
            <ArrowUpRight size={15} />
          </a>
          <button
            className="p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden border-t-[3px] border-black px-5 transition-all duration-300 md:hidden ${
          open ? "grid-rows-[1fr] py-5" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <ul className="flex min-h-0 flex-col gap-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-2xl font-bold">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#flavours"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-pill bg-black px-5 py-2.5 text-sm font-bold text-cream"
            >
              Shop Now
              <ArrowUpRight size={15} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
