# ROUTE AUDIT CHECKLIST
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Run after:** Each Copilot task stage that introduces new routes

---

## Route Audit Table

Run `npm run build` and verify each route renders without error.  
Check each at 375px (mobile) and 1280px (desktop).

| Route | Component File | Renders | Mobile OK | Desktop OK | Build OK | Notes |
|---|---|---|---|---|---|---|
| `/` | `src/app/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/paths` | `src/app/paths/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/paths/[slug]` | `src/app/paths/[slug]/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | Test all 3 slugs |
| `/dashboard` | `src/app/dashboard/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/tools` | `src/app/tools/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/templates` | `src/app/templates/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/calendar` | `src/app/calendar/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/campaign-planner` | `src/app/campaign-planner/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/persona-builder` | `src/app/persona-builder/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/brand-voice` | `src/app/brand-voice/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/post-generator` | `src/app/post-generator/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/glossary` | `src/app/glossary/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/admin-ready` | `src/app/admin-ready/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |
| `/integration` | `src/app/integration/page.tsx` | ⬜ | ⬜ | ⬜ | ⬜ | |

---

## Navigation Audit

- [ ] Navbar links correctly navigate to all routes
- [ ] Sidebar links correctly navigate to all routes
- [ ] Back buttons work (dashboard CTAs, path detail, etc.)
- [ ] All CTA buttons navigate to correct routes (no broken links)
- [ ] No `<a href="#">` placeholders in final build
- [ ] Browser back/forward works on all routes

## 404 Handling

- [ ] Unknown route shows a styled 404 page (Arabic: الصفحة غير موجودة)
- [ ] 404 page has "العودة للرئيسية" link → `/`
- [ ] 404 page uses Luminous Nexus theme

## Metadata Audit

| Route | Has `<title>` | Has `<meta description>` |
|---|---|---|
| `/` | ⬜ | ⬜ |
| `/paths` | ⬜ | ⬜ |
| `/dashboard` | ⬜ | ⬜ |
| `/tools` | ⬜ | ⬜ |
| `/templates` | ⬜ | ⬜ |
| `/calendar` | ⬜ | ⬜ |
| `/campaign-planner` | ⬜ | ⬜ |
| `/persona-builder` | ⬜ | ⬜ |
| `/brand-voice` | ⬜ | ⬜ |
| `/post-generator` | ⬜ | ⬜ |
| `/glossary` | ⬜ | ⬜ |
| `/admin-ready` | ⬜ | ⬜ |
| `/integration` | ⬜ | ⬜ |

---

## Audit History

| Date | Stage | Who | Result |
|---|---|---|---|
| — | — | — | — |
