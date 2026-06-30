# INHAUS

**A new shape of crunch.**
A minimal, bold, editorial site for INHAUS coin khakhra — original
implementation, no copied assets. The brief: make an Indian snack look like a
premium global brand. Every section is built like a poster — one focal point,
huge type, one product, and a lot of deliberate empty space. Bright colour
worlds alternate with quiet bone breathers so the page breathes.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** — quiet fade / slide / scale reveals + scroll parallax
- **Lenis** — smooth scrolling

## Design language

- **One idea per screen.** One headline, one short line, one CTA, one product.
- **Typography is the hero.** Bricolage Grotesque set huge; copy stays to a line or two.
- **A colour world per flavour.** Never more than three colours in a viewport.
- **Invisible motion.** Reveals are slow fades and slides; parallax is gentle. Honours `prefers-reduced-motion`.
- **No clutter.** No glass, no floating cards, no decorative gradients or icon grids.

## Structure

```
app/
  layout.tsx        fonts (Bricolage Grotesque / Space Grotesk / JetBrains Mono) + Lenis
  page.tsx          assembles the page rhythm
  globals.css
components/
  Nav               minimal, transparent, mix-blend-difference over any colour
  Hero              one headline + one coin on parallax + one CTA
  BrandStatement    quiet dark type poster
  FlavourSection    one full-screen poster per flavour (alternating)
  Interstitial      quiet bone breather between flavours
  BrandStory        "roasted, never fried" beat
  Reviews           single rotating pull-quote
  Footer            CTA line + columns + oversized wordmark
  Coin / Pack       original CSS/SVG product renders (no copied packaging)
  Reveal            the shared scroll-reveal motion primitive
  SmoothScroll      Lenis wrapper
lib/
  flavours.ts       the 5-flavour line-up: copy + colour worlds
  texture.ts        deterministic khakhra speckle texture
public/products/    drop real photos here (see README inside)
```

## Page rhythm

Hero → Brand statement → Magic Masala → breather → Pani Puri → breather →
Zeera → breather → Methi → breather → Schezwan → Brand story → Reviews → Footer.

Bright → quiet → bright → quiet, all the way down.

## Flavour worlds

Magic Masala (burnt orange) · Pani Puri (fresh green) · Zeera (warm beige) ·
Methi (olive green) · Schezwan (deep red).

All product imagery is generated (CSS/SVG). To use real photos, drop a file in
`public/products/` and set the flavour's `image` field in `lib/flavours.ts`
(see `public/products/README.md`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```
