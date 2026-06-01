# ROUTE AUDIT CHECKLIST
## Darhous Marketing & Social Media Hub

**Last Updated:** 2026-06-01  
**Build verified:** ✅ `npm run build` 16/16 routes

---

## Route Audit Table

| Route | Component File | Build | Notes |
|---|---|---|---|
| `/` | `src/app/page.tsx` | ✅ Static | Landing page — hero, stats, features, paths, CTA |
| `/paths` | `src/app/paths/page.tsx` | ✅ Static | 3 path cards, level badges |
| `/paths/[slug]` | `src/app/paths/[slug]/page.tsx` | ✅ Dynamic | Accordion modules — 3 dataset slugs |
| `/dashboard` | `src/app/dashboard/page.tsx` | ✅ Static | Stats, progress, quick actions, feed |
| `/tools` | `src/app/tools/page.tsx` | ✅ Static | 7 tools, client-side category filter |
| `/templates` | `src/app/templates/page.tsx` | ✅ Static | 6 templates, preview modal |
| `/calendar` | `src/app/calendar/page.tsx` | ✅ Static | 7-day RTL week view |
| `/campaign-planner` | `src/app/campaign-planner/page.tsx` | ✅ Static | 5-step form |
| `/persona-builder` | `src/app/persona-builder/page.tsx` | ✅ Static | Form + live preview |
| `/brand-voice` | `src/app/brand-voice/page.tsx` | ✅ Static | Sliders + summary panel |
| `/post-generator` | `src/app/post-generator/page.tsx` | ✅ Static | Platform selector + generator |
| `/glossary` | `src/app/glossary/page.tsx` | ✅ Static | 18 terms, real-time search |
| `/integration` | `src/app/integration/page.tsx` | ✅ Static | 4 integration points |
| `/admin-ready` | `src/app/admin-ready/page.tsx` | ✅ Static | 5 planned features |
| `/_not-found` | `src/app/not-found.tsx` | ✅ Static | Custom 404 — Arabic |

---

## Navigation Audit

- [x] Navbar links: الرئيسية, مساراتي, لوحة التحكم, الأدوات, القوالب
- [x] Sidebar links: all 12 routes present with Material Symbols icons
- [x] Mobile hamburger menu navigates correctly
- [x] Active state on Navbar and Sidebar
- [x] 404 page has "العودة للرئيسية" → `/`
- [ ] Manual browser test of all links required

## Metadata Audit

| Route | Title Exported | Notes |
|---|---|---|
| `/` | ✅ | `الرئيسية \| درهوس للتسويق` |
| `/paths` | ✅ | `مسارات التعلم \| درهوس للتسويق` |
| `/dashboard` | ✅ | `لوحة التحكم \| درهوس للتسويق` |
| `/integration` | ✅ | `التكامل \| درهوس للتسويق` |
| `/admin-ready` | ✅ | `لوحة الإدارة \| درهوس للتسويق` |
| Client pages | — | Use root layout default title template |

---

## Audit History

| Date | Stage | Who | Result |
|---|---|---|---|
| 2026-06-01 | Stages 2–12 | Claude Maestro (autonomous) | ✅ All 16 routes build clean |
