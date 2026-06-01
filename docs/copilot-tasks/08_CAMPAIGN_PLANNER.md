# COPILOT TASK 08 — CAMPAIGN PLANNER
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 8  
**Route:** `/campaign-planner`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build a step-by-step campaign planning tool. Users fill in a campaign brief through a guided multi-step form, and see a campaign summary card at the end.

---

## Allowed Files

```
src/app/campaign-planner/page.tsx
src/components/campaign/CampaignStepper.tsx
src/components/campaign/StepGoals.tsx
src/components/campaign/StepAudience.tsx
src/components/campaign/StepPlatforms.tsx
src/components/campaign/StepBudget.tsx
src/components/campaign/StepTimeline.tsx
src/components/campaign/CampaignSummary.tsx
src/lib/mock/campaignData.ts
src/types/campaign.ts
```

---

## Campaign Form — 5 Steps

### Step 1: الأهداف (Goals)
- Input: اسم الحملة (text)
- Select: الهدف الرئيسي
  - زيادة المتابعين
  - توليد مبيعات
  - رفع الوعي بالعلامة
  - زيادة التفاعل
  - جذب زيارات الموقع
- Textarea: وصف مختصر للحملة

### Step 2: الجمهور المستهدف (Audience)
- Input: الفئة العمرية (range or text)
- Input: الموقع الجغرافي
- Tags input: الاهتمامات (add/remove tags)
- Select: الجنس (الكل / ذكور / إناث)

### Step 3: المنصات (Platforms)
- Multi-select checkboxes: Instagram / LinkedIn / Facebook / X / TikTok
- For each selected platform: content type preference
  - صور / فيديو / نصوص / ستوري / ريلز

### Step 4: الميزانية (Budget)
- Input: إجمالي الميزانية (number + currency selector: ج.م / $)
- Distribution slider (visual only — mock): إعلانات مدفوعة vs محتوى عضوي
- Input: الميزانية اليومية

### Step 5: الجدول الزمني (Timeline)
- Date inputs: تاريخ البداية / تاريخ النهاية
- Select: وتيرة النشر (يومياً / ٣ مرات أسبوعياً / أسبوعياً)
- Calculated display: إجمالي أيام الحملة / عدد المنشورات المتوقع

---

## CampaignStepper Component

- Right-to-left step indicator (RTL)
- Step numbers + labels above the form
- Active step: `primary` color
- Completed steps: checkmark + `tertiary` color
- Back / التالي buttons
- Final step shows: إنشاء الحملة CTA

---

## CampaignSummary Card

Shown after completion:
- Campaign name (large, Arabic)
- All filled details in a structured card
- Platform icons row
- Budget summary
- Timeline dates
- CTA: `تحميل الملخص` (placeholder — no real PDF) + `إنشاء حملة جديدة`

---

## TypeScript Types

```ts
// src/types/campaign.ts
export interface CampaignBrief {
  name: string
  goal: string
  description: string
  audience: {
    ageRange: string
    location: string
    interests: string[]
    gender: string
  }
  platforms: string[]
  budget: {
    total: number
    currency: 'EGP' | 'USD'
    daily: number
    paidPercent: number
  }
  timeline: {
    startDate: string
    endDate: string
    frequency: string
  }
}
```

---

## Acceptance Criteria

- [ ] `/campaign-planner` renders stepper
- [ ] All 5 steps navigate correctly (Next / Back)
- [ ] Form fields have RTL input alignment
- [ ] Summary card appears on completion
- [ ] Mobile responsive (stepper collapses gracefully)
- [ ] No TypeScript errors
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 08 Complete — [date]
- /campaign-planner renders: YES/NO
- All 5 steps: YES/NO
- Summary card: YES/NO
- Build passes: YES/NO
- Notes: ...
```
