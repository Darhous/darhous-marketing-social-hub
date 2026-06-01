# COPILOT TASK 03 — LANDING PAGE
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 3  
**Route:** `/`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build the main landing page — the platform's first impression. Arabic-first, futuristic glassmorphism, high-impact hero, feature showcase, learning paths preview, and CTA.

---

## Allowed Files

```
src/app/page.tsx                         (replace placeholder)
src/components/landing/Hero.tsx
src/components/landing/FeatureCards.tsx
src/components/landing/PathsPreview.tsx
src/components/landing/StatsBanner.tsx
src/components/landing/CTASection.tsx
src/components/ui/GlassCard.tsx          (shared reusable component)
src/components/ui/GradientButton.tsx     (shared reusable component)
```

---

## Page Sections (top to bottom)

### 1. Hero Section

- Full viewport height (`min-h-screen`)
- Background: `#11131b` with subtle radial gradient glow (Cyan at 5% opacity, top-right corner — RTL primary focus point)
- Content centered vertically, aligned RIGHT (RTL)
- Animated particle/grid background (subtle, CSS only — no heavy libraries)

**Content:**
```
[Eyebrow tag]   بوابة التسويق الرقمي العربية   (small pill chip, cyan border)
[H1]            أتقن التسويق الرقمي بالعربية
[Subheadline]   منصة متكاملة للتعلم والأدوات والمحتوى — مصممة للمحترفين العرب
[CTA Primary]   ابدأ رحلتك   → /paths
[CTA Ghost]     استكشف الأدوات   → /tools
[Scroll cue]    ↓ (animated bounce, centered below CTAs)
```

**Button styles:**
- Primary: Tailwind gradient `bg-gradient-to-l from-[#00dbe7] to-[#571bc1]`, white text, glow shadow on hover
- Ghost: transparent, `border border-white/10`, hover border turns `primary` color

### 2. Stats Banner

- Horizontal strip, `surface-container` background
- 4 stat items in a row (responsive: 2x2 on mobile):
  - `+١٠٠` مسار تعليمي
  - `+٥٠` أداة تسويقية
  - `+٢٠٠` قالب جاهز
  - `٣` منصات سوشيال مدعومة ← (Instagram, LinkedIn, Facebook)
- Numbers in large `text-primary` (cyan), labels in `on-surface-variant`
- Separator lines between items (`border-r border-white/10` — RTL reversed)

### 3. Feature Cards

Grid of 6 feature cards (3 cols desktop, 2 cols tablet, 1 col mobile):

| # | Arabic Title | Icon | Accent |
|---|---|---|---|
| 1 | مسارات تعليمية منظمة | `school` | Cyan |
| 2 | أدوات التسويق الذكية | `build` | Violet |
| 3 | قوالب جاهزة للنشر | `description` | Emerald |
| 4 | مخطط المحتوى | `calendar_month` | Cyan |
| 5 | باني الشخصية | `person` | Violet |
| 6 | مولّد المنشورات | `auto_awesome` | Emerald |

**Each card (GlassCard component):**
- Background: `rgba(29, 31, 40, 0.7)` with `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(255,255,255,0.08)`
- `border-radius: 24px` (`rounded-3xl`)
- Icon in accent color with low-opacity background circle
- Arabic title (`headline` weight 600)
- 1-line Arabic description
- Hover: border opacity increases, faint radial gradient from top-right corner

### 4. Learning Paths Preview

- Section title (right-aligned): `ابدأ من هنا`
- Subtitle: `ثلاثة مسارات تعليمية — من المبتدئ إلى المحترف`
- 3 horizontal path cards (scroll on mobile)
- Each card: path name (Arabic), level badge, module count, CTA arrow button → `/paths`
- Path names (from Gemini output — use placeholders if not yet available):
  - مبادئ التسويق الرقمي — مبتدئ
  - إدارة السوشيال ميديا — متوسط
  - بناء الحملات التسويقية — متقدم

### 5. CTA Section

- Background: gradient strip `from-[#00dbe7]/10 to-[#571bc1]/10`
- Large centered Arabic headline: `جاهز للبدء؟`
- Subtext: `انضم إلى آلاف المسوقين العرب`
- Single CTA button: `ابدأ مجاناً` → `/paths`

---

## Shared UI Components

### `GlassCard.tsx`
```tsx
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean   // enables hover state animation
}
```

### `GradientButton.tsx`
```tsx
interface GradientButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}
```

---

## Acceptance Criteria

- [ ] All 5 sections render without errors
- [ ] Hero is full viewport height
- [ ] Arabic text renders correctly (RTL)
- [ ] CTA buttons navigate to correct routes
- [ ] Feature cards have hover animation
- [ ] Stats banner is responsive (2x2 on mobile)
- [ ] Page is mobile-responsive (check at 375px width)
- [ ] `next build` passes after this task
- [ ] No `any` TypeScript types introduced

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 03 Complete — [date]
- Landing page sections: [list any missing]
- Mobile responsive: YES/NO
- Build passes: YES/NO
- Notes: ...
```
