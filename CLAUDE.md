# REACTIVEDOTS — The Making Studio Website

React 18 + Vite single-page site for REACTIVEDOTS, a premium creative production studio (part of the Simpol. universe). Conversion-oriented: every section drives toward the contact form.

## Stack & Setup

```bash
npm install
npm run dev          # dev server
npm run build        # production build
```

- React 18 + Vite (no TypeScript, plain JSX)
- CSS Modules for component styles, one `variables.css` for tokens
- NO Tailwind — custom CSS only
- Framer Motion allowed for animations, otherwise CSS + Intersection Observer
- Google Fonts: Big Shoulders Display (display/headlines), Big Shoulders Text (subheadings), Barlow (body), Barlow Condensed (labels)
- Lucide React for icons

## Architecture

```
src/
├── components/       # One file per section (Hero, Services, Portfolio, etc.)
├── styles/           # variables.css + globals.css + component .module.css
├── hooks/            # useScrollReveal, useCompactNav, useMouseGlow
├── App.jsx           # Assembles all sections
└── main.jsx          # Entry point
```

## Design Tokens (STRICT — brand palette only)

```css
/* Color System */
--black: #080809;        /* Primary background */
--void: #111113;         /* Section alt background */
--space: #1A1A1D;        /* Cards, surfaces */
--graphite: #26262A;     /* UI elements, containers */
--steel: #3A3A3E;        /* Borders, dividers */
--silver: #8C8C92;       /* Secondary text, labels */
--pearl: #C8C8CC;        /* Subheadings */
--fog: #E8E8ED;          /* Light backgrounds */
--white: #F5F5F7;        /* Primary text */
--yellow: #FFD60A;       /* REC accent — single accent color */
--yellow-lo: rgba(255,214,10,0.08);
--yellow-mid: rgba(255,214,10,0.25);

/* Typography */
--font-display: 'Big Shoulders Display'  /* Logo, H1, campaign headlines — weight 700-900 */
--font-text: 'Big Shoulders Text'        /* Subheadings, CTA, UI text — weight 400-600 */
--font-body: 'Barlow'                    /* Body copy, descriptions — weight 300-500 */
--font-label: 'Barlow Condensed'         /* Labels, metadata, credits — weight 300-700 */
```

## Critical Design Rules

- **Display font**: Big Shoulders Display 900, uppercase, letter-spacing 0.01em, line-height 0.84-0.88
- **Labels**: Barlow Condensed, uppercase, letter-spacing 0.2-0.28em, 9-11px
- **Dark studio aesthetic**: deep blacks (#080809), no pure white, subtle yellow glow accents
- **REC dot**: pulsing yellow dot (#FFD60A) as brand signature — in logo, section headers, animations
- **Glass nav**: transparent initially, becomes backdrop-filter blur(20px) on scroll
- **Custom cursor**: yellow dot following mouse with lerp on desktop only
- **Scroll reveal**: fade-in + translateY(32px) with cubic-bezier(0.16, 1, 0.3, 1)
- **Navbar**: CTA "Start a project" always visible in yellow

## Brand Voice

- Direct. Never blunt.
- Bold with purpose.
- Always in motion.
- Copy in Italian with English headlines/section titles

## Gotchas

- Image placeholders: use styled divs with gradients + text labels, never broken `<img>` tags
- Mobile (<768px): disable custom cursor, vertical layouts, fullscreen hamburger menu
- The form doesn't submit anywhere — show animated success message on submit
- Portfolio filters must work with useState, animate card transitions
- Yellow is used sparingly — only for accents, dots, CTAs. Never as background for full sections except CTA banner
- Always test glass effects on dark backgrounds
