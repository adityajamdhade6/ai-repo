# Coin Khakhra

**Crunch Different.**
A bold, editorial D2C site for Coin Khakhra — original implementation, no copied assets. Design language inspired (only) by premium maximalist snack sites like Popadelics: full-bleed colour sections, huge lowercase type, flat 2D poster-style product renders, floating khakhra chips, sunburst + blob patterns, alternating flavour storytelling. No glassmorphism, no gradients, no 3D, no dark-mode dashboards.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** — subtle fade-up / slide-in only, no parallax
- **Lucide Icons**

## Structure

```
app/
  layout.tsx        fonts (Archivo Black / Space Grotesk) + metadata
  page.tsx           assembles the page
  globals.css
components/
  Nav, Hero, Statement, FlavourSection, WhyUs, IngredientsSection, Reviews, CTA, Footer
  Pack               flat 2D poster-style stand-up pouch render
  Chip               single flat khakhra disc illustration
  FloatingChips       floating chip layer used across sections
  AbstractShape       flat sunburst / blob / wave / ring shapes, tone-on-tone
  Ingredients         flat spice/herb icon marks
  Reveal              minimal fade-up scroll-reveal wrapper
lib/
  flavours.ts        the 5-flavour line-up + colours
public/products/      drop real product photos here (see README inside)
```

## Colour system

| Flavour | Colour |
|---|---|
| Magic Masala | `#FF1E63` |
| Pani Puri | `#FF6A00` |
| Jeera | `#FFE600` |
| Methi | `#0B9D3A` |
| Schezwan | `#FF1D25` |

Cream `#F7F3EB` · Black `#111111` · White `#FFFFFF`

## Sections

1. **Hero** — bright pink, massive lowercase headline, five packs together, floating chips, pill CTA.
2. **Statement** — full-width yellow, one huge line: "not your regular khakhra."
3. **Five flavour sections** — one full-screen each, alternating text/pack layout, own colour, floating chips, tiny ingredient marks.
4. **Why Us** — black background, stacked huge statements, no icons.
5. **Ingredients** — editorial grid, huge icons, small copy.
6. **Reviews** — large review typography, static grid, no carousel.
7. **CTA** — huge colour block, "ready to crunch different?"
8. **Footer** — minimal, oversized wordmark outline.

All product imagery is generated (SVG). To use real photos, drop a file in
`public/products/` and set the flavour's `image` field in `lib/flavours.ts`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```
