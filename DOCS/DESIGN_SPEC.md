# YELLOWDOTS — Design Specification

Full design spec for the YELLOWDOTS website. Referenced by CLAUDE.md.

---

## Brand

- **Name**: YELLOWDOTS
- **Tagline**: "We connect the dots."
- **Parent brand**: Simpol Agency (simpolagency.com)
- **Visual concept**: Yellow dots as recurring motif — connections, constellations, creative sparks. Use as pattern, transitions, separators, loader.

---

## Site Sections (in order)

### 1. NAVBAR (sticky, glass)

```
[YELLOWDOTS●]          [Servizi] [Works] [Chi Siamo] [Contatti]   [● Richiedi Preventivo]
```

- Glass background, compacts height on scroll
- Logo: "YELLOWDOTS" in Anton uppercase + yellow dot at end
- Mobile: hamburger → fullscreen overlay, staggered menu animation
- CTA button: yellow bg, black text, always visible

### 2. HERO (100vh, dark bg)

```
overline (Outfit 400, yellow, small):
A SIMPOL AGENCY PRODUCTION HOUSE

h1 (Anton, ~120px desktop / ~56px mobile, white, uppercase):
WE CONNECT
THE DOTS.

subtitle (Outfit 300, 20px, light gray, max-w 600px):
Produzione video, fotografia, contenuti AI e copertura eventi.
Dalla visione alla realtà, un punto alla volta.

CTA 1: "Richiedi Preventivo" → yellow bg, black text (primary)
CTA 2: "Scopri i lavori" → white outline (secondary)
```

- Background: dot pattern + gradient mesh (placeholder for future showreel video)
- Scroll indicator: animated bouncing dot at bottom
- Letter "O" dots in title pulse with yellow glow

### 3. TRUST BAR (light bg)

- Label: "Brand che hanno scelto di connettersi con noi"
- Infinite marquee of 10+ placeholder logo boxes (120×50px gray boxes labeled "LOGO 1" etc.)
- CSS-only marquee animation

### 4. SERVIZI (dark bg)

- Tag: "COSA FACCIAMO" (yellow)
- H2: "I NOSTRI SERVIZI"
- Grid: 2 cols desktop, 1 col mobile — 8 glass cards
- Each card: number in Anton yellow, title Anton uppercase, 2-3 line description, "Scopri di più →" link
- Hover: yellow border glow + scale(1.02)

Services:

| # | Title | Description |
|---|-------|-------------|
| 01 | VIDEO PRODUCTION | Spot pubblicitari, brand film, video corporate, social video, documentari e videoclip. Dalla pre-produzione alla color grading, ogni frame racconta la tua storia. |
| 02 | CONTENT FOR SOCIAL | Shooting day che producono 20-30 asset pronti per i tuoi canali. Reels, TikTok, Stories, Carousel — tutto in un giorno, tutto on-brand. |
| 03 | FOTOGRAFIA | Still life, packshot, food photography, ritratti corporate, reportage eventi, foto e-commerce. L'immagine giusta vale più di mille parole. |
| 04 | AI-POWERED CONTENT | Contenuti generati e potenziati dall'intelligenza artificiale: immagini, video, avatar digitali, virtual try-on, upscaling, traduzione automatica. |
| 05 | EVENTI & LIVE | Copertura multi-camera, live streaming, content creation in tempo reale, allestimenti scenografici, LED wall content, recap same-day. |
| 06 | POST-PRODUZIONE | Color grading cinematografico, motion graphics, animazione 2D/3D, sound design, VFX, compositing, sottotitolazione e localizzazione. |
| 07 | 3D & VIRTUAL | Modellazione 3D prodotto, CGI product video, virtual tour 360°, contenuti AR/VR. Se non esiste ancora, lo creiamo noi. |
| 08 | BRANDED CONTENT | Podcast video, web series, branded documentary, employer branding. Storie che connettono il tuo brand alle persone. |

### 5. PORTFOLIO (light bg)

- Tag: "SELECTED WORKS" (yellow)
- H2: "I NOSTRI PUNTI DI CONTATTO"
- Filter pills: Tutti | Video | Foto | AI | Eventi (useState, animate transitions)
- Grid: 3 cols desktop, masonry-like variable heights
- Each card: gradient placeholder + overlay on hover (glass dark + title + category + "Vedi progetto →")
- Hover: image zoom + glass overlay

Placeholder projects:

1. "Brand Film — Caffè Vergnano" | Video Production
2. "Shooting Day — 30 Asset in 8 ore" | Content for Social
3. "Packshot Collection — Lindt" | Fotografia
4. "AI Avatar — Virtual Spokesperson" | AI Content
5. "Kappa FuturFestival — Live Coverage" | Eventi & Live
6. "Product CGI — Launch Reveal" | 3D & Virtual
7. "Docu-series — Behind the Brand" | Branded Content
8. "VFX Spot — Automotive" | Post-Produzione

After grid: centered CTA → "Vuoi vedere tutto? Esplora il portfolio completo →"

### 6. PROCESSO (dark bg)

- Tag: "COME LAVORIAMO" (yellow)
- H2: "DAL BRIEF AL DELIVERY."
- Subtitle: "Un metodo reactive, ereditato da Simpol Agency."
- Horizontal timeline desktop (vertical mobile), 5 yellow dots connected by lines
- Dots light up sequentially on scroll

Steps:

1. **BRIEF & STRATEGY** — Ascoltiamo, analizziamo, definiamo obiettivi e KPI. Il brief diventa la bussola di tutto il progetto.
2. **PRE-PRODUZIONE** — Concept creativo, storyboard, moodboard, casting, scouting location, pianificazione tecnica.
3. **PRODUZIONE** — Shooting, riprese, registrazioni. Il nostro team gestisce ogni aspetto sul set, dai talent alla regia.
4. **POST-PRODUZIONE** — Montaggio, color grading, motion graphics, sound design, VFX. La magia prende forma.
5. **DELIVERY & ANALISI** — Consegna in tutti i formati richiesti. Analizziamo le performance per migliorare il prossimo progetto.

### 7. CHI SIAMO (light bg)

- Split layout: 60% text left, 40% image placeholder right
- Tag: "CHI SIAMO" (yellow)
- H2: "NON SIAMO SOLO UNA CASA DI PRODUZIONE."

Body text:
```
YELLOWDOTS nasce dall'esperienza produttiva di Simpol Agency, 
creative agency specializzata in ideazione, produzione e diffusione di contenuti.

Siamo filmmaker, fotografi, motion designer, esperti AI e tecnici live. 
Ma soprattutto siamo connettori: uniamo strategia e produzione 
perché ogni contenuto nasca con uno scopo preciso.

Il nostro approccio "reactive" significa che non eseguiamo — 
reagiamo, proponiamo, miglioriamo. Sempre.
```

- CTA: "Scopri Simpol Agency →" (link to simpolagency.com)
- Right side: image placeholder with overlapping glass stat card:
  - +150 progetti completati
  - +40 brand serviti
  - +5 anni di esperienza

### 8. CTA BANNER (yellow bg — full width)

```
h2 (Anton, black, large):
HAI UN PROGETTO?
CONNETTIAMO I PUNTI.

subtitle: Raccontaci la tua idea — ti rispondiamo entro 24 ore.

CTA: "Richiedi un Preventivo Gratuito" → black bg, yellow text
```

### 9. CONTACT FORM (dark bg)

- Tag: "CONTATTACI" (yellow)
- H2: "INIZIAMO A CONNETTERE I PUNTI."
- Glass card container, max-width 700px, centered

Form fields:

| Field | Type | Required |
|-------|------|----------|
| Nome e Cognome | text | yes |
| Email | email | yes |
| Azienda / Brand | text | no |
| Tipo di progetto | select: Video Production, Content for Social, Fotografia, AI-Powered Content, Eventi & Live, Post-Produzione, 3D & Virtual, Branded Content, Altro / Non sono sicuro | yes |
| Budget indicativo | select: < 5.000€, 5.000€ — 15.000€, 15.000€ — 30.000€, 30.000€ — 50.000€, > 50.000€, Preferisco discuterne | no |
| Raccontaci il progetto | textarea (4 rows) | yes |
| Come ci hai conosciuto? | select: Google, Social Media, Passaparola, Simpol Agency, Evento, Altro | no |
| Privacy checkbox | checkbox: "Ho letto e accetto la Privacy Policy" | yes |

Submit button: "INVIA IL TUO BRIEF →" yellow, full-width

Success message (animated): "Grazie! Abbiamo ricevuto il tuo brief. Ti ricontatteremo entro 24 ore. ●"

### 10. FOOTER (black bg, full nero)

```
[YELLOWDOTS●]
A Simpol Agency Production House

Col 1: Navigation          Col 2: Servizi              Col 3: Contatti
Home                       Video Production            info@yellowdots.it
Servizi                    Content for Social          +39 011 0240725
Works                      Fotografia                  Via Tetti Valfrè 1
Chi Siamo                  AI-Powered Content          Orbassano (TO), Italia
Contatti                   Eventi & Live
                           Post-Produzione
                           3D & Virtual
                           Branded Content

[Social: Instagram | LinkedIn | TikTok | YouTube]

--- (yellow thin divider) ---

© 2026 YELLOWDOTS — Simpol S.r.l. | P.IVA 12217550016
Privacy Policy | Cookie Policy
```

---

## Responsive Breakpoints

- **Desktop** (>1024px): Full layout, 2-3 col grids, custom cursor active, parallax
- **Tablet** (768-1024px): 2 cols, hamburger nav, reduced padding
- **Mobile** (<768px): 1 col, hero ~70vh, scaled-down titles, vertical timeline, fullscreen menu overlay, no custom cursor

---

## Meta

- Title: "YELLOWDOTS — Casa di Produzione Creativa | Video, Foto, AI, Eventi"
- Favicon: yellow dot SVG on transparent background
- Smooth scroll: `scroll-behavior: smooth` globally + anchor navigation
