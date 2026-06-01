# COPILOT TASK 01 — FOUNDATION & LAYOUT
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 2  
**Priority:** CRITICAL — must complete before all other tasks  
**Depends on:** Nothing (first task)

---

## Goal

Scaffold the complete Next.js 14 App Router project with Tailwind CSS configured to the Luminous Nexus design system, RTL layout, IBM Plex Sans Arabic font, and the shared layout shell (navbar + sidebar + main content area + footer slot).

---

## Tech Stack Requirements

- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS v3
- `next/font` with IBM Plex Sans Arabic from Google Fonts
- `clsx` and `tailwind-merge` for class utilities
- No other dependencies without Maestro approval

---

## Allowed Files (Create/Edit)

```
package.json
package-lock.json
tsconfig.json
next.config.ts
tailwind.config.ts
postcss.config.js
.gitignore
src/app/layout.tsx
src/app/globals.css
src/app/page.tsx              (placeholder only — full landing page is Task 03)
src/components/layout/Navbar.tsx
src/components/layout/Sidebar.tsx
src/components/layout/PageShell.tsx
src/components/layout/Footer.tsx   (placeholder — full footer is Task 02)
src/lib/utils.ts
src/types/index.ts
public/favicon.ico
```

---

## Forbidden Files

```
docs/**                          DO NOT TOUCH
stitch_darhous_marketing_hub/**  DO NOT TOUCH
.env.local                       DO NOT CREATE (Maestro handles)
```

---

## Tailwind Configuration

Copy these exact color tokens into `tailwind.config.ts` from the Stitch source:

```
stitch_darhous_marketing_hub/stitch_darhous_marketing_hub/brand_voice_builder_darhous_marketing_hub/code.html
```

Extract the `tailwind.config` object (lines 11–80 approx) and place into `tailwind.config.ts`.

Required additions beyond Stitch tokens:
```ts
fontFamily: {
  arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
},
```

Ensure `darkMode: 'class'` is set.

---

## HTML Root Attributes

`src/app/layout.tsx` must set on the `<html>` element:
```tsx
<html lang="ar" dir="rtl" className="dark">
```

---

## Font Loading

Use `next/font/google` in `layout.tsx`:
```tsx
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})
```

Apply `ibmPlexArabic.variable` to the `<body>` className.

---

## Navbar Component (`src/components/layout/Navbar.tsx`)

- Fixed top, full width
- Height: 64px
- Background: `rgba(17, 19, 27, 0.85)` with `backdrop-filter: blur(20px)`
- Border-bottom: 1px solid `rgba(255,255,255,0.06)`
- Logo on the RIGHT (RTL — logo is the primary element)
- Nav links flow RIGHT to LEFT
- Mobile: hamburger menu on LEFT
- Must include a placeholder logo text: **درهوس** in `text-primary` color
- Navigation items (Arabic labels):
  - الرئيسية → `/`
  - مساراتي → `/paths`
  - لوحة التحكم → `/dashboard`
  - الأدوات → `/tools`
  - القوالب → `/templates`

---

## Sidebar Component (`src/components/layout/Sidebar.tsx`)

- Right-side sidebar (RTL)
- Width: 240px on desktop, hidden on mobile
- Background: `surface-container-low` (`#191b24`)
- Border-left: 1px solid `rgba(255,255,255,0.06)`
- Contains icon + label navigation links for all 13 routes
- Use Material Symbols Outlined icons (loaded via `<link>` in layout)
- Active state: `primary-container` background, `on-primary-container` text
- Collapsed state on tablet (icons only, 64px width)

---

## PageShell Component (`src/components/layout/PageShell.tsx`)

Wrapper for all pages:
```tsx
// Applies consistent padding and max-width
// Accepts `title`, `children` props
// Shows page title as h1 with display-lg typography
```

---

## globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  direction: rtl;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #11131b;
  color: #e2e1ee;
  font-family: var(--font-arabic), sans-serif;
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #11131b; }
::-webkit-scrollbar-thumb { background: #3a494b; border-radius: 3px; }
```

---

## Placeholder Home Page (`src/app/page.tsx`)

Just a placeholder:
```tsx
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-primary text-4xl font-bold">درهوس — قادم قريباً</h1>
    </main>
  )
}
```

---

## .gitignore

Must include at minimum:
```
node_modules/
.next/
.env.local
.env.*.local
*.log
.DS_Store
```

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes (zero errors)
- [ ] `npx tsc --noEmit` passes (zero TypeScript errors)
- [ ] Browser shows dark background `#11131b`
- [ ] `dir="rtl"` confirmed in browser DevTools on `<html>`
- [ ] IBM Plex Sans Arabic renders in browser
- [ ] Navbar visible and fixed at top
- [ ] No console errors

---

## Validation Command

```bash
cd C:\Users\ahmed\Desktop\parrelled\social
npm run build && npm run lint && npx tsc --noEmit
```

---

## Handoff Note to Maestro

When complete, update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 01 Complete — [date]
- next build: PASS/FAIL
- lint: PASS/FAIL
- tsc: PASS/FAIL
- Notes: ...
```

Maestro will then create the Stage 2 git checkpoint before Task 02 begins.
