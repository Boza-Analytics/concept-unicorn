# concept-unicorn 🦄

Concept upgrade of the [ulab.rocks](https://www.ulab.rocks/) homepage: the original
design, content and assets stay 1:1 — a dependency-free motion layer is added on top.

## Structure

- `index.html` — the original homepage source, asset URLs rewritten to local paths,
  tracking removed, enhancement layer injected
- `wp-content/` — all original assets (theme CSS/JS bundle, fonts, images) self-hosted
- `enhance.css` + `enhance.js` — the only new code: animations & polish, zero dependencies

## What the enhancement layer adds

- Hero headline line-by-line masked reveal, perex/buttons fade-in, hero image
  clip-path reveal + scroll parallax
- Scroll progress bar in brand colors
- Smart header: shadow after scroll, hides on scroll down, returns on scroll up
- Channel logos rebuilt into an infinite marquee (pauses on hover, edge fade)
- Stickers float gently and pop on hover
- Buttons: hover lift, glow shadow, shine sweep, magnetic cursor pull
- Case study / team cards: hover lift with image zoom; staggered viewport reveals
- Everything disabled under `prefers-reduced-motion`; with JS off the page is the
  untouched original (progressive enhancement)

The theme's own GSAP `animate-slide-up` reveals and Swiper carousels keep working —
the bundle is self-hosted.

## Develop

Any static server, e.g.:

```bash
python3 -m http.server 4124
```

## Deploy

Static site — connect to Vercel, framework preset "Other", no build step.
