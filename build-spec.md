# Build Spec — Technical Companion to design.md

> **How to use:** paste this alongside `design.md` (and a filled-in Project Context) whenever starting a new site build. `design.md` governs how the site looks and moves; this file governs *how it gets built*. Unlike `design.md`, this one isn't tied to the "Midnight Scrapbook" look — reuse it even if you swap in a different design system later.

---

## Stack
- **Framework:** Next.js (React) for a real, deployable project. Plain HTML/CSS/JS if it just needs to be a single-page build or a quick artifact.
- **Animation:** GSAP + ScrollTrigger for scroll-linked reveals, GSAP Draggable (or Embla/Swiper) for carousels, Lenis for smooth inertia scrolling.
- **Styling:** Tailwind CSS for speed, with `design.md`'s color/type tokens wired in as CSS variables or a Tailwind theme extension — never hard-code a hex that isn't in the token table.
- **Fonts:** self-hosted or Google Fonts, per `design.md`'s type table.

## Folder structure (React/Next.js)
```
/src
  /components
    Nav.jsx
    StatusBar.jsx
    Cursor.jsx
    StatBadge.jsx
    CaseStudyCarousel.jsx
  /sections
    Hero.jsx
    Origin.jsx
    Proof.jsx
    Work.jsx
    Contact.jsx
  /styles
    tokens.css       ← design.md's color/type tokens as CSS variables
    globals.css
  /lib
    animations.js     ← GSAP timelines / ScrollTrigger setup
  App.jsx
```

## Build order
Work in this sequence so progress is checkable at every step, not just at the end:
1. Design tokens (CSS variables from `design.md`) + font loading.
2. Static layout for every chapter, zero animation — confirms content and hierarchy work before motion is layered on.
3. Persistent chrome: pill nav, status bar, custom cursor.
4. Section-by-section animation, one chapter at a time.
5. Carousel and hover/drag interactions last — highest complexity, least critical to core comprehension.
6. Mobile pass — simplified choreography, per `design.md` §7.
7. Accessibility + reduced-motion pass.

## Quality checklist before calling it done
- [ ] Every color and font in the code traces back to a token in `design.md` — no ad-hoc hex codes.
- [ ] Real content only — no lorem ipsum, no placeholder stats.
- [ ] Reduced-motion is respected and the page stays fully usable with it on.
- [ ] Keyboard navigation works; focus states are visible.
- [ ] Heavy animation doesn't tank load time — sanity-check performance.
- [ ] A screenshot/self-review pass against `design.md`'s intent happens before presenting — cut anything that reads as generic.

## The part no file replaces
Both files together are the brief, not the craft. The highest-quality results still come from building a first pass, looking at it, comparing it against `design.md`'s intent, cutting whatever reads as templated, and refining — the same loop a human designer would run. These files exist to make that loop fast and consistent, not to skip it.
