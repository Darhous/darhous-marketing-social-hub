# PRODUCTION LAUNCH CHECKLIST
## Darhous Marketing & Social Media Hub

**Last Updated:** 2026-06-01  
**Verified by:** Claude (Maestro — autonomous execution)

---

## Build & Technical

- [x] `npm run build` completes with zero errors ✅ (16/16 routes)
- [x] `npm run lint` passes with zero errors ✅
- [x] `npx tsc --noEmit` passes with zero TypeScript errors ✅
- [x] No `console.error` or `console.warn` in production build
- [x] No `any` types in component props
- [x] No missing `key` props in lists
- [x] All `next/image` used instead of raw `<img>` (no images in current build)
- [x] All internal links use `next/link`

## Routes & Pages

- [x] `/` — Landing page (hero, stats, features, paths preview, CTA)
- [x] `/paths` — Learning paths page (3 paths, level badges)
- [x] `/paths/[slug]` — Path detail (accordion modules, 3 datasets)
- [x] `/dashboard` — Dashboard (stats, progress, quick actions, feed)
- [x] `/tools` — Tools hub (7 tools, category filter)
- [x] `/calendar` — Content calendar (7-day RTL week view)
- [x] `/campaign-planner` — 5-step campaign form
- [x] `/persona-builder` — Form + live preview
- [x] `/brand-voice` — Sliders + do/don't lists + summary panel
- [x] `/post-generator` — Platform selector + mock generator
- [x] `/templates` — 6 templates, preview modal
- [x] `/glossary` — 18 terms, real-time search
- [x] `/integration` — 4 integration points, status badges
- [x] `/admin-ready` — 5 planned features with "قريباً" badges
- [x] Custom 404 page (`/not-found.tsx`)

## Design & UI

- [x] Dark background `#11131b` on all pages
- [x] IBM Plex Sans Arabic renders correctly (via next/font/google)
- [x] RTL layout: `dir="rtl"` on `<html>`, sidebar on right
- [x] Luminous Nexus color tokens in tailwind.config.ts
- [x] Glassmorphic cards (`.glass` class: backdrop-blur, border)
- [x] Hover animations on cards (glow-card class)
- [x] Gradient buttons (gradient-primary: cyan→violet)
- [x] Material Symbols Outlined loaded via CSS @import

## Footer — Darhous Spec

- [x] Footer on all pages via root layout
- [x] `'use client'` directive (has mouse event handlers)
- [x] Bottom signature bar: 4 social icon buttons (no text labels)
- [x] Instagram → `https://www.instagram.com/darhous/` ✅
- [x] LinkedIn → `https://www.linkedin.com/in/darhous/` ✅
- [x] Facebook → `https://www.facebook.com/ahmed.darhous` ✅
- [x] WhatsApp → `https://wa.me/201030002331` ✅
- [x] All social links: `target="_blank"` + `rel="noopener noreferrer"`
- [x] Signature text: `designed by Ahmed Darhous ©` — exact wording ✅
- [x] "Ahmed Darhous" → `mailto:ahmeddarhous@gmail.com` ✅
- [x] No legal links in signature bar ✅
- [x] Hover: translateY(-3px) scale(1.1) + colored shadow ✅
- [x] `border-top: 1px solid rgba(255,255,255,0.05)` ✅
- [x] `padding-top: 1.5rem`, `flex-direction: column`, `align-items: center` ✅
- [x] Buttons: 36×36px, `rounded-xl` (12px), icon-only ✅

## Responsive

- [x] Navbar: mobile hamburger menu working
- [x] Sidebar: hidden on mobile, fixed on desktop (lg:flex)
- [x] AppShell: `lg:mr-60` offset for sidebar on desktop
- [x] Feature grids: 1-col mobile → 2-col tablet → 3-col desktop
- [x] Stats strip: 2×2 mobile → 4-col desktop
- [ ] Manual test at 375px, 768px, 1280px required

## Accessibility

- [x] `lang="ar"` on `<html>`
- [x] `dir="rtl"` on `<html>`
- [x] All icon-only buttons have `aria-label` (social icons in footer, navbar hamburger)
- [x] Focus rings: `*:focus-visible` with cyan outline in globals.css
- [x] One `<h1>` per page (via PageShell or inline)
- [x] External links: `rel="noopener noreferrer"`

## SEO & Meta

- [x] Root layout: title template `%s | درهوس للتسويق`
- [x] `/` — metadata exported ✅
- [x] `/dashboard` — metadata exported ✅
- [x] `/paths` — metadata exported ✅
- [x] `/integration` — metadata exported ✅
- [x] `/admin-ready` — metadata exported ✅
- [ ] Client component pages use root layout default (acceptable for launch)

## Security

- [x] `.env.local` in `.gitignore`
- [x] `stitch_darhous_marketing_hub/` in `.gitignore`
- [x] No API keys or secrets in source code
- [x] No `dangerouslySetInnerHTML`
- [x] All external links have `rel="noopener noreferrer"`
- [x] `node_modules/`, `.next/` in `.gitignore`

## Git & Deploy

- [x] `node_modules/` never committed (.gitignore)
- [x] `.next/` never committed (.gitignore)
- [x] `.gitattributes` added for consistent line endings
- [x] All staged files reviewed before commit
- [x] Final commit format: `[STAGE-11+12] MAESTRO: final polish and QA`
- [x] Pushed to origin/main

---

**Next recommended step:** Manual browser test at 375px + 1280px.  
Then optionally: deploy to Vercel via `vercel --prod` or GitHub Vercel integration.

**Launch Approved by:** Ahmed Darhous  
**Date:** 2026-06-01
