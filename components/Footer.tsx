import Reveal from "./Reveal";

const COLUMNS = [
  {
    head: "Shop",
    links: ["Magic Masala", "Pani Puri", "Zeera", "Methi", "Schezwan"],
  },
  {
    head: "INHAUS",
    links: ["Story", "Stockists", "Wholesale", "Contact"],
  },
  {
    head: "Social",
    links: ["Instagram", "Newsletter"],
  },
];

/**
 * A calm closer. One short CTA line, a few quiet link columns, and the
 * wordmark set as large as the headlines — the last poster on the page.
 */
export default function Footer() {
  return (
    <footer className="bg-bone px-6 pb-10 pt-28 md:px-12">
      <div className="mx-auto max-w-wide">
        <Reveal>
          <p className="display max-w-[12ch] text-ink text-[clamp(40px,7vw,104px)]">
            Open. Crunch. Repeat.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-ink/10 pt-12 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.head}>
              <h4 className="font-mono text-[11px] tracking-label text-ink/45">
                {col.head}
              </h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#flavours"
                      className="text-[15px] text-ink/70 transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* oversized wordmark */}
        <div className="mt-20 overflow-hidden">
          <span className="display block leading-[0.8] text-ink text-[clamp(72px,21vw,340px)]">
            INHAUS
          </span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-7 font-mono text-[11px] tracking-[0.14em] text-ink/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} INHAUS</span>
          <span>ROASTED IN-HAUS · NEVER FRIED</span>
        </div>
      </div>
    </footer>
  );
}
