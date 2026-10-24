# Project Brief: Payal Kapse Portfolio (Layers Design)

## 1. Project Overview & Objectives

- **Candidate Profile:** Payal Kapse — 2nd-year Computer Science student specializing in:
  - **Full-Stack Development** (Next-gen UI, React/Next.js, TypeScript, Python, FastAPI)
  - **Digital Marketing & Strategy** (Funnel analytics, SEO, social reach, audience acquisition)
  - **Synthetic AI Video** (Prompt engineering, Runway Gen-3, Midjourney v6, Premiere Pro, motion narrative)
  - **Graphic Design & Branding** (Editorial typography, Canva Pro, Figma, design tokens, visual identity)
- **Target Audience:** Technical recruiters, engineering hiring managers, potential freelance clients, and creative tech collaborators.
- **Design Philosophy:** Minimal, premium, editorial aesthetic featuring tactile 3D stacked glass cards, subtle blush atmospheric blooms, elegant serif typography paired with crisp monospace metadata, and responsive interactive feedback.
- **Project Goal:** Build a pixel-perfect, accessible, and high-performance web portfolio that establishes Payal as a top-tier creative technologist bridging high-caliber engineering with aesthetic direction.

---

## 2. Primary Sources of Truth & Strict Fidelity Mandate

All implementation work must strictly conform to:
1. **Design Specification:** [`DESIGN_SPEC.md`](file:///f:/portfolio/DESIGN_SPEC.md) (authoritative tokens, spacing, and copy structure)
2. **HTML Reference:** [`design-reference/layers-desktop.html`](file:///f:/portfolio/design-reference/layers-desktop.html) (markup hierarchy, CSS styles, and interaction models)
3. **Desktop Mockup Reference:** [`design-reference/layers-desktop.png`](file:///f:/portfolio/design-reference/layers-desktop.png) (visual benchmark for pixel precision)

### Strict Fidelity Principles
- **Reproduce the design pixel-faithfully:** Exact fonts, weights, colors, gradients, padding, margins, card radii, shadows, backdrop blurs, and copy structure.
- **Zero unapproved deviations:** Do **not** restyle, simplify, omit, or "improve" any element.
- **Unclear specifications:** If any interaction or styling detail is ambiguous, pause and prompt the user for clarification before assuming.

---

## 3. Technology Stack & Architecture Constraints

- **Framework:** Next.js App Router (Next.js 16.4+, React 19)
  - *Adherence:* Strict compliance with [`AGENTS.md`](file:///f:/portfolio/AGENTS.md) and the local Next.js documentation in `node_modules/next/dist/docs/`. Heed deprecation notices and breaking changes.
- **Language:** TypeScript 5+ (Strict mode, fully typed props and models)
- **Styling:** Tailwind CSS v4 + Vanilla CSS custom token variables where necessary
- **Animation & Micro-interactions:** Framer Motion (v14+)
- **Icons:** Material Symbols Outlined (`Google Fonts`)
- **Fonts:**
  - `Newsreader` (Headlines, display editorial titles)
  - `Inter` (Body, navigation, and paragraphs)
  - `JetBrains Mono` (Labels, overlines, tech chips, and metadata)
- **State & Client Directive (`"use client"`):**
  - Use Server Components by default for static sections.
  - Any component utilizing state, user events (click, hover), DOM listeners, or Framer Motion animations **must** include `"use client"` at the very top.
- **Development Cadence & Workflow Isolation:**
  - **Build strictly one section per request.**
  - **Never modify sections or files not explicitly requested by the user.**
- **Environment & Security:**
  - Never commit API keys, secrets, or sensitive credentials. All external endpoints or keys must reside in `.env.local` (included in `.gitignore`).

---

## 4. Strict Content Decoupling Architecture

No copy, metadata, project details, skill lists, or links may be hard-coded into React components. All text, numbers, metrics, and content must be imported from structured TypeScript files in `/src/content/`:

```
/src/content/
├── siteConfig.ts       # Meta tags, navigation links, personal info, resume URL, social links
├── hero.ts             # Hero badges, titles, descriptions, CTA button texts, 3D deck card data
├── skills.ts           # 4 Focus areas: tags, titles, descriptions, and technology chips
├── projects.ts         # 4 Featured projects: tags, overlines, descriptions, chips, metrics, links
├── experience.ts       # 3 Milestone items: dates, roles, organizations, locations, bullet points
└── contact.ts          # Contact overlines, descriptions, form field configs, channels, location
```

### Data Integrity Rules
- **No invented stats, clients, or project names.**
- If any project name, stat, client, or credential is not explicitly defined in the design spec or user guidance, use clear bracketed placeholders (e.g., `[Project Name]`, `[Client]`, `[Metric]`).

---

## 5. Design Tokens & Visual Specifications (from `DESIGN_SPEC.md`)

### 5.1. Typography System

| Role / Token | Font Family | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Newsreader | `56px` | `64px` | SemiBold (600) | `-0.02em` |
| `display-mobile` | Newsreader | `38px` | `44px` | SemiBold (600) | `-0.01em` |
| Hero Headline | Newsreader | `44px` (mob) / `64px` (md) / `72px` (lg) | `1.08` | SemiBold (600) | `-0.02em` |
| `headline-lg` | Newsreader | `40px` (desktop) / `32px` (mobile) | `48px` | SemiBold (600) | `-0.015em` |
| `headline-md` | Newsreader | `28px` | `36px` | SemiBold (600) | Normal |
| `headline-sm` | Newsreader | `22px` - `26px` | `30px` | SemiBold (600) | Normal |
| `body-lg` | Inter | `18px` | `28px` (`1.6`) | Regular (400) | Normal |
| `body-md` | Inter | `15px` | `24px` | Regular (400) | Normal |
| `body-sm` | Inter | `13px` | `20px` | Medium (500) | Normal |
| `label-lg` | JetBrains Mono | `13px` | `18px` | Medium (500) | `0.04em` |
| `label-sm` | JetBrains Mono | `11px` - `12px` | `16px` | Medium (500) | `0.06em` (uppercase) |

### 5.2. Color Tokens & Usage

| Hex / RGBA | Name / Role | Specific Implementation Locations |
| :--- | :--- | :--- |
| `#E0558F` / `rgb(224, 85, 143)` | **Action Accent (Primary Brand)** | Primary CTA pills (`View Projects`, `Send Message`), active modal trigger (`Launch Live Demo`), Download Resume button, user avatar background, pulsing status dots, hero headline italic keyword (`AI video.`), input focus outline. |
| `#F472A8` / `rgb(244, 114, 168)` | **Atmospheric Accent** | Ambient radial blooms (`rgba(244, 114, 168, 0.2)`), active border on center hero card (`1.5px solid #F472A8`), featured project border, vertical timeline rail gradient start, timeline dot, input focus ring glow (`rgba(244, 114, 168, 0.25)`). |
| `#FCE4EC` / `rgb(252, 228, 236)` | **Soft Blush Tint (Pill/Badge Fill)** | Header discipline badge, `PORTFOLIO 2026` badge, card icon container backgrounds, tech chips, modal prev/next button backgrounds, timeline date pills, contact email card background. |
| `#F3D3DF` / `rgb(243, 211, 223)` | **Structural Outline** | 1px border perimeter on all glass cards (Hero, Skills, Projects, Modal, Experience, Contact), horizontal card dividers (`border-top: 1px solid #F3D3DF`), dashed dividers, tag pill borders, input borders. |
| `#1C1C28` / `rgb(28, 28, 40)` | **Primary Ink** | All section headlines (`h1`, `h2`), card titles (`h3`), brand name, direct email text, typed form inputs. |
| `#55556A` | **Muted Ink (Body)** | Section subheadings, body text, card descriptions, technical metadata labels, timestamps. |
| `#897177` | **Input Placeholder / Outline** | Input field placeholders, subtle secondary outlines. |
| `#DCBFC7` | **Outline Variant** | Header border bottom (`border-b border-outline-variant/40`), footer border top (`border-t border-outline-variant/40`). |
| `#FCF8FF` | **Canvas Background** | Base background of the application. |
| `#FFFFFF` | **Pure White Base Glass** | Frosted glass card surfaces (75% to 94% opacity), primary button text, white button backgrounds. |

### 5.3. Layout Rhythm & Spacing

- **Global Page Container:** `max-w-[1240px]` mx-auto, padding `px-5` (`1.25rem` mobile) to `px-12` (`3rem` desktop).
- **Fixed Header:** `h-20` (80px), fixed top-0, `z-50`, `bg-white/75 backdrop-blur-md border-b border-outline-variant/40`.
- **Top Offset for Content:** `pt-20` (80px) on `<main>` to clear the fixed navigation.
- **Section Padding:**
  - Hero Section: `pt-10 lg:pt-16`, `pb-24 lg:pb-36`
  - Skills Section (`#skills`): `py-24` (96px top and bottom)
  - Projects Section (`#projects`): `py-24` (96px top and bottom)
  - Experience Section (`#experience`): `py-24` (96px top and bottom, max-w-[960px])
  - Contact Section (`#contact`): `py-24` (96px top and bottom, max-w-[1040px])
  - Footer: `mt-14` (56px), `py-8` (32px), `border-t border-outline-variant/40`
- **Section Header Cadence:** `mb-14` or `mb-16` (56px - 64px) margin-bottom between header group and card grids.

### 5.4. Card Radii, Glassmorphism & Elevation

- **Hero 3D Deck Cards:**
  - Radius: `rounded-3xl` (`24px`), Width: `310px` (mob) / `350px` (desktop), Center Card: `320px` / `370px`.
  - Default Card Surface: `background: rgba(255, 255, 255, 0.78-0.82)`, `backdrop-filter: blur(16px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 16px 40px -8px rgba(244, 114, 168, 0.18)`.
  - Center Highlight Card (`AI Video`): `background: rgba(255, 255, 255, 0.90)`, `backdrop-filter: blur(20px)`, `border: 1.5px solid #F472A8`, `box-shadow: 0 24px 54px -6px rgba(224, 85, 143, 0.32)`.
  - Perspective: `1200px`.
- **Skills Grid Cards (4-column):**
  - Radius: `rounded-2xl` (`16px`), `p-7`.
  - Surface: `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(16px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 12px 40px rgba(244, 114, 168, 0.15)`.
  - Hover: `transform hover:-translate-y-2` (transition 300ms).
- **Projects Showcase Cards (4-column):**
  - Radius: `rounded-2xl` (`16px`).
  - Standard Surface: `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(16px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 12px 40px rgba(244, 114, 168, 0.12)`.
  - Featured Surface (Neural Flow Graph): `background: rgba(255, 255, 255, 0.85)`, `backdrop-filter: blur(16px)`, `border: 1px solid #F472A8`, `ring-2 ring-primary/20`, `box-shadow: 0 16px 44px rgba(244, 114, 168, 0.20)`.
  - Hover: `hover:-translate-y-2 hover:shadow-xl`, image `group-hover:scale-105`.
- **Project Detail Modal Overlay:**
  - Backdrop: `fixed inset-0 z-50 bg-black/40 backdrop-blur-md`.
  - Card: `max-w-4xl max-h-[921px] rounded-3xl p-6 md:p-10`.
  - Surface: `background: rgba(255, 255, 255, 0.94)`, `backdrop-filter: blur(24px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 24px 64px -12px rgba(224, 85, 143, 0.25)`.
- **Experience Timeline Cards:**
  - Radius: `rounded-2xl` (`16px`), `p-7 md:p-8`.
  - Surface: `background: rgba(255, 255, 255, 0.78)`, `backdrop-filter: blur(16px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 12px 40px rgba(244, 114, 168, 0.12)`.
  - Timeline Rail: `w-[2px]` gradient `linear-gradient(to bottom, #F472A8, #FCE4EC)`.
  - Indicator: `w-3.5 h-3.5 rounded-full ring-4 ring-white bg-[#F472A8]`.
- **Contact Card:**
  - Radius: `rounded-3xl` (`24px`), `p-8 md:p-12`.
  - Surface: `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(20px)`, `border: 1px solid #F3D3DF`, `box-shadow: 0 16px 48px rgba(244, 114, 168, 0.16)`.

### 5.5. 3D Deck Coordinates Matrix

| Card Index & Domain | Stacked Transform | Fanned Out Transform (Click / Toggle) |
| :--- | :--- | :--- |
| **Card 0 (01 / Frontend)** | `translateX(-210px) rotate(-10deg) translateZ(0px)` | `translateX(-360px) rotate(-8deg) translateZ(10px)` |
| **Card 1 (02 / Backend)** | `translateX(-105px) rotate(-5deg) translateZ(10px)` | `translateX(-180px) rotate(-4deg) translateZ(20px)` |
| **Card 2 (AI Video - Highlight)** | `translateX(0px) rotate(0deg) translateZ(30px)` | `translateX(0px) rotate(0deg) translateZ(40px)` |
| **Card 3 (04 / Marketing)** | `translateX(105px) rotate(5deg) translateZ(10px)` | `translateX(180px) rotate(4deg) translateZ(20px)` |
| **Card 4 (05 / Graphic Design / Spec)** | `translateX(210px) rotate(10deg) translateZ(0px)` | `translateX(360px) rotate(8deg) translateZ(10px)` |

---

## 6. Mobile Derivation Strategy

The design reference is desktop-only. The mobile experience must be derived systematically without degrading aesthetics:
1. **Single Column Flow:** Multi-column grids (4-column skills, 4-column projects, 2-column contact) collapse seamlessly into clean single-column layouts on viewports `< 768px`.
2. **Navigation & Mobile Drawer:**
   - On `< 1024px` (`lg` breakpoint), hide desktop nav links and render a tactile hamburger toggle (`menu` icon).
   - Tapping opens a smooth glassmorphic slide-out or full-screen menu overlay with backdrop blur, listing all section anchors and action buttons.
3. **Touch Targets:**
   - Every interactive element (nav links, buttons, modal triggers, icons, form controls) must have a minimum tap target size of **`44px × 44px`**.
4. **Zero Horizontal Overflow:**
   - All containers must enforce `max-w-full overflow-x-hidden`.
   - On mobile screens, the Hero 3D Deck adapts gracefully to prevent side cutoffs, allowing swipe gestures or vertical stacking with horizontal scroll-snap fallback.
5. **Form & Modal Usability:**
   - Form inputs on mobile use `font-size: 16px` minimum to prevent unwanted iOS auto-zoom behavior.
   - Project Modal overlay switches to full-width drawer/bottom-sheet modal with vertical scroll for seamless reading.

---

## 7. Accessibility, Motion & Image Optimization

- **Respect `prefers-reduced-motion`:**
  - Wrap Framer Motion animations and CSS transitions in checks for reduced motion (`useReducedMotion()` hook).
  - When reduced motion is requested, replace 3D transforms and complex translations with immediate opacity reveals or static positioning.
- **Semantic HTML5:**
  - Single `<h1>` on the page inside the Hero section.
  - Proper heading hierarchy (`<h2>` for section titles, `<h3>` for cards).
  - Landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Image Optimization:**
  - Use `next/image` for all raster assets (project mockups, screenshots, avatar).
  - Explicit dimensions (`width`, `height`) or `fill` with `sizes` attributes to prevent Cumulative Layout Shift (CLS).
  - Descriptive, contextual `alt` tags on every image.
- **Color Contrast & Focus Rings:**
  - Maintain WCAG AA compliance (4.5:1 ratio for text against blush and white glass backgrounds).
  - Visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-[#E0558F] focus-visible:outline-none`).

---

## 8. Directory & Component Structure

```
f:/portfolio/
├── .env.local                          # Environment variables & private keys (git-ignored)
├── AGENTS.md                           # Next.js agent instruction set
├── DESIGN_SPEC.md                      # Authoritative design specifications & tokens
├── PROJECT_BRIEF.md                    # This document (Master implementation blueprint)
├── package.json
├── tsconfig.json
├── design-reference/
│   ├── layers-desktop.html             # Source HTML & interaction script
│   └── layers-desktop.png              # Visual benchmark image
├── public/
│   └── images/                         # Project previews, mockups, avatar
└── src/
    ├── app/
    │   ├── layout.tsx                  # Root layout, Google Fonts (Newsreader, Inter, JetBrains Mono, Material Symbols)
    │   ├── page.tsx                    # Assembled single-page portfolio
    │   └── globals.css                 # Base styles, Tailwind @theme tokens, utility classes
    ├── content/                        # Decoupled content & metadata
    │   ├── siteConfig.ts
    │   ├── hero.ts
    │   ├── skills.ts
    │   ├── projects.ts
    │   ├── experience.ts
    │   └── contact.ts
    ├── components/                     # Reusable React components (one per section)
    │   ├── Navbar.tsx                  # Fixed header, brand, links, resume CTA, mobile hamburger & drawer
    │   ├── HeroSection.tsx             # 3D interactive stacked/fanned glass deck, headline, CTAs
    │   ├── SkillsSection.tsx           # 4 Focus area cards, icon chips, hover lift
    │   ├── ProjectsSection.tsx         # 4 Showcase cards, featured card highlight, inspect triggers
    │   ├── ProjectModal.tsx            # Detail overlay, browser chrome mockup, benchmark metrics, carousel
    │   ├── ExperienceSection.tsx       # Vertical gradient timeline, milestone cards
    │   ├── ContactSection.tsx          # Dual-column interactive form + direct channels
    │   └── Footer.tsx                  # Copyright notice, social links
    └── types/                          # Shared TypeScript interfaces & models
        ├── content.ts
        └── project.ts
```

---

## 9. Section-by-Section Roadmap & Execution Rules

1. **Rule 1: One Section Per Request.**
   - We will only implement or edit the single component and content file requested by the user.
2. **Rule 2: No Side-Effect Modifications.**
   - Never alter previously built components or unrelated files unless specifically instructed.
3. **Rule 3: Test & Validate.**
   - Verify TypeScript compilation, responsive wrapping, and interactive state behavior after each section is implemented.
