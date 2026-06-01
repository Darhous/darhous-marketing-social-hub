# COPILOT TASK 05 — LEARNING PATHS
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 5  
**Route:** `/paths`  
**Depends on:** Tasks 01 + 02 complete. Gemini content output is helpful but not blocking.

---

## Goal

Build the learning paths page and path detail view. Users browse available learning paths, see their structure, and can start or continue a path.

---

## Allowed Files

```
src/app/paths/page.tsx
src/app/paths/[slug]/page.tsx
src/components/paths/PathCard.tsx
src/components/paths/PathHeader.tsx
src/components/paths/ModuleList.tsx
src/components/paths/LessonItem.tsx
src/components/paths/LevelBadge.tsx
src/lib/mock/pathsData.ts
```

---

## Data Model (TypeScript)

```ts
// src/lib/mock/pathsData.ts

export type Level = 'مبتدئ' | 'متوسط' | 'متقدم'

export interface Lesson {
  id: string
  title: string          // Arabic
  duration: string       // e.g., "١٠ دقائق"
  completed?: boolean
}

export interface Module {
  id: string
  title: string          // Arabic
  lessons: Lesson[]
}

export interface LearningPath {
  id: string
  slug: string
  title: string          // Arabic
  description: string    // Arabic
  level: Level
  moduleCount: number
  lessonCount: number
  estimatedHours: string // e.g., "٨ ساعات"
  accentColor: 'cyan' | 'violet' | 'emerald'
  icon: string           // Material Symbol name
  modules: Module[]
}
```

---

## Mock Data (3 Paths)

Provide placeholder Arabic content. Gemini will enrich later.

**Path 1:**
```ts
{
  id: '1', slug: 'digital-marketing-basics',
  title: 'مبادئ التسويق الرقمي',
  description: 'ابدأ رحلتك في التسويق الرقمي من الصفر وتعلم الأساسيات الأساسية',
  level: 'مبتدئ', moduleCount: 4, lessonCount: 16, estimatedHours: '٨ ساعات',
  accentColor: 'cyan', icon: 'rocket_launch',
  modules: [/* 4 modules, 4 lessons each — placeholder titles */]
}
```

**Path 2:**
```ts
{
  id: '2', slug: 'social-media-management',
  title: 'إدارة السوشيال ميديا',
  description: 'تعلم إدارة منصات التواصل الاجتماعي باحترافية وبناء جمهور متفاعل',
  level: 'متوسط', moduleCount: 5, lessonCount: 20, estimatedHours: '١٢ ساعة',
  accentColor: 'violet', icon: 'trending_up',
  modules: [/* 5 modules */]
}
```

**Path 3:**
```ts
{
  id: '3', slug: 'campaign-building',
  title: 'بناء الحملات التسويقية',
  description: 'صمّم وأطلق حملات تسويقية متكاملة من الاستراتيجية حتى التحليل',
  level: 'متقدم', moduleCount: 4, lessonCount: 18, estimatedHours: '١٠ ساعات',
  accentColor: 'emerald', icon: 'campaign',
  modules: [/* 4 modules */]
}
```

---

## `/paths` Page Layout

- Page title (right-aligned): `مساراتك التعليمية`
- Subtitle: `اختر مسارك وابدأ رحلة التعلم`
- Filter row: level filter pills (الكل / مبتدئ / متوسط / متقدم) — client-side filter only
- Grid of PathCards (3 cols desktop, 2 cols tablet, 1 col mobile)

**PathCard:**
- GlassCard with accent-color top border (4px, gradient)
- Path icon (large, accent color)
- Title + description
- LevelBadge (pill: مبتدئ/متوسط/متقدم — each has distinct color)
- Stats row: X وحدة · Y درس · Z ساعة
- CTA: `ابدأ المسار` or `متابعة` (based on mock progress) → `/paths/[slug]`

---

## `/paths/[slug]` Page Layout

- Back button (right side, RTL): → `/paths`
- PathHeader: large title, description, level badge, progress bar if started
- Tab bar: `الوحدات` / `عن المسار` / `المهام`
- ModuleList: accordion of modules, each expanding to show lessons
- LessonItem: lesson title + duration + completion checkbox (mock state)
- Sticky CTA sidebar panel (desktop): shows overall progress + continue button

---

## LevelBadge Component

```tsx
// Pill-shaped badge
// مبتدئ → green/emerald background
// متوسط → violet background
// متقدم → cyan background
```

---

## Acceptance Criteria

- [ ] `/paths` renders all 3 path cards
- [ ] Filter pills work (client-side)
- [ ] Each path card navigates to `/paths/[slug]`
- [ ] Path detail page renders with module accordion
- [ ] Lessons list visible in each module
- [ ] LevelBadge renders correctly for each level
- [ ] Mobile responsive
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 05 Complete — [date]
- /paths renders: YES/NO
- /paths/[slug] renders: YES/NO
- Accordion modules working: YES/NO
- Build passes: YES/NO
- Notes: ...
```
