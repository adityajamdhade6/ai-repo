# INHAUS

**The coin khakhra, re-engineered.**
An original D2C brand experience for a premium Coin Khakhra — built from scratch, not from a Shopify template.

> _"If Apple, Nothing, and a modern snack startup designed a Coin Khakhra website."_

The full research + design rationale lives in **[STRATEGY.md](STRATEGY.md)**.

## What's inside

A self-contained, dependency-free site. No build step, no framework, no copied assets — every coin, ring and texture is generated with CSS/SVG.

```
index.html        # structure
css/styles.css    # the full visual system + responsive + reduced-motion
js/data.js        # flavour line-up (each carries its own accent token)
js/main.js        # interactions
STRATEGY.md       # research & design strategy
```

## The experience

- **The coin as a system** — a precision-machined spinning hero coin; the khakhra *is* a disc, so the disc is the whole identity.
- **Live flavour theming** — hover/select a flavour and the entire page re-themes to its accent via CSS variables.
- **Sticky "Craft" process** — the roast story reveals step-by-step on scroll.
- **Technical spec sheet** — a Nothing-style mono table instead of marketing fluff.
- **Build-a-box configurator** — fill six slots, watch the live count + price, save on the full case.
- **Slide-in cart** with quantity controls and a free-shipping meter.
- **Custom magnetic cursor, marquee, count-up stats, scroll reveals, boot loader.**
- Fully responsive; honours `prefers-reduced-motion`; semantic + keyboard-operable.

## Run it

No tooling required — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8099
# → http://localhost:8099
```

Fonts (Space Grotesk + JetBrains Mono) load from Google Fonts, with system fallbacks if offline.
