# INHAUS

**The Coin Khakhra, re-engineered.**
A bold, colourful, editorial D2C site for INHAUS coin khakhra — original implementation, no copied assets. Design language inspired (only) by premium maximalist snack sites: full-screen colour sections, oversized type, big product renders, floating ingredients, sunburst + wavy patterns, scroll-based storytelling.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** — scroll reveals, parallax, marquees
- **GSAP** (+ ScrollTrigger) — hero reveal & coin parallax
- **Lenis** — smooth scrolling

## Structure

```
app/
  layout.tsx        fonts (Shrikhand / Space Grotesk / JetBrains Mono) + Lenis
  page.tsx          assembles the page
  globals.css
components/
  Nav, Hero, FlavourSection, WhyInhaus, IngredientsSection, Reviews, Footer
  Coin     generated roasted-khakhra product render (CSS/SVG)
  Pack     original stand-up pouch render
  Ingredients  original ingredient marks + floating layer
  Wave     wavy background + sunburst
  SmoothScroll Lenis wrapper
lib/
  flavours.ts   the 5-flavour line-up + colours
  texture.ts    deterministic khakhra speckle texture
public/products/  drop real photos here (see README inside)
```

## Sections

1. **Hero** — oversized type, big coin render, GSAP reveal + scroll parallax, CTA.
2. **Five flavour sections** — one full-screen each, editorial alternating layout, own colour, big pack render, floating ingredients, sunburst + waves, minimal copy:
   Magic Masala (orange) · Pani Puri (green) · Zeera (beige) · Methi (olive) · Schezwan (red).
3. **Why INHAUS** — editorial cards.
4. **What's Inside** — honest ingredient spec sheet.
5. **Reviews** — auto-scrolling testimonial marquee.
6. **Footer** — newsletter + oversized wordmark.

All product imagery is generated (CSS/SVG). To use real photos, drop a file in
`public/products/` and set the flavour's `image` field in `lib/flavours.ts`
(see `public/products/README.md`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

See `STRATEGY.md` for the original research & design strategy.
