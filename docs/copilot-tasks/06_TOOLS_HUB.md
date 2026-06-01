# COPILOT TASK 06 — MARKETING TOOLS HUB
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 6  
**Route:** `/tools`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build the marketing tools hub — the central directory of all available tools on the platform. Each tool is a card that links to its dedicated page.

---

## Allowed Files

```
src/app/tools/page.tsx
src/components/tools/ToolCard.tsx
src/components/tools/ToolCategoryFilter.tsx
src/lib/mock/toolsData.ts
```

---

## Data Model

```ts
// src/lib/mock/toolsData.ts

export type ToolCategory = 'محتوى' | 'حملات' | 'تحليل' | 'إبداع' | 'تخطيط'

export interface Tool {
  id: string
  title: string          // Arabic
  description: string    // Arabic (1-2 sentences)
  category: ToolCategory
  icon: string           // Material Symbol name
  href: string           // internal route
  accentColor: 'cyan' | 'violet' | 'emerald'
  isNew?: boolean
  isFeatured?: boolean
}
```

---

## Tools List (Mock Data)

| # | Arabic Title | Category | Route | Accent |
|---|---|---|---|---|
| 1 | مولّد المنشورات | محتوى | `/post-generator` | Cyan |
| 2 | باني الصوت التجاري | إبداع | `/brand-voice` | Violet |
| 3 | باني الشخصية | تحليل | `/persona-builder` | Emerald |
| 4 | مخطط الحملات | حملات | `/campaign-planner` | Cyan |
| 5 | مخطط المحتوى | تخطيط | `/calendar` | Violet |
| 6 | مكتبة القوالب | محتوى | `/templates` | Emerald |
| 7 | قاموس التسويق | تحليل | `/glossary` | Cyan |

Mark tools 1, 2, 4 as `isFeatured: true`.

---

## Page Layout

- Page title: `أدوات التسويق`
- Subtitle: `كل ما تحتاجه لإطلاق حملتك في مكان واحد`
- `ToolCategoryFilter`: horizontal scrollable pill filter row
  - Categories: الكل / محتوى / حملات / تحليل / إبداع / تخطيط
  - Client-side filter — no routing
- Featured Tools section (shown above grid if filter is "الكل"):
  - Heading: `الأدوات المميزة`
  - 3 featured tools in a larger highlight row
- Full tools grid (3 cols desktop, 2 tablet, 1 mobile)

---

## ToolCard Component

```tsx
interface ToolCardProps {
  tool: Tool
}
```

Layout:
- GlassCard with hover state
- Top-right: `isNew` badge (`جديد` — small cyan pill) if applicable
- Large icon (accent color, 48x48 circle background)
- Tool title (Arabic, weight 600)
- Category badge (small pill)
- Description (2 lines max, `text-on-surface-variant`)
- Bottom CTA arrow button → `tool.href`
- `isFeatured` cards: slightly larger, accent-color top border

---

## Acceptance Criteria

- [ ] `/tools` renders all 7 tool cards
- [ ] Category filter works client-side
- [ ] Featured tools section shows 3 featured cards at top
- [ ] Each card navigates to correct route
- [ ] "جديد" badge shows on marked tools
- [ ] Mobile responsive (single column scroll)
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 06 Complete — [date]
- /tools renders: YES/NO
- All 7 tools present: YES/NO
- Category filter working: YES/NO
- Build passes: YES/NO
- Notes: ...
```
