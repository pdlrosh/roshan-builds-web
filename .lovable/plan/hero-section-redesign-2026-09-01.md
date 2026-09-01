# Hero section redesign

Rebuild the homepage hero as a composed, banner-style section inspired by your reference image — portrait on the right, eco-urban scene behind it, gold icon cluster top-left, and two specific calls to action.

## Layout

```text
+---------------------------------------------------+
|  (o)-(leaf)-(globe)   gold icon cluster           |
|                                        [ portrait |
|  ROSHAN PAUDEL                          over eco- |
|  CIVIL ENGINEER | RESEARCHER | EDUCATOR  urban    |
|  ---                                     park ]   |
|  Building sustainable solutions for                |
|  a better tomorrow.                                |
|                                                    |
|  [EXPLORE KEY PROJECTS] [VIEW PUBLICATIONS]        |
|                                                    |
|  Kathmandu · email · phone                         |
+---------------------------------------------------+
```

- Desktop: two columns, text left, portrait image anchored right and bleeding to the section edge, with a soft gradient wash so the scene fades into the text side.
- Mobile: portrait stacks above the text, cropped shorter; icons, headline, CTAs and contact line stay full width.
- Keeps the current light theme; the image side carries the deeper tones so contrast stays strong.

## Hero visual

Generate one composite hero image: your portrait (from the reference photo) on the right, with the background transitioning from a bookcase into a stylized eco-friendly urban park — green facades, rain gardens, bioswales, planted rooftops. Rendered once at wide dimensions and bundled into the project repo (`src/assets/`) rather than served from the CDN, so it renders on both Lovable preview and your Vercel deployment.

## Icons

Three refined gold icons (water drop, leaf, globe) clustered top-left with thin connecting dashes, matching the reference. Built as inline SVG/Lucide with a warm gold gradient and a subtle inner highlight for a light 3D feel — scalable and crisp, no image dependency.

## Calls to action

- **Explore Key Projects** — gold/amber filled button, scrolls to the existing Projects & Research section.
- **View Publications** — deep-blue filled button, opens your external research profile in a new tab.

I still need the publications profile URL (Google Scholar, ResearchGate, ORCID, or similar) — paste it and I'll wire the button to it. Until then the button will point to the Projects section so nothing is broken.

## Content changes

- Tagline under the name becomes `CIVIL ENGINEER | RESEARCHER | EDUCATOR` in spaced small caps.
- Adds the line "Building sustainable solutions for a better tomorrow."
- The existing "Connect on LinkedIn" button moves into the contact line/footer area so the hero keeps just the two primary CTAs.
- Location, email and phone stay as a compact single row.

## Technical notes

- New tokens in `src/styles.css`: a gold accent (`--gold`, `--gold-foreground`) and a hero overlay gradient; no hardcoded colors in components.
- `src/components/portfolio/Hero.tsx` rewritten; new `HeroMarks.tsx` for the icon cluster SVGs.
- Two button variants added to `src/components/ui/button.tsx` (`gold`, `deep`) so the CTAs use the design system.
- Hero image imported as a normal Vite asset (`import heroBanner from "@/assets/hero-banner.jpg"`), width/height set and `loading="eager"` for LCP; decorative-only, so alt text stays empty and the H1 remains the text headline for SEO.
