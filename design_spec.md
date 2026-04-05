# MO Totes — Site Design Specification

> This document is the source of truth for building the MO Totes website. It covers brand identity, color system, typography, page structure, component specs, copy, and UX requirements. Reference it for every build decision.

---

## 1. Project Overview

**Product:** MO Totes — reusable plastic tote rental for college students moving in/out of dorms and apartments, and for storage.

**Core value proposition:** We drop off clean reusable totes before your move, you pack and go, we pick them up after. No cardboard, no tape, no assembly, no disposal.

**Primary audience:** College students (Gen Z, 18–24), moving in/out of dorms and apartments. Secondary: parents helping students move.

**Positioning:** The first tote rental service built *exclusively* for college students. All competitors treat students as a secondary use case.

**Brand voice:** Confident, direct, slightly irreverent. Write like a student talking to a student — not a moving company talking at a customer. Short sentences. Contractions. Occasional dry humor. Never corporate.

- ✅ "Totes that actually hold your stuff."
- ✅ "No cardboard drama."
- ❌ "Our premium reusable packing solutions."

---

## 2. Color System

> **Revision note:** Palette updated from muted teal/coral to vivid green/orange after competitor review. STL Rent A Box (stlrentabox.com) uses saturated grass green + orange CTAs. ReTotes (rentretotes.com) leads with bright orange actions on crisp white. Both are significantly bolder than the original palette. Green and orange are complementary colors (opposite on the color wheel), creating maximum visual punch.

### Primary Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-brand` | Grass green | `#16A34A` | Nav background, step circles, section accents, final CTA banner bg |
| `--color-brand-light` | Green light | `#DCFCE7` | Badge fills, hover states, light section backgrounds |
| `--color-brand-dark` | Green dark | `#14532D` | Text on green light backgrounds, hover on brand elements |
| `--color-brand-deep` | Deep green | `#052E16` | Dark full-width section backgrounds (hero alt, CTA banner) |
| `--color-action` | Vivid orange | `#EA580C` | Primary buttons, "Book now," "Most popular" badge, nav CTA |
| `--color-action-light` | Orange light | `#FFF7ED` | Soft callout backgrounds |
| `--color-action-dark` | Orange dark | `#9A3412` | Hover state on orange buttons |
| `--color-base` | White | `#FFFFFF` | Primary page background, cards, nav (post-scroll) |
| `--color-base-alt` | Off-white | `#F7F7F5` | Alternating section backgrounds |
| `--color-text-primary` | Near-black | `#111827` | All headings, body copy |
| `--color-text-muted` | Mid gray | `#6B7280` | Subtext, meta info, secondary labels |
| `--color-border` | Light gray | `#E5E7EB` | Card borders, dividers |
| `--color-accent` | Amber | `#D97706` | Star ratings, pricing callouts |
| `--color-accent-light` | Amber light | `#FEF3C7` | Amber badge backgrounds |

### Color Usage Rules
- Green is the **brand identity** color — structural, trustworthy, eco. Use it for everything that says "this is MO Totes."
- Orange is the **conversion** color — it should appear on exactly one thing per view: the primary CTA button. Don't dilute it.
- Use `--color-brand-deep` (#052E16) for high-impact full-width dark sections. White text on deep green reads as premium and bold.
- Alternate section backgrounds between `--color-base` (#FFFFFF) and `--color-base-alt` (#F7F7F5). Never use off-white as a card background — cards are always pure white.
- The green/orange pairing is complementary — it creates natural visual tension that makes CTAs pop without needing extra tricks.

---

## 3. Typography

### Font Stack
```css
--font-display: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```
Load from Google Fonts: `Plus Jakarta Sans` (weights 400, 500) and `Inter` (weights 400, 500).

### Scale

| Role | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Hero headline | 44–52px | 500 | 1.15 | Responsive: 32px mobile |
| Section heading | 32–36px | 500 | 1.2 | Responsive: 26px mobile |
| Card title | 18–20px | 500 | 1.3 | |
| Body | 16–17px | 400 | 1.7 | |
| Small / meta | 13px | 400 | 1.5 | |
| Badge / label | 11–12px | 500 | — | Uppercase, letter-spacing: 0.05em |

### Rules
- **No font-weight above 500.** 600/700 reads heavy against the clean layout.
- Sentence case everywhere. No ALL CAPS headings except badge labels.
- Hero headline uses `--font-display`. Body copy uses `--font-body`.

---

## 4. Spacing & Layout

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 48px;
--space-2xl: 80px;
--space-3xl: 120px;

--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 100px;

--max-width: 1160px;
--content-padding: 0 24px; /* mobile */
--content-padding-desktop: 0 48px;
```

- Max content width: `1160px`, centered.
- Section vertical padding: `80px 0` desktop, `56px 0` mobile.
- Cards: `border: 1px solid var(--color-border)`, `border-radius: var(--radius-lg)`, `padding: 20px 24px`.

---

## 5. Page Structure — Homepage

Build sections in this order. Every section ID is listed for anchor linking.

### 5.1 Navigation (`#nav`)
- **Layout:** Logo left, links center, CTA button right. Sticky.
- **Behavior:** Transparent background on hero; switches to `--color-surface` with `box-shadow: 0 1px 0 var(--color-border)` after 60px scroll.
- **Logo:** "MO Totes" wordmark + simple box icon. Green color.
- **Links:** "How it works" → `#how-it-works` | "Pricing" → `#pricing` | "Campuses" → `#campuses` | "Storage" → `#storage`
- **CTA:** "Book now" — coral button, `--radius-sm`.
- **Mobile:** Hamburger menu. Links stack vertically in a slide-down drawer.

### 5.2 Hero (`#hero`)
- **Background:** `--color-base` (#F9F8F4). No image background — use clean whitespace.
- **Layout:** Centered, single column. Max width 680px for text content.
- **Badge (above headline):** Pill badge: "No cardboard. No tape. No stress." — teal light background, teal dark text.
- **Headline:** `44px`, weight 500. See copy options in Section 7.
- **Subhead:** `17px`, `--color-text-muted`, max-width 520px, centered.
- **CTAs:** Two buttons side by side.
  - Primary: "Get your totes →" — coral fill, white text, `--radius-md`, `padding: 14px 28px`.
  - Secondary: "See how it works" — transparent, `--color-text-primary` border and text.
- **Trust bar** (below CTAs): Inline row of 3 items separated by `•`: `⭐ 4.9 rating` | `2,000+ student moves` | `Free delivery + pickup`. Font: 13px, `--color-text-muted`.
- **Bottom:** Transition directly into the campus trust bar with no gap.

### 5.3 Campus Trust Bar (`#campuses`)
- **Background:** `--color-surface` (white).
- **Layout:** "Serving students at" label (13px muted) followed by university name pills.
- **Pills:** Small bordered pills — `border: 1px solid var(--color-border)`, `border-radius: var(--radius-sm)`, `padding: 4px 12px`, 13px, weight 500.
- **Behavior:** If more than 8 campuses, use a CSS marquee/scroll animation on mobile.
- **Populate with:** Whatever campuses are served. Placeholder: Mizzou, SLU, UMSL, WashU, SIUE.

### 5.4 How It Works (`#how-it-works`)
- **Background:** `--color-base`.
- **Heading:** "Four steps, zero cardboard drama."
- **Layout:** 4-step horizontal row on desktop, vertical stack on mobile.
- **Step component:**
  - Numbered circle: 40px diameter, `--color-brand` fill, white text, weight 500.
  - Title: 15px, weight 500, `--color-text-primary`.
  - Description: 13px, `--color-text-muted`, 2 lines max.
  - Connector line between steps (horizontal line, `--color-border`, 1px) — hide on mobile.
- **Steps:**
  1. **Book online** — Pick your tote count and delivery date.
  2. **We deliver** — Totes arrive clean and ready to pack.
  3. **Pack and move** — Stack, roll, and load your stuff with ease.
  4. **We pick up** — Leave them on the porch when you're done.

### 5.5 Why Totes Beat Cardboard (`#why-totes`)
- **Background:** `--color-surface`.
- **Heading:** "Why students are switching." (or "The upgrade your move deserves.")
- **Layout:** 4-column card grid on desktop, 2-column on tablet, 1-column on mobile.
- **Card component:** Icon (emoji or inline SVG) + title (15px 500) + 2-sentence description (13px muted). Card has border + `--radius-lg`.
- **Cards:**
  - ♻️ **Zero waste** — No cardboard in landfills. Each tote replaces ~15 single-use boxes.
  - 🧱 **Actually sturdy** — Waterproof hard plastic won't cave in under a stack of textbooks.
  - ⏱ **No assembly** — No tape, no scissors, no 45-minute box-building session.
  - 💰 **Saves money** — When you add up tape, boxes, and time, totes win on cost.

### 5.6 Storage Section (`#storage`)
- **Background:** `--color-base`.
- **Layout:** Two-column — text left, visual/illustration right.
- **Heading:** "Not just for moving. Need somewhere to stash your stuff?"
- **Body:** 2–3 sentences about semester storage, summer break storage, between-apartment gaps.
- **CTA:** Secondary teal button — "Learn about storage."
- **Visual:** Simple illustration of stacked totes or a styled product photo.

### 5.7 Pricing (`#pricing`)
- **Background:** `--color-surface`.
- **Heading:** "Pick your pack. We'll handle the rest."
- **Subhead:** "All packages include free delivery, free pickup, and a 1-week rental. Need more time? Easy extensions available."
- **Layout:** 3 pricing cards side by side (centered). Middle card highlighted.
- **Card spec:**
  - Default: `--color-brand-light` background, `--color-brand` text.
  - Highlighted ("Most popular"): `--color-brand` background, white text. Slightly taller (raised via `transform: translateY(-8px)`).
  - "Most popular" badge: coral pill, positioned above the highlighted card.
  - Tier name: 12px uppercase label.
  - Price: 28px, weight 500.
  - Description: "X totes · 2 week rental."
  - CTA: "Book this" — white button on highlighted card, teal button on default cards.
- **Tiers:**
  - Dorm room — $49 — 15 totes
  - Apartment — $89 — 30 totes *(Most popular)*
  - Full house — $129 — 50 totes
- **Below pricing cards:** Small muted line: "Need a custom quote for a larger move? [Contact us]."

### 5.8 Student Reviews (`#reviews`)
- **Background:** `--color-base`.
- **Heading:** "Students who've moved the smart way."
- **Layout:** 3 review cards in a row. Each card:
  - Star rating: `--color-accent` (amber), "★★★★★".
  - Quote: 13px, `--color-text-primary`, italic, in quotation marks.
  - Attribution: 12px, `--color-text-muted` — "First name L., School Name 'YY".
  - Card: white bg, border, `--radius-lg`.
- **Placeholder reviews:**
  - "Easiest move of my life. No tape, no boxes collapsing." — Jordan M., Mizzou '26
  - "Dropped them off the night before finals week. Genuinely saved me." — Priya K., WashU '25
  - "I've moved three times with MO Totes. Never going back to cardboard." — Marcus L., SLU '24

### 5.9 FAQ (`#faq`)
- **Background:** `--color-surface`.
- **Heading:** "Good questions."
- **Layout:** Accordion. Single column, max-width 700px, centered.
- **Accordion behavior:** One item open at a time. Smooth CSS height transition.
- **Questions:**
  1. How clean are the totes? *(Sanitized between every rental.)*
  2. What if I need the totes longer than a week? *(Easy extensions, just let us know.)*
  3. Do I have to be home for delivery and pickup? *(Delivery yes; pickup can be porch drop.)*
  4. What if a tote gets damaged? *(Minor damage — no charge. Major damage — replacement fee applies.)*
  5. How many totes do I actually need? *(Guide: 1 drawer = 1 tote. 15 for a dorm, 30 for a 1BR.)*
  6. Do you serve my campus? *(Link to campus list / form to request a campus.)*

### 5.10 Final CTA Banner (`#cta-banner`)
- **Background:** `--color-brand` (teal).
- **Layout:** Full-width, centered text + button side by side on desktop, stacked on mobile.
- **Headline:** "Moving day is closer than you think." — 24px, weight 500, white.
- **Subhead:** "Free delivery. Free pickup. No cardboard drama." — 14px, white at 75% opacity.
- **CTA:** "Book your totes →" — white fill, `--color-brand` text, `--radius-md`.
- **Optional:** If near peak move-in season (late July–August, early January), show a countdown to the next major move-in weekend.

### 5.11 Footer
- **Background:** `#2C2C2A` (slate).
- **Text color:** White / `rgba(255,255,255,0.65)` for secondary.
- **Columns:** Logo + tagline | Links | Campuses | Social.
- **Bottom bar:** "© 2026 MO Totes · Made with less cardboard."

---

## 6. Components

### Button
```
Primary (orange):  bg #EA580C, text white, border-radius var(--radius-md), padding 12px 24px, font-size 14px, weight 500
Primary hover:     bg #C2460A
Secondary (green): bg transparent, border 2px solid #16A34A, text #16A34A, same sizing
Secondary hover:   bg #DCFCE7
Ghost:             bg transparent, border 1.5px solid #111827, text #111827
On dark bg:        bg white, text #16A34A, border-radius var(--radius-md), same sizing
All buttons:       transition: all 0.15s ease; cursor: pointer; white-space: nowrap;
```

### Badge / Pill
```
Green:  bg #DCFCE7, color #14532D, border-radius 100px, padding 4px 12px, font-size 12px, weight 500
Orange: bg #FFF7ED, color #9A3412
Amber:  bg #FEF3C7, color #92400E
```

### Card
```
bg: white
border: 1px solid #D3D1C7
border-radius: var(--radius-lg)  /* 14px */
padding: 20px 24px
```

### Step number circle
```
width: 40px; height: 40px;
border-radius: 50%;
background: #16A34A;
color: white;
font-size: 15px; font-weight: 500;
display: flex; align-items: center; justify-content: center;
```

---

## 7. Copy

### Hero Headline Options
- **Option A (emotion-first):** "Moving day doesn't have to be a disaster."
- **Option B (solution-first):** "Pack. Move. Done. We handle the boxes."
- **Option C (contrast):** "Ditch the cardboard. Rent the good stuff."

### Hero Subhead
"Reusable plastic totes delivered to your dorm or apartment — we drop them off, you fill them up, we pick them up. Built for college move-in and move-out."

### CTA Labels
- Primary button: "Get your totes →"
- Secondary button: "See how it works"
- Final banner button: "Book your totes →"
- Nav button: "Book now"

### Trust badge (above hero headline)
"No cardboard. No tape. No stress."

### Section Headings
- How it works: "Four steps, zero cardboard drama."
- Why totes: "Why students are switching."
- Storage: "Need somewhere to stash your stuff between semesters?"
- Pricing: "Pick your pack. We'll handle the rest."
- Reviews: "Students who've moved the smart way."
- FAQ: "Good questions."
- Final CTA: "Moving day is closer than you think."

---

## 8. Mobile Responsiveness

- **Breakpoints:** `480px` (small mobile), `768px` (tablet), `1024px` (desktop).
- All section headings scale down ~25% on mobile.
- 4-column grids → 2-col tablet → 1-col mobile.
- 3-column pricing cards → stack vertically on mobile (highlighted card first).
- Nav collapses to hamburger below `768px`.
- Hero CTAs stack vertically on mobile.
- Trust bar wraps or scrolls on mobile.
- Minimum tap target: `44px × 44px` for all interactive elements.

---

## 9. Performance & SEO Notes

- Use `next/image` or equivalent for all images (lazy load, WebP).
- Hero section must be LCP-optimized — no large unoptimized images above the fold.
- All section IDs must be present for anchor links from nav.
- Page `<title>`: "MO Totes — Reusable Tote Rentals for College Students"
- Meta description: "Rent reusable plastic totes for your college move-in or move-out. We deliver, you pack, we pick up. No cardboard, no tape, no stress."
- OG image: Hero section screenshot, 1200×630.

---

## 10. Tech Recommendations

- **Framework:** Next.js (App Router) or Astro for a mostly static marketing site.
- **Styling:** Tailwind CSS (configure custom tokens to match the color system above) or CSS Modules.
- **Animations:** Framer Motion for scroll-triggered reveals (fade-up on section entry). Keep animations subtle — `duration: 0.4s`, `y: 20px → 0`.
- **Booking/form:** Link out to a third-party booking tool (Calendly, JotForm) or build a simple multi-step form component.
- **Fonts:** Load via `next/font` (Google Fonts) to avoid layout shift.
