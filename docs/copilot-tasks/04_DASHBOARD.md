# COPILOT TASK 04 — USER DASHBOARD
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 4  
**Route:** `/dashboard`  
**Stitch Reference:** `stitch_darhous_marketing_hub/stitch_darhous_marketing_hub/user_dashboard_darhous_marketing_hub/code.html`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build the user dashboard page. Use the Stitch HTML file as the primary visual reference. Extract the layout, component structure, and color usage — then re-implement as proper React/TypeScript components with mock data.

---

## Allowed Files

```
src/app/dashboard/page.tsx
src/components/dashboard/WelcomeCard.tsx
src/components/dashboard/ProgressCard.tsx
src/components/dashboard/StatsGrid.tsx
src/components/dashboard/ActivityFeed.tsx
src/components/dashboard/QuickActions.tsx
src/components/dashboard/PathProgressBar.tsx
src/lib/mock/dashboardData.ts
```

---

## Stitch Reference Study

Read `user_dashboard_darhous_marketing_hub/code.html` (382 lines) and extract:
- The layout grid structure (sidebar + main + possible right panel)
- The card components and their content
- The color classes used
- The typography hierarchy
- Any interactive elements

Re-implement all sections as React components with mock data (no live API).

---

## Dashboard Layout

- Full-height layout using `PageShell`
- Main content area: 12-column grid
- Top row: WelcomeCard (spans 8 cols) + StatsMini (spans 4 cols)
- Middle row: ProgressCard (spans 8 cols) + QuickActions (spans 4 cols)
- Bottom row: ActivityFeed (spans 12 cols)

---

## WelcomeCard

```
مرحباً، [اسم المستخدم]        ← mock: "أحمد"
[date in Arabic]
[Progress summary: X مسارات مكتملة من Y]
```

- Background: `surface-container` glassmorphic
- User avatar placeholder (circle, gradient background, initials)

---

## StatsGrid (4 mini stat cards)

| Stat | Mock Value | Icon | Color |
|---|---|---|---|
| المسارات المكتملة | ٢ | `school` | Cyan |
| الأدوات المستخدمة | ٧ | `build` | Violet |
| المنشورات المنشأة | ١٥ | `auto_awesome` | Emerald |
| القوالب المحفوظة | ٤ | `bookmarks` | Cyan |

---

## ProgressCard

Shows active learning path progress:
- Path name: مبادئ التسويق الرقمي
- Progress: 60%
- `PathProgressBar` component: gradient Cyan→Violet, glow head at leading edge
- Current module: الوحدة الثالثة: استراتيجية المحتوى
- CTA: متابعة التعلم → `/paths`

---

## QuickActions

Grid of action shortcuts (2x2):
- إنشاء منشور → `/post-generator`
- تخطيط حملة → `/campaign-planner`
- بناء شخصية → `/persona-builder`
- عرض القوالب → `/templates`

Each: icon + Arabic label, `GlassCard` hover state.

---

## ActivityFeed

Recent activity list (mock data — last 5 items):
```ts
// src/lib/mock/dashboardData.ts
export const mockActivity = [
  { id: 1, type: 'lesson', title: 'أكملت درس: مقدمة في الـ SEO', time: 'منذ ساعتين', icon: 'school' },
  { id: 2, type: 'tool', title: 'استخدمت: مولّد المنشورات', time: 'أمس', icon: 'auto_awesome' },
  { id: 3, type: 'template', title: 'حفظت قالب: منشور انستغرام', time: 'منذ يومين', icon: 'bookmarks' },
  { id: 4, type: 'lesson', title: 'أكملت وحدة: أساسيات التسويق', time: 'منذ ٣ أيام', icon: 'check_circle' },
  { id: 5, type: 'tool', title: 'استخدمت: مخطط الحملات', time: 'منذ أسبوع', icon: 'campaign' },
]
```

---

## Mock Data Pattern

All dashboard data must come from `src/lib/mock/dashboardData.ts`.
No hardcoded values inside components — always import from mock data file.
This pattern makes future API integration clean.

---

## Acceptance Criteria

- [ ] Dashboard route `/dashboard` renders without errors
- [ ] All 5 sections (Welcome, Stats, Progress, QuickActions, Activity) present
- [ ] Progress bar renders with gradient and glow
- [ ] All mock data imported from `dashboardData.ts`
- [ ] Quick action links navigate to correct routes
- [ ] Responsive layout (stacks on mobile)
- [ ] Matches Stitch visual reference closely
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 04 Complete — [date]
- All dashboard sections: YES/NO
- Stitch visual match: HIGH/MED/LOW
- Mock data pattern in place: YES/NO
- Build passes: YES/NO
- Notes: ...
```
