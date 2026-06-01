# PRODUCTION LAUNCH CHECKLIST
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Sign-off required:** Ahmed Darhous

---

## Build & Technical

- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero errors
- [ ] `npx tsc --noEmit` passes with zero TypeScript errors
- [ ] No `console.error` or `console.warn` in production build
- [ ] No `any` types in component props
- [ ] No missing `key` props in lists
- [ ] All `next/image` used instead of raw `<img>`
- [ ] All internal links use `next/link`

## Routes & Pages

- [ ] `/` — Landing page renders
- [ ] `/paths` — Learning paths page renders
- [ ] `/paths/[slug]` — Path detail renders for all 3 paths
- [ ] `/dashboard` — Dashboard renders with mock data
- [ ] `/tools` — Tools hub renders all 7 tools
- [ ] `/calendar` — Content calendar renders week view
- [ ] `/campaign-planner` — All 5 steps functional
- [ ] `/persona-builder` — Form + live preview working
- [ ] `/brand-voice` — All sections + sliders working
- [ ] `/post-generator` — Generates mock posts
- [ ] `/templates` — Grid + modal working
- [ ] `/glossary` — Search filter working
- [ ] `/integration` — Page renders
- [ ] `/admin-ready` — Page renders

## Design & UI

- [ ] Dark background `#11131b` on all pages
- [ ] IBM Plex Sans Arabic renders correctly
- [ ] RTL layout correct on all pages (sidebar right, content flows left)
- [ ] Luminous Nexus color tokens applied consistently
- [ ] Glassmorphic cards render correctly
- [ ] All hover animations working (cards, buttons, footer icons)
- [ ] Gradient buttons render with Cyan→Violet gradient
- [ ] No hardcoded colors outside design tokens

## Footer

- [ ] Footer appears on all pages
- [ ] Bottom signature bar: 4 social icon buttons (no text)
- [ ] Instagram link: https://www.instagram.com/darhous/
- [ ] LinkedIn link: https://www.linkedin.com/in/darhous/
- [ ] Facebook link: https://www.facebook.com/ahmed.darhous
- [ ] WhatsApp link: https://wa.me/201030002331
- [ ] All social links open in `_blank`
- [ ] All social links have `rel="noopener noreferrer"`
- [ ] Signature text: `designed by Ahmed Darhous ©` — exact wording
- [ ] "Ahmed Darhous" links to `mailto:ahmeddarhous@gmail.com`
- [ ] No legal links in signature bar
- [ ] Footer icon hover: rise + scale 1.1 + colored shadow

## Responsive

- [ ] 375px (mobile): No horizontal overflow on any page
- [ ] 768px (tablet): Sidebar collapsed, navigation accessible
- [ ] 1280px (desktop): Full layout visible
- [ ] Touch targets ≥ 44x44px on all interactive elements
- [ ] Footer signature centered on all widths

## Accessibility

- [ ] `lang="ar"` on `<html>`
- [ ] `dir="rtl"` on `<html>`
- [ ] All icon-only buttons have `aria-label`
- [ ] One `<h1>` per page
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] All interactive elements have `focus-visible` ring

## SEO & Meta

- [ ] Page `<title>` set for all 13 routes
- [ ] Meta description set for all 13 routes
- [ ] Favicon present in `/public`

## Security

- [ ] `.env.local` in `.gitignore`
- [ ] No API keys or secrets in source code
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] All external links have `rel="noopener noreferrer"`

## Git & Deploy

- [ ] All staged files reviewed (no accidental secret commits)
- [ ] Final commit message follows convention
- [ ] Pushed to origin/main
- [ ] `docs/agent-reports/COPILOT_HANDOFF_LOG.md` up to date
- [ ] `docs/agent-reports/CODEX_QA_REPORT.md` filed with final scores

---

**Launch Approved by:** ______________________  
**Date:** ______________________
