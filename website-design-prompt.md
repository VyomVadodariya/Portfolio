# Midnight Scrapbook — Reusable Website Design Prompt
*A creative-portfolio design system, reverse-engineered from a screen recording of bajkamalsingh.me (Aug 2026)*

> **How to use this file:** paste everything below the next line into a new chat, then fill in the **Project Context** section at the very bottom with details about the site you want built. Everything above stays the same across projects — that's the point of saving this file.

---

You are designing and building a website. Follow this design system precisely, adapting it to the real content and subject given in **Project Context** at the end. Do not reuse any of the specific copy, photos, stats, or personal details described below as if they were real — they belonged to the original site this system was reverse-engineered from. Reuse the *patterns*, never the *content*.

## 1. Style identity
**Midnight Scrapbook**: late-night, hands-on creative-studio energy. A tactile corkboard/notebook aesthetic — pinned photos, torn paper, hand-inked doodles — meets a meta, personality-forward interface (a living status bar, a custom cursor, witty first-person copy) and confident, data-driven storytelling (bold stat badges, a case-study carousel). It should feel like flipping through someone's actual notebook and portfolio at 1am, not browsing a template.

## 2. Design tokens

### Color
All hex values are sampled from a compressed screen recording — treat as close approximations, not exact brand specs.

| Token | Hex | Use |
|---|---|---|
| Midnight Indigo | `#12166B` | Primary background — hero & narrative chapters |
| Electric Blue | `#1C2FE3` | Primary accent — active nav state, highlights, CTAs, key headline words |
| Deep Teal | `#114D4D` | Secondary chapter background, status bar |
| Ink Black | `#050506` | Grounding neutral — photo-heavy chapters, footer |
| Warm Cream | `#EAE5DA` | Light contrast chapter (paper/notebook feel) |
| Coral (accent) | `#D8503F` | Stat-badge highlight — use sparingly |
| Tan (accent) | `#E4CFAE` | Secondary stat-badge, dashed outline |
| Caution Yellow (accent) | `#F2C230` | Tag / call-out labels |

Rule: 2–3 colors carry each chapter (one dark ground + electric blue + at most one accent). Never mix two accent colors in the same viewport.

### Type
The real typefaces are unrecoverable from a video capture — use these close, freely-licensed matches instead:

| Role | Do | Google Fonts match |
|---|---|---|
| Display wordmark | One huge, confident brush/marker-script logotype — the hero's centerpiece, used once | Caveat (Bold), Kalam (Bold), Shantell Sans |
| Signature script | Flowing cursive for the person/brand's name and sign-off moments, distinct from the wordmark | Homemade Apple, Sacramento, Dancing Script |
| Headline | Bold, tight grotesk for chapter titles and layered two-tone word-stacks (§3) | Archivo Black, General Sans (Bold), Clash Display |
| Body | Clean, restrained sans for paragraphs and captions | Inter, General Sans (Regular) |
| Data / numerals | Same as Headline, heaviest weight, tabular figures | — |

### Layout concept
Full-viewport, vertically-stacked "chapters" — treat each section like a page in a book, not an infinite scroll — with two pieces of persistent chrome:

```
┌────────────────────────────────────────────┐
│ Brand   ·   rotating one-liner   · Seen 42%│  ← living status bar (fixed top)
├────────────────────────────────────────────┤
│                                              │
│            ONE FULL-VIEWPORT CHAPTER        │
│         (hero / origin story / proof /      │
│            work / contact — see §4)         │
│                                              │
│               ⚬ cursor follows               │
│                                              │
│   [Home][Origin][Work][Projects][Contact]   │  ← floating pill nav (fixed bottom)
└────────────────────────────────────────────┘
```

### Signature move
The original's single most memorable device is a **living status bar**: it mimics OS/browser chrome, but the center text is a rotating, first-person one-liner tied to whichever chapter is on screen, and the right side is a live "You've seen X%" scroll-progress readout. Paired with the tactile scrapbook transitions, it makes the whole site feel personally narrated.

Don't copy this literally onto every project. Invent **one** equally strong signature move that's true to the new brief — reserve your boldest idea for this single element and keep everything else disciplined around it.

## 3. Recurring components
- **Persistent pill nav** — fixed, bottom-center, rounded-full, dark-navy background; the current chapter gets a solid electric-blue highlight that updates on scroll.
- **Living status bar** — fixed top strip; left = name/brand, center = rotating contextual one-liner, right = scroll-progress percentage.
- **Custom cursor** — default is a small hollow ring replacing the system cursor; swaps for a labeled icon (e.g. a pin + "drag to explore") over specific interactive zones. Disable entirely on touch devices.
- **Tactile transitions** — bridge chapters with analog metaphors (paper unfolding, a photo dropping into place, tape/pins) instead of plain fades.
- **Hand-ink connectors** — single-stroke doodle lines and handwritten-style annotations with arrows, used as connective tissue between story beats, like margin notes.
- **Stat badge** — big bold number + short label on a small colored card, tilted a few degrees for a "stuck-on" feel. Real numbers only, never placeholders.
- **Layered two-tone headline** — two words stacked/overlapping, each in a different font/weight/color (script + bold grotesk is the base pairing). Used for every chapter title.
- **Case-study carousel** — one dark card at a time: project name in a color-block tab, 2–3 outcome bullets, a row of 3 stat columns at the base, circular prev/next controls, plus a decorative "journey" motif and marquee ticker underneath. Root that motif in something real and local to the new project — don't reuse a transit-map metaphor unless it's genuinely relevant.
- **Sign-off footer** — a warm, informal goodbye line plus a large cursive signature as the final visual beat.

## 4. Suggested chapter flow
Adapt freely, but this backbone is what made the original work:
1. **Hero** — huge wordmark, one-line positioning, a compact "career so far" mini-timeline, scroll cue.
2. **Origin** — a short, true, first-person story of how this person/brand started. Specific and a little vulnerable beats generic.
3. **Proof** — a "why this matters to me" statement plus 3–4 real stat badges.
4. **Work** — the case-study carousel (§3).
5. **More work / visuals** — a lighter, browsable gallery moment; good place for the custom-cursor "explore" interaction.
6. **Contact + sign-off** — one low-friction contact method (e.g. a mailto link, not a form), social links, and the footer.

## 5. Motion principles
- Scroll drives almost everything — reveals are scroll-linked, not autoplay.
- Spend the one big, orchestrated animation moment on the signature move (§2); keep the rest quiet and functional.
- Hover/drag interactions are seasoning, never load-bearing — content must be reachable without them.
- Respect `prefers-reduced-motion`: same content and hierarchy with transitions stripped, not a broken page.

## 6. Voice & content
- First-person, informal, a little funny, never corporate.
- The origin story and every stat must be true to whoever this new site is for — invent nothing.
- Data is told as a story ("...and pulled off a launch that hit X") not a resume bullet.
- Sign-off has personality; skip generic "Thanks for visiting."

## 7. Implementation notes
- Scroll-linked reveals: GSAP + ScrollTrigger, or Framer Motion in a React/Next.js build.
- Smooth inertia scrolling: Lenis.
- Custom cursor: one fixed-position element following `mousemove`, swapped via state/class near hover targets; skip on touch.
- Marquee/ticker strips: CSS `@keyframes` translate loop.
- Carousel: GSAP Draggable, Embla, or Swiper.
- Build mobile as a deliberately simplified sibling (fewer concurrent animated layers, larger tap targets) — same palette, type, and voice, calmer choreography. Don't just hide the desktop version.
- Baseline quality bar: visible keyboard focus states, real alt text, semantic headings, a working reduced-motion fallback.

## 8. Non-negotiables
- Ground every color/type/layout choice in the **new** project's actual content — this is a system to think with, not a skin to paste on.
- Take exactly one genuine aesthetic risk per project and keep the rest disciplined.
- Only use numbered/sequence markers (01/02/03…) if the content is a real sequence.
- Avoid generic AI-design tells: cream-and-terracotta serif pages, near-black-with-one-neon-accent minimalism, hairline-rule broadsheet layouts. This indigo/electric-blue/teal/cream palette already departs from those — keep it that way.

---

## Project Context — fill in for every new site, then send
- **Who/what is this site for**:Vyom Vadodariya — a second-year B.Tech Computer Science (AI/ML) student at REVA University, Bengaluru. Personal portfolio focused on AI/ML, software engineering, hackathons, and future quantitative/AI engineering.
- Their real origin story (1–2 true, specific sentences):Vyom started in computer science with a strong interest in AI/ML and building real-world systems rather than only studying theory. He has already worked on projects involving autonomous AI systems, campus safety, computer vision, and hackathons while developing toward a career in AI/quant engineering.
-**Sections/pages needed**:Hero
About Me
Skills / Tech Stack
Projects
Achievements
Education
Certifications
Hackathons / Experience
Resume
Contact
-**Real achievements or numbers to feature, if any**: B.Tech CS (AI/ML), REVA University, Bengaluru
1st-year student
Karate Black Belt
State Football Captain
State Taekwondo Champion
IEEE member
Built AI/ML and computer-vision projects
IBM certifications: Python for Data Science, Data Visualization, Data Analysis
GitHub: VyomVadodariya
- **Tone**:Witty, confident, first-person, technically sharp. Avoid sounding like a generic student portfolio. The site should communicate builder + ambitious AI engineer, not just “student looking for opportunities.”
- **Must-include content, links, or constraints**:GitHub: https://github.com/VyomVadodariya
Name: Vyom Vadodariya
Title: AI/ML Student | Hackathon Builder | Future Quant/AI Engineer
Skills: Machine Learning, Deep Learning, Python, C, AI/ML development
Projects should be presented as real engineering work with clear problem → solution → technology → outcome structure.
Design: minimal, premium, highly polished, animated.
Preferred visual direction: light theme, powder blue + cream + white.
Include
