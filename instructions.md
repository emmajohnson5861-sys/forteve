# Forteve Agency - React Architecture & AI Prompt Guidelines (`instructions.md`)

Welcome to the **Forteve** frontend development repository. This document serves as the **master system prompt and architectural rulebook** for all AI models (and developers) generating React components, pages, sections, or styles for Forteve.

---

## 1. Core Architecture & Layout Symmetry

Every page and section must strictly adhere to unified structural and grid constraints to maintain design symmetry across the entire website.

### 1.1 Responsive Container System
- **Desktop (min-width: 1441px):** Inner content container maximum width is fixed at `1600px` centered (`margin-inline: auto`).
- **Laptop / Large Tablet (1025px - 1440px):** Full width layout (`width: 100%`) with mandatory `padding-inline: 30px` (or `px-7.5` / `2rem`).
- **Tablet / Mobile (<= 1024px):** Container `width: 100%` with responsive gutter padding (`padding-inline: 20px` to `16px`).

### 1.2 Layout Skeleton Standard
Every section created must follow this semantic JSX structure:

```jsx
<section id="unique-section-id" className="site-section sec-[identifier]">
  <div className="site-container sec-[identifier]__container">
    <div className="section-header sec-[identifier]__header">
      <span className="section-badge sec-[identifier]__badge">Sub-heading / Tag</span>
      <h2 className="section-title sec-[identifier]__title">Main Section Title</h2>
      <p className="section-description sec-[identifier]__description">
        Supporting copy or section description.
      </p>
    </div>
    
    <div className="section-content sec-[identifier]__content">
      {/* Component core elements / grids / cards */}
    </div>
  </div>
</section>
```

---

## 2. Strict BEM Class Naming & Snapshot Prompt Symmetry

When creating components from screenshots, wireframes, or AI design snapshots:
1. **Never invent random class names** like `.about-text-wrapper-2` or `.cool-box-inner`.
2. **Dual-class convention is mandatory**:
   - **Global Shared Class (Symmetry):** Ensures uniform typography, baseline alignment, and global overrides.
   - **Unique Scoped Class (Modifier):** Unique to that specific section for custom offsets or animations.

### Dual-Class Taxonomy Matrix:
| Element | Global Symmetrical Class | Section-Specific Scoped Class | Example for "Services" |
| :--- | :--- | :--- | :--- |
| **Parent Section** | `.site-section` | `.sec-[name]` + `id="sec-[name]"` | `class="site-section sec-services" id="sec-services"` |
| **Inner Container** | `.site-container` | `.sec-[name]__container` | `class="site-container sec-services__container"` |
| **Section Header** | `.section-header` | `.sec-[name]__header` | `class="section-header sec-services__header"` |
| **Section Eyebrow** | `.section-badge` | `.sec-[name]__badge` | `class="section-badge sec-services__badge"` |
| **Section Heading** | `.section-title` | `.sec-[name]__title` | `class="section-title sec-services__title"` |
| **Section Subtitle** | `.section-subtitle` | `.sec-[name]__subtitle` | `class="section-subtitle sec-services__subtitle"` |
| **Description** | `.section-description` | `.sec-[name]__desc` | `class="section-description sec-services__desc"` |
| **Cards / Grid items** | `.content-card` | `.sec-[name]__card` | `class="content-card sec-services__card"` |
| **Media / Images** | `.media-wrapper`, `.media-img` | `.sec-[name]__media-img` | `class="media-img sec-services__media-img"` |
| **Buttons / CTA** | `.btn-primary` / `.btn-secondary` | `.sec-[name]__btn` | `class="btn-primary sec-services__cta-btn"` |

---

## 3. Global Design Tokens (Theme, Fonts & Colors)

Do **not** hardcode hex colors or arbitrary font sizes directly inside section CSS or inline styles. Always reference CSS custom properties (`var(--token)`) or Tailwind theme tokens.

```css
:root {
  /* Brand Theme Variables (Populated via user color scheme) */
  --forteve-primary: #0A0A0B;
  --forteve-accent: #6366F1;
  --forteve-accent-hover: #4F46E5;
  --forteve-bg: #0F1015;
  --forteve-surface: #181920;
  --forteve-text: #F3F4F6;
  --forteve-text-muted: #9CA3AF;
  --forteve-border: rgba(255, 255, 255, 0.08);

  /* Typography Scale */
  --font-family-primary: 'Mona Sans', system-ui, -apple-system, sans-serif;
  --font-family-heading: 'Mona Sans Narrow', system-ui, sans-serif;

  /* MANDATORY RULE: Whenever 'Mona Sans Narrow' is used, text MUST be transformed to uppercase (text-transform: uppercase) */

  --text-display: clamp(2.5rem, 5vw, 4.25rem);
  --text-h1: clamp(2rem, 4vw, 3.25rem);
  --text-h2: clamp(1.75rem, 3vw, 2.5rem);
  --text-h3: clamp(1.35rem, 2.2vw, 1.85rem);
  --text-body: 1rem;
  --text-lead: 1.125rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;

  /* Layout Breakpoints & Containers */
  --container-max-w: 1600px;
  --gutter-desktop: 30px;
  --gutter-mobile: 16px;
}
```

---

## 4. GSAP Animation Standards & Best Practices

Forteve uses GSAP for smooth interactive agency interactions. To avoid hydration mismatch, memory leaks, and layout jitter:

1. **Always use `useGSAP` hook** from `@gsap/react` scoped to a component reference container.
2. **Proper Cleanup**: Never use naked `gsap.to()` without context; let `useGSAP` auto-revert triggers when components unmount.
3. **ScrollTrigger Registration**: Ensure ScrollTrigger is registered safely once on the client side.
4. **GPU Acceleration**: Animate `transform` (`x`, `y`, `scale`, `rotation`) and `opacity` only. Never animate `top`, `left`, `margin`, or `width/height`.

### GSAP Component Pattern:
```jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.from('.sec-hero__title', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="sec-hero" ref={containerRef} className="site-section sec-hero">
      <div className="site-container sec-hero__container">
        <h1 className="section-title sec-hero__title">Building High-Impact Digital Experiences</h1>
      </div>
    </section>
  );
};
```

---

## 5. Security & Hardening Protocol

Zero-trust, client-side & application security measures must be embedded into every generated component:

1. **XSS Protection**:
   - Strictly prohibit `dangerouslySetInnerHTML`. If markdown or rich text is required, sanitize through `DOMPurify` first.
2. **Safe Hyperlinks**:
   - Every external anchor link (`target="_blank"`) **must** include `rel="noopener noreferrer"`.
3. **Form & Data Sanitation**:
   - All forms must feature CSRF token validation and client-side input masking/validation (e.g., Zod + React Hook Form).
   - Sanitize all strings before outputting to the DOM.
4. **Secret Management**:
   - Never expose API secret keys in client-side bundles. Use `VITE_` or `NEXT_PUBLIC_` only for public tokens, keeping all privileged interactions on secure server endpoints.
5. **Clickjacking & Security Headers**:
   - Ensure deployment includes `Content-Security-Policy (CSP)`, `X-Frame-Options: DENY`, and `X-Content-Type-Options: nosniff`.

---

## 6. Speed Optimization & Clean-Code Architecture

Every line of code must justify its existence. No bloated templates, dead dependencies, or placeholder overhead.

1. **Dead Code Elimination**:
   - Do not import entire libraries (e.g., avoid `import * as Lucide from 'lucide-react'`; import only specific icons `import { ArrowRight } from 'lucide-react'`).
   - Remove all unused props, console logs, and legacy comments before delivering code.
2. **Asset Handling**:
   - Use lightweight, optimized image formats (`.webp`, `.avif`, `.svg`).
   - Always declare explicit `width`, `height`, and `loading="lazy"` on non-hero images to avoid Cumulative Layout Shift (CLS).
   - Mark above-the-fold hero images with `priority` or `loading="eager"` and `fetchpriority="high"`.
3. **Bundle Splitting & Lazy Loading**:
   - Heavy interactive widgets (interactive 3D models, rich text editors, modals) must be dynamic/lazy-loaded:
     ```jsx
     const ProjectModal = React.lazy(() => import('./ProjectModal'));
     ```
4. **Font Optimization**:
   - Preload primary fonts, use `font-display: swap`, and subset character ranges where applicable.

---

## 7. AI Output Checklist (Enforce Before Delivering Code)

Before presenting any React code to the user, ensure it satisfies this checklist:
- [ ] Uses `.site-section sec-[name]` with unique `id="sec-[name]"`.
- [ ] Adheres to inner container constraint: `1360px` on desktop, `width: 100%` with `30px` inline padding on 1025px-1440px.
- [ ] Heading, badge, and description contain both symmetrical class names (`.section-title`) and component-specific classes (`.sec-[name]__title`).
- [ ] Uses CSS variables / design tokens for fonts, colors, and responsive scale.
- [ ] GSAP uses `@gsap/react` with cleanup and GPU-friendly attributes (`x`, `y`, `opacity`).
- [ ] No inline styling (`style={{...}}`) except for dynamic computational values.
- [ ] No insecure external links, no unescaped strings, zero `dangerouslySetInnerHTML`.
- [ ] Clean imports without redundant packages or unused variables.


Styling Rule: Hybrid Tailwind CSS (@layer components)
Always follow a hybrid Tailwind + structured component class approach:

Use Symmetrical Component Classes for Core Layout & Typography:

Do not generate long strings of text utilities for common elements.

Use the pre-defined component classes: .site-container, .section-header, .section-title, .section-subtitle, .section-description, .btn-primary.

Configure container and recurring typography rules inside CSS @layer components:

CSS
@layer components {
  .site-container {
    width: 100%;
    margin-inline: auto;
    padding-inline: 1.25rem;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    .site-container {
      padding-inline: 30px;
    }
  }
  @media (min-width: 1441px) {
    .site-container {
      max-width: 1600px;
      padding-inline: 0;
    }
  }
}
Use Tailwind Utilities Exclusively for Layout & Micro-Adjustments:

Use utility classes only for flexbox/grid alignments, specific gap spacing, unique margins, and display toggles (e.g., flex items-center justify-between gap-6, grid grid-cols-1 md:grid-cols-3, mt-8, hidden lg:flex).

GSAP Target Cleanliness:

Keep classes clean on animated elements so GSAP can target them cleanly (e.g., <h2 className="section-title sec-hero__title mt-4"> instead of a 30-class utility string).
