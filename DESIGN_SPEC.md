# Design Specification: Payal Kapse Portfolio (Layers Design)

**Source Project:** `projects/14847673129003069680`  
**Screen Title:** Payal Kapse - 3D Stacked Glass Cards Portfolio  
**Design Reference Files:**
- HTML: [`design-reference/layers-desktop.html`](file:///f:/portfolio/design-reference/layers-desktop.html)
- Screenshot: [`design-reference/layers-desktop.png`](file:///f:/portfolio/design-reference/layers-desktop.png)

---

## 1. Typography System

### Font Families
- **Headlines & Editorial Titles:** `Newsreader` (Serif; styles: Regular 400, Medium 500, SemiBold 600, Italic 400).
- **Body & Paragraphs:** `Inter` (Sans-serif; weights: 400, 500, 600).
- **Labels, Badges, Metrics & Code:** `JetBrains Mono` (Monospace; weights: 400, 500, letter-spacing: `0.04em` to `0.06em`).
- **Icons:** `Material Symbols Outlined` (Google Fonts icon font; optical size 20..48, weight 100..700).

### Font Scale & Line Heights
| Token / Utility | Font Family | Size | Line Height | Weight | Letter Spacing |
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

---

## 2. Color Palette & Usage

### Primary Action & Accents
| Hex / RGBA | Name / Role | Specific Usages in Design |
| :--- | :--- | :--- |
| `#E0558F` / `rgb(224, 85, 143)` | **Action Accent (Primary Brand)** | Primary CTA buttons (`View Projects`, `Send Message`, `Inspect Details` on featured), active modal link (`Launch Live Demo`), Download Resume button, user avatar icon background, pulsing status dot, italicized `"AI video."` keyword in hero h1, focus outline on active inputs, live link hover states. |
| `#F472A8` / `rgb(244, 114, 168)` | **Atmospheric Accent** | Ambient hero radial blooms (`rgba(244, 114, 168, 0.2)`), active border on center hero card (`1.5px solid #F472A8`), border on featured project card (`1px solid #F472A8`), fanned card border state, vertical timeline rail start color, timeline indicator dot, input focus ring glow (`rgba(244, 114, 168, 0.25)`), soft card elevation shadows. |
| `#FCE4EC` / `rgb(252, 228, 236)` | **Soft Blush Tint (Surface/Badge Fill)** | Header role pill background, hero `"PORTFOLIO 2026"` pill, discipline icon card background, project tech chips background, inactive project card `"Inspect Details"` button background, modal prev/next button background, experience date pill background, email card background in contact section, browser mockup bar in modal. |
| `#F3D3DF` / `rgb(243, 211, 223)` | **Structural Outline** | 1px border perimeter on all frosted glass cards (Hero, Skills, Projects, Modal, Experience, Contact), divider lines (`border-top: 1px solid #F3D3DF`), dashed dividers on hero cards, tag pill outlines, form input borders. |

### Neutrals, Text & Canvas
| Hex | Role | Specific Usages |
| :--- | :--- | :--- |
| `#1C1C28` / `rgb(28, 28, 40)` | **Primary Ink** | All section headlines (`h1`, `h2`), card titles (`h3`), brand name in navbar, direct email link text, primary action button text on white buttons, input typed text. |
| `#55556A` | **Muted Ink (Body)** | Section descriptions, body copy, card body descriptions, technical spec labels, timestamps, contact location description. |
| `#897177` | **Input Placeholder / Outline** | Input field placeholders (`placeholder-[#897177]`), secondary border definition. |
| `#DCBFC7` | **Outline Variant** | Header border bottom (`border-outline-variant/40`), footer border top (`border-outline-variant/40`). |
| `#FCF8FF` | **Canvas Background** | Base page background (`bg-background`). |
| `#FFFFFF` | **Pure White / Base Glass** | Frosted glass card surfaces (at 75% to 94% opacity), button text on primary actions, white button backgrounds, modal background. |

### Tailwind Color Tokens (From Config)
- `primary`: `#A82763` | `primary-container`: `#C8427C` | `primary-fixed`: `#FFD9E3` | `on-primary-fixed`: `#3E001F`
- `secondary`: `#A43367` | `secondary-container`: `#FE7AB0` | `secondary-fixed`: `#FFD9E4` | `on-secondary-container`: `#760743`
- `tertiary`: `#67585E` | `tertiary-container`: `#817076` | `tertiary-fixed`: `#F3DDE4` | `surface-variant`: `#E3E0F2`
- `surface-container`: `#EFECFD` | `surface-container-low`: `#F5F2FF` | `surface-container-high`: `#E9E6F7` | `surface-dim`: `#DBD8E9`

---

## 3. Section Spacing & Layout Rhythm

- **Global Page Container:** `max-w-[1240px]` centered, horizontal padding: `px-5` (`px-margin-mobile`: `1.25rem`) on mobile, `px-12` (`px-margin`: `3rem`) on desktop.
- **Fixed Header:** `h-20` (80px), fixed top-0, `z-50`, `bg-white/75 backdrop-blur-md border-b border-outline-variant/40`.
- **Main Top Offset:** `pt-20` (80px) to clear fixed header.
- **Hero Section:** `pb-24 lg:pb-36` (96px to 144px bottom padding), `pt-10 lg:pt-16` (40px to 64px top padding).
- **Skills Section (`#skills`):** `py-24` (96px top and bottom).
- **Projects Section (`#projects`):** `py-24` (96px top and bottom).
- **Experience Section (`#experience`):** `py-24` (96px top and bottom), container `max-w-[960px]`.
- **Contact Section (`#contact`):** `py-24` (96px top and bottom), container `max-w-[1040px]`.
- **Footer:** `mt-space-xl` (56px / `3.5rem`), `py-space-lg` (32px / `2rem`), `border-t border-outline-variant/40`.
- **Header-to-Content Cadence within Sections:** Section headers have `mb-14` or `mb-16` (56px - 64px) margin-bottom before content cards.

---

## 4. Card Radii, Border & Shadow Styles

### 1. Hero 3D Deck Cards
- **Radius:** `rounded-3xl` (`24px`).
- **Dimensions:** Width `310px` (mobile) / `350px` (desktop), center highlight card width `320px` / `370px`. Padding: `p-7 md:p-8`.
- **Default Card Style (Cards 1, 2, 4):**
  - Background: `rgba(255, 255, 255, 0.78)` to `rgba(255, 255, 255, 0.82)`
  - Backdrop Blur: `backdrop-filter: blur(16px)`
  - Border: `1px solid #F3D3DF`
  - Shadow: `0 16px 40px -8px rgba(244, 114, 168, 0.18)`
- **Center Highlight Card (Card 3: AI Video):**
  - Background: `rgba(255, 255, 255, 0.90)`
  - Backdrop Blur: `backdrop-filter: blur(20px)`
  - Border: `1.5px solid #F472A8`
  - Shadow: `0 24px 54px -6px rgba(224, 85, 143, 0.32)`
- **3D Transform Coordinates (Perspective: 1200px):**
  - *Stacked State:*
    - Card 1: `translateX(-210px) rotate(-10deg) translateZ(0px)`
    - Card 2: `translateX(-105px) rotate(-5deg) translateZ(10px)`
    - Card 3: `translateX(0px) rotate(0deg) translateZ(30px)`
    - Card 4: `translateX(105px) rotate(5deg) translateZ(10px)`
  - *Fanned Out State (on click / hover):*
    - Card 1: `translateX(-360px) rotate(-8deg) translateZ(10px)`
    - Card 2: `translateX(-180px) rotate(-4deg) translateZ(20px)`
    - Card 3: `translateX(0px) rotate(0deg) translateZ(40px)`
    - Card 4: `translateX(180px) rotate(4deg) translateZ(20px)`
    - Card 5 (Spec): `translateX(360px) rotate(8deg) translateZ(10px)`

### 2. Skills Grid Cards (4 columns)
- **Radius:** `rounded-2xl` (`16px`).
- **Background:** `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(16px)`.
- **Border:** `1px solid #F3D3DF`.
- **Shadow:** `0 12px 40px rgba(244, 114, 168, 0.15)`.
- **Hover:** `transform -translate-y-2` (transition duration 300ms).

### 3. Projects Showcase Cards (4 columns)
- **Radius:** `rounded-2xl` (`16px`).
- **Standard Card (Cards 1, 3, 4):**
  - Background: `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(16px)`
  - Border: `1px solid #F3D3DF`
  - Shadow: `0 12px 40px rgba(244, 114, 168, 0.12)`
- **Featured Card (Card 2: Neural Flow Graph):**
  - Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)`
  - Border: `1px solid #F472A8` plus `ring-2 ring-primary/20`
  - Shadow: `0 16px 44px rgba(244, 114, 168, 0.20)`
- **Hover:** `transform hover:-translate-y-2 hover:shadow-xl`, image `group-hover:scale-105`.

### 4. Project Modal Overlay Card
- **Overlay:** `fixed inset-0 z-50 bg-black/40 backdrop-blur-md`.
- **Card Container:** `max-w-4xl max-h-[921px] rounded-3xl p-6 md:p-10`.
- **Radius:** `rounded-3xl` (`24px`).
- **Background:** `rgba(255, 255, 255, 0.94)` with `backdrop-filter: blur(24px)`.
- **Border:** `1px solid #F3D3DF`.
- **Shadow:** `0 24px 64px -12px rgba(224, 85, 143, 0.25)`.

### 5. Experience Timeline Cards (Vertical Stack)
- **Radius:** `rounded-2xl` (`16px`), `p-7 md:p-8`.
- **Background:** `rgba(255, 255, 255, 0.78)` with `backdrop-filter: blur(16px)`.
- **Border:** `1px solid #F3D3DF`.
- **Shadow:** `0 12px 40px rgba(244, 114, 168, 0.12)`.
- **Hover:** `transform hover:-translate-y-1`.
- **Timeline Rail:** `w-[2px] pointer-events-none` with `linear-gradient(to bottom, #F472A8, #FCE4EC)`. Indicator: `w-3.5 h-3.5 rounded-full ring-4 ring-white bg-[#F472A8]`.

### 6. Contact Large Glass Card
- **Radius:** `rounded-3xl` (`24px`), `p-8 md:p-12`.
- **Background:** `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(20px)`.
- **Border:** `1px solid #F3D3DF`.
- **Shadow:** `0 16px 48px rgba(244, 114, 168, 0.16)`.

---

## 5. Button Styles & Hover States

### 1. Primary Solid Pill Button
- **HTML Class:** `inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0`
- **Styles:** `background-color: #E0558F; box-shadow: 0px 8px 24px -4px rgba(224, 85, 143, 0.35);`
- **Hover State:** `hover:-translate-y-0.5`, background shifts brightness/container, shadow blooms to `rgba(224, 85, 143, 0.40)`.

### 2. Secondary White / Outline Pill Button
- **HTML Class:** `inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium transition-all duration-300 transform hover:-translate-y-0.5`
- **Styles:** `background-color: #FFFFFF; color: #E0558F; border: 1px solid #E0558F; box-shadow: 0px 4px 16px rgba(244, 114, 168, 0.10);`
- **Hover State:** `hover:-translate-y-0.5`, background subtle tint shift.

### 3. Hero Interactive Mode Toggle Button
- **HTML Class:** `group flex items-center gap-2 px-4 py-2 rounded-full font-label-sm text-label-sm transition-all duration-300`
- **Styles:** `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); border: 1px solid #F3D3DF; color: #1C1C28;`
- **Hover State:** Icon rotates 45 degrees (`group-hover:rotate-45`).

### 4. Inset "Inspect Details" Button (Project Cards)
- **Standard Variant:** `w-full py-2.5 rounded-full font-label-sm text-[12px] font-medium transition-colors; background-color: #FCE4EC; color: #E0558F; border: 1px solid #F3D3DF;`
- **Featured Variant:** `w-full py-2.5 rounded-full font-label-sm text-[12px] font-medium text-white transition-all shadow-sm; background-color: #E0558F;`

### 5. Modal Carousel Arrows & Close Trigger
- **Arrow Buttons:** `w-9 h-9 rounded-full flex items-center justify-center text-[#1C1C28] hover:text-primary transition-colors; background-color: #FCE4EC; border: 1px solid #F3D3DF;`
- **Close Button:** `w-9 h-9 rounded-full flex items-center justify-center text-[#55556A] hover:text-[#1C1C28] transition-colors; background: rgba(255, 255, 255, 0.8); border: 1px solid #F3D3DF;`

### 6. Social Channels Grid Buttons
- **HTML Class:** `flex items-center gap-2 px-4 py-2.5 rounded-xl font-label-sm text-[12px] text-[#1C1C28] hover:text-primary transition-colors`
- **Styles:** `background: rgba(255, 255, 255, 0.85); border: 1px solid #F3D3DF;`

---

## 6. Exact Section Order & Copy

### Navigation Header
- **Brand Logo:** `Payal Kapse` (Newsreader SemiBold 22px).
- **Discipline Badge:** `Creative Technologist` (JetBrains Mono uppercase 11px, fill `#FCE4EC`, text `#E0558F`).
- **Nav Links:**
  - `About` (href: `#about`)
  - `Skills` (href: `#skills`)
  - `Projects` (href: `#projects`)
  - `Creative` (href: `#creative`)
  - `Experience` (href: `#experience`)
  - `Contact` (href: `#contact`)
- **Nav Actions:**
  - `Download Resume` (Pill button in `#E0558F`, white text)
  - Profile Avatar: `32px x 32px` circle with `person` material icon.

---

### Section 1: Hero ("3D Stack & Fan-Out Interaction")
- **Top Badge:** `PORTFOLIO 2026` (Pill with pulsing dot, fill `#FCE4EC`, border `#F3D3DF`, text `#E0558F`).
- **H1 Headline:**
  > `"Developer who also markets, designs and creates "` `<span class="italic font-normal text-primary">AI video.</span>`
- **Subtext:**
  > `"2nd-year Computer Science student exploring scalable code, synthetic AI video, and high-impact digital design."`
- **Hero CTAs:**
  - `View Projects` (Primary `#E0558F` pill)
  - `Download Resume` (White outline pill with `download` icon)
- **Deck Toggle Button:** `view_carousel` icon + `"Click to Fan Out Cards"` (toggles to `layers` icon + `"Click to Restack Cards"`).
- **Hero 3D Overlapping Glass Cards:**
  - **Card 1 (`01 / TECH`):**
    - Icon: `code` (in `48px x 48px` rounded-2xl `#FCE4EC` container)
    - Tag: `01 / TECH`
    - Title: `Frontend`
    - Description: `Next-gen UI, React, state trees, fluid micro-interactions.`
    - Visual element: Progress bars (3/4 width and 1/2 width pills).
  - **Card 2 (`02 / CORE`):**
    - Icon: `database`
    - Tag: `02 / CORE`
    - Title: `Backend`
    - Description: `FastAPI, Python nodes, distributed queues, data pipelines.`
    - Visual element: Progress bars (4/5 width and 2/3 width pills).
  - **Card 3 (`SYNTHETIC` - Center Highlight):**
    - Icon: `videocam` (in `#E0558F` container, white icon)
    - Tag: `SYNTHETIC`
    - Title: `AI Video`
    - Description: `Gen-3 prompt chains, temporal coherence, spatial sound design.`
    - Footer link: `play_circle Generative Motion Lab`
  - **Card 4 (`04 / GROWTH`):**
    - Icon: `insights`
    - Tag: `04 / GROWTH`
    - Title: `Marketing`
  - *(Note on Card 5: Defined in JS motion fan matrices with index 4 corresponding to Graphic Design / Aesthetics).*

---

### Section 2: Skills ("Disciplines & Focus Areas")
- **ID:** `skills`
- **Section Overline:** `SKILLS / FANNED STACK`
- **H2 Headline:** `Disciplines & Focus Areas`
- **Section Intro Paragraph:** `A disciplined cross-section bridging technical software engineering with high-touch aesthetic direction.`
- **4 Focus Area Cards:**
  1. **Development:**
     - Tag: `ENGINEERING` | Icon: `terminal`
     - Title: `Development`
     - Description: `Building responsive, accessible web systems, full-stack microservices, and reactive user interfaces.`
     - Chips: `React / Next.js`, `TypeScript`, `Python`, `Tailwind CSS`
  2. **Digital Marketing:**
     - Tag: `STRATEGY` | Icon: `trending_up`
     - Title: `Digital Marketing`
     - Description: `Data-backed acquisition funnels, behavioral audience segmentation, and organic search engineering.`
     - Chips: `Growth SEO`, `Social Reach`, `Meta Ads`, `Funnel Analytics`
  3. **AI Video Creation:**
     - Tag: `GENERATIVE` | Icon: `movie_filter`
     - Title: `AI Video Creation`
     - Description: `Pioneering narrative workflows using state-of-the-art diffusion motion models and post-production craft.`
     - Chips: `Runway Gen-3`, `Midjourney v6`, `Premiere Pro`, `Prompt Chains`
  4. **Graphic Design:**
     - Tag: `AESTHETICS` | Icon: `draw`
     - Title: `Graphic Design`
     - Description: `Editorial typography, modular design systems, brand guidelines, and high-conversion graphic collateral.`
     - Chips: `Canva Pro`, `Figma`, `Editorial Type`, `Visual Identity`

---

### Section 3: Selected Work ("Projects")
- **ID:** `projects`
- **Section Overline:** `SELECTED WORK`
- **H2 Headline:** `Functional systems built with precision.`
- **Badge:** `4 Featured Production Builds`
- **4 Project Cards:**
  1. **Aura Engine:**
     - Type: `WEB APP` | Overline: `01 / COMMERCE`
     - Title: `Aura Engine`
     - Description: `High-frequency editorial storefront with predictive catalog pre-fetching and headless checkout.`
     - Tech Chips: `React`, `TypeScript`, `Tailwind`, `FastAPI`
     - Action Links: `Live Demo ↗`, `GitHub <code>`, Button: `Inspect Details`
  2. **Neural Flow Graph (Featured Project):**
     - Type: `FEATURED` | Overline: `02 / DATA ENGINE`
     - Title: `Neural Flow Graph`
     - Description: `Real-time distributed network visualizer tracking pipeline concurrency and sub-millisecond latencies.`
     - Tech Chips: `Python`, `FastAPI`, `D3.js`, `Redis`
     - Action Links: `Live Demo ↗`, `GitHub <code>`, Button: `Inspect Details` (solid `#E0558F`)
  3. **TokenSync Hub:**
     - Type: `DESIGN OPS` | Overline: `03 / DESIGN TECH`
     - Title: `TokenSync Hub`
     - Description: `Automated Figma-to-code compiler generating type-safe CSS variables and token artifacts.`
     - Tech Chips: `Vue.js`, `Vite`, `Figma API`, `Node`
     - Action Links: `Live Demo ↗`, `GitHub <code>`, Button: `Inspect Details`
  4. **CinePrompt Studio:**
     - Type: `CREATIVE AI` | Overline: `04 / SYNTHESIS`
     - Title: `CinePrompt Studio`
     - Description: `Choreographing dynamic camera vectors and seed orchestration for generative video clips.`
     - Tech Chips: `Next.js`, `WebGL`, `Runway API`, `Python`
     - Action Links: `Live Demo ↗`, `GitHub <code>`, Button: `Inspect Details`

---

### Section 4: Project Detail Modal Overlay
- **ID:** `project-detail-overlay`
- **Header:**
  - Counter: `02 / 04 — FEATURED PROJECT`
  - Tag: `Distributed Systems`
  - Navigation: Previous / Next Chevron Pills (`chevron_left`, `chevron_right`)
  - Close: Circle button (`close`)
- **Left Column (Mockup Window):**
  - Simulated browser chrome bar with 3 dots and URL: `https://neural-flow.payalkapse.dev`
  - High-res dashboard preview image
- **Right Column (Metadata & Details):**
  - Title: `Neural Flow Graph`
  - Description: `Scalable full-stack application integrating neural generation workflows, latency benchmarks, and real-time state orchestration across web workers.`
  - Stack Chips: `Python`, `FastAPI`, `D3.js`, `Redis`
  - Benchmark Box: `Benchmark Result` - `Throughput & Query Latency` → `4.8x speedup`
  - Buttons: `Launch Live Demo` (solid `#E0558F`), `View Repository` (white outline)

---

### Section 5: Trajectory ("Experience")
- **ID:** `experience`
- **Section Overline:** `TRAJECTORY`
- **H2 Headline:** `Academic milestones & professional work.`
- **3 Timeline Experience Cards:**
  1. **Full-Stack & Creative Tech Intern:**
     - Status: `2025 – Present`
     - Organization: `Studio Aura Interactive • San Francisco / Remote`
     - Description: `Co-architected client-facing web surfaces using Next.js and Tailwind CSS. Implemented automated AI video render pipelines with Runway Gen-3 API for interactive marketing campaigns, increasing engagement by 32%.`
  2. **Digital Growth & Content Strategist:**
     - Status: `2024 – 2025`
     - Organization: `HyperPulse Media Lab • Mumbai`
     - Description: `Directed content architecture across multi-channel campaigns. Conducted funnel analytics and SEO discovery optimization, generating over 1.4M organic impressions for developer-focused educational media.`
  3. **B.Tech in Computer Science & Engineering:**
     - Status: `2024 – 2028`
     - Organization: `Department of Computer Science • Sophomore Year`
     - Description: `Specializing in Data Structures, Algorithm Complexity, Discrete Mathematics, and Computer Vision. Active tech lead at the campus Media & Code guild, coordinating creative tech workshops.`

---

### Section 6: Communication ("Contact")
- **ID:** `contact`
- **Section Overline:** `COMMUNICATION`
- **H2 Headline:** `Let's build something remarkable.`
- **Subtext:** `Currently open to high-impact internships, creative engineering collaborations, and AI video direction.`
- **Left Side: Interactive Form:**
  - Input: `Your Full Name` (placeholder: `e.g. Clara Morgan`)
  - Input: `Email Address` (placeholder: `clara@example.com`)
  - Textarea: `Project or Opportunity Note` (placeholder: `Tell me about your project, timeline, or open role...`, rows: 4)
  - Submit Button: `Send Message` (icon: `send`)
- **Right Side: Direct Channels & Presence:**
  - Primary Inbox Box: `Primary Inbox` → `hello@payalkapse.dev` (arrow icon `arrow_forward`, links to `mailto:hello@payalkapse.dev`)
  - Availability Note: `Based in India (UTC +5:30). Typically responding within 24 hours to engineering, research, and creative inquiries.`
  - Presence Links: `LinkedIn`, `GitHub`, `X (Twitter)`, `Showreel`

---

### Section 7: Footer
- **Copyright:** `© 2026 Payal Kapse. Crafted with care & code.`
- **Footer Nav Links:** `LinkedIn`, `GitHub`, `Email`, `X`
