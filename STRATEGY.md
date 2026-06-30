# INHAUS — Design Strategy

> The coin khakhra, re-engineered.
> _"If Apple, Nothing, and a modern snack startup designed a Coin Khakhra website from scratch."_

This document captures the research and the design thinking behind the INHAUS site **before** a line of layout was written. The goal was never to copy a Shopify snack store — it was to make a Coin Khakhra feel like a *designed object*.

---

## 1. Research — what was studied

Reference brands analysed for homepage structure, navigation, product presentation, typography, palette, storytelling, motion, micro-interactions, product pages, cart, mobile UX, performance and conversion:

**Premium snack brands**
- **4700BC** — turned commodity popcorn into a gourmet category through *disciplined* identity and adventurous flavour naming (Himalayan Salt Caramel, Nutty Tuxedo, Belgian Chocolate). Lesson: naming + restraint creates premium perception.
- **eatKnacks / premium makhana** — deep-black + metallic-gold palettes, resealable gift-worthy packaging, "looks as good as it tastes." Lesson: the pack is the differentiator; gifting is a wedge.

**Coin Khakhra brands**
- **Jagdish Farshan (Coin Khakhra)** — strong flavour breadth (Pizza, Achari, Peri Peri, Jeera, Cheese, Mexican, Golgappa) at ~₹150, airtight packaging. But: generic template, flat product grid, stock presentation.
- **Saras Snacks** — similar template-driven Shopify execution.

**Global / D2C inspiration** (motion + storytelling only)
- **UND NY, Sakara** — GSAP ScrollTrigger reveals, kinetic typography, logo animation on scroll, minimalism *with* motion.
- **Paper Boat** — storytelling as the product, not decoration.

> Inspiration was taken **only** from interaction quality, UX, motion, hierarchy, storytelling and premium execution — **no** layouts, illustrations, graphics or branding were copied.

---

## 2. What works / what feels outdated / what to improve

| | Today's khakhra sites | INHAUS direction |
|---|---|---|
| **Works** | Flavour variety, honest "no preservatives", airtight packs | Keep flavour-led merchandising + honesty, elevate it |
| **Outdated** | Template grids, stock photos, no type system, zero motion, "₹150 add to cart" | Designed product object, custom type, scroll motion, story |
| **Improve** | No brand story, weak hierarchy, generic cart | Engineering narrative, strict grid, re-themable flavours, slide cart |

---

## 3. How INHAUS stands apart

The Coin Khakhra is literally **a coin** — a thin, roasted, 2mm disc. So the **disc becomes the entire visual system**:

- A precision-machined **spinning coin** as the hero object.
- **Flavour-coins** that re-theme the whole page accent on hover/selection.
- **Dot-matrix & concentric-ring** motifs (Bauhaus geometry + Nothing's dot-matrix language).
- A **technical spec-sheet** tone (Nothing) applied to a snack: "Ø 38mm · 2.0mm · roasted 180°C · 0% palm oil."

The result reads like a product launch, not a grocery listing.

---

## 4. Visual direction

- **Palette** — Bone paper `#F4F1EA`, ink `#11100E`, signature **Ember** `#E4571B`. Each flavour carries its own accent token that the UI inherits live.
- **Type** — `Space Grotesk` for display (geometric, confident), `JetBrains Mono` for labels/specs (the "technical" Nothing voice), system fallback for resilience/performance.
- **Layout** — strict 12-col grid, generous negative space, hairline rules, oversized wordmark. Apple-grade restraint.
- **Motion language** — precise, mechanical, never bouncy. Things *machine* into place.

## 5. Motion direction

- Custom magnetic cursor with a trailing coin.
- Scroll-reveal (IntersectionObserver) with staggered, eased entrances.
- Hero coin spins continuously, slows on hover (it's a real object you can inspect).
- Flavour selection animates page-wide accent via CSS variables.
- Sticky "Craft" process scroll. Count-up stats. Marquee ticker. Magnetic buttons.
- Full `prefers-reduced-motion` support — motion is an enhancement, never a dependency.

## 6. UX improvements

- One-thumb mobile nav, sticky add bar, large tap targets.
- Flavour explorer instead of a flat grid — hover/click to inspect, with live theming.
- "Build your box" configurator with live count + price.
- Honest, scannable spec sheet replacing a wall of marketing copy.

## 7. Conversion improvements

- Persistent slide-in cart drawer with live total and free-shipping threshold meter.
- Build-your-box increases AOV (bundle of 6).
- Social proof + trust row (ratings, "roasted to order", returns).
- Sticky mobile CTA. Newsletter capture framed as "first batch access."

---

## 8. Build notes

- **Zero build step / zero runtime dependencies** — hand-written `HTML + CSS + JS`, so it runs anywhere instantly and scores well on performance. Fonts via Google Fonts with system fallbacks.
- All imagery is **original CSS/SVG** (generated coins, rings, dot-matrix) — nothing copied.
- Accessible: semantic landmarks, focus states, reduced-motion, keyboard-operable cart and configurator.
