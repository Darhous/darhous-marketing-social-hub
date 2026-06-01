# COPILOT TASK 10 — TEMPLATES + GLOSSARY + INTEGRATION PAGE
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 10  
**Routes:** `/templates` + `/glossary` + `/integration` + `/admin-ready`  
**Depends on:** Tasks 01 + 02 complete. Gemini glossary content is helpful but not blocking.

---

## Goal

Build the templates marketplace, marketing glossary, integration readiness page, and admin-ready concept page.

---

## SECTION A: Templates Marketplace (`/templates`)

### Allowed Files
```
src/app/templates/page.tsx
src/components/templates/TemplateCard.tsx
src/components/templates/TemplateFilter.tsx
src/components/templates/TemplatePreviewModal.tsx
src/lib/mock/templatesData.ts
src/types/template.ts
```

### Data Model
```ts
export interface Template {
  id: string
  title: string           // Arabic
  description: string     // Arabic
  category: TemplateCategory
  platform?: string       // Instagram / LinkedIn / Facebook / all
  previewText: string     // Arabic sample content
  tags: string[]          // Arabic tags
  isFree: boolean
  downloads: number
}

export type TemplateCategory =
  | 'منشورات سوشيال'
  | 'حملات إعلانية'
  | 'بريف إبداعي'
  | 'تقرير أداء'
  | 'خطة محتوى'
  | 'نموذج شخصية'
```

### Mock Templates (6 minimum)
Cover all categories. Each template has realistic Arabic content in `previewText`.

### Page Layout
- Title: `مكتبة القوالب`
- Subtitle: `قوالب جاهزة للاستخدام الفوري`
- TemplateFilter: category pills + platform filter
- Masonry or grid of TemplateCards
- TemplateCard: thumbnail preview area (styled div with sample text), title, category badge, platform icon, download count, `معاينة` button
- TemplatePreviewModal: opens on card click — shows full preview text, `تحميل القالب` CTA (mock — no real file), `نسخ المحتوى` button

---

## SECTION B: Marketing Glossary (`/glossary`)

### Allowed Files
```
src/app/glossary/page.tsx
src/components/glossary/GlossarySearch.tsx
src/components/glossary/GlossaryAlphaNav.tsx
src/components/glossary/GlossaryTerm.tsx
src/lib/mock/glossaryData.ts
src/types/glossary.ts
```

### Data Model
```ts
export interface GlossaryEntry {
  id: string
  termAr: string          // Arabic term
  termEn: string          // English equivalent
  definition: string      // Arabic definition (2-3 sentences)
  example?: string        // Arabic usage example
  category: string        // e.g., "سوشيال ميديا" / "إعلانات" / "تحليل"
}
```

### Mock Data
15 placeholder entries minimum. Use Gemini output when available. Example entry:
```ts
{
  termAr: 'معدل التفاعل',
  termEn: 'Engagement Rate',
  definition: 'نسبة التفاعلات (إعجابات، تعليقات، مشاركات) مقارنة بعدد المتابعين أو مرات الظهور. تقيس مدى استجابة الجمهور للمحتوى.',
  example: 'حصل منشورنا على معدل تفاعل 5٪ وهو أعلى من المتوسط.',
  category: 'تحليل'
}
```

### Page Layout
- Title: `قاموس التسويق`
- Subtitle: `٣٠+ مصطلح تسويقي بالعربية`
- GlossarySearch: real-time filter as user types (Arabic + English)
- GlossaryAlphaNav: Arabic alphabet quick-jump (أ ب ت ث ... — links to section anchors)
- Entries grouped by first Arabic letter
- GlossaryTerm: card showing term pair, definition, example, category badge

---

## SECTION C: Integration Readiness Page (`/integration`)

### Allowed Files
```
src/app/integration/page.tsx
src/components/integration/IntegrationRoadmap.tsx
src/components/integration/ConnectionPoint.tsx
```

### Purpose
This page documents (for administrators and developers) how the Darhous Marketing Hub will connect to the Darhous AI Cloud Academy in a future phase. It is static informational content — no live integration code.

### Content Sections
1. **الرؤية** — What the integration will enable (Arabic)
2. **نقاط الاتصال** — 4 connection points:
   - مزامنة مسارات التعلم (Learning path sync)
   - ملف المستخدم الموحد (Unified user profile)
   - متتبع التقدم (Progress tracker)
   - مكتبة الموارد المشتركة (Shared resource library)
3. **الحالة الحالية** — Status table: each connection point marked as `مخطط` / `قيد التطوير` / `مكتمل`
4. **متطلبات التطوير** — Technical requirements list (Arabic bullet list)

---

## SECTION D: Admin-Ready Concept Page (`/admin-ready`)

### Allowed Files
```
src/app/admin-ready/page.tsx
src/components/admin/AdminFeatureList.tsx
```

### Purpose
A concept/placeholder page showing what admin capabilities are planned. No real admin panel — this is a roadmap display.

### Content
- Title: `لوحة الإدارة`
- Subtitle: `الإمكانات القادمة`
- Feature list with icons:
  - إدارة المستخدمين
  - تحليلات الاستخدام
  - إدارة المحتوى
  - إعدادات المنصة
  - التقارير والتصدير
- Each feature: glassmorphic card, icon, title, 1-line description, `قريباً` badge
- Large centered CTA note: `هذه الصفحة ستتحول إلى لوحة تحكم كاملة في الإصدار القادم`

---

## Acceptance Criteria

- [ ] `/templates` renders with filter and modal working
- [ ] `/glossary` renders with search filter working
- [ ] `/integration` renders all 4 sections
- [ ] `/admin-ready` renders feature list
- [ ] Glossary search filters in real-time
- [ ] Template preview modal opens/closes correctly
- [ ] All pages mobile responsive
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 10 Complete — [date]
- /templates: YES/NO
- /glossary: YES/NO
- /integration: YES/NO
- /admin-ready: YES/NO
- Search/filter working: YES/NO
- Build passes: YES/NO
- Notes: ...
```
