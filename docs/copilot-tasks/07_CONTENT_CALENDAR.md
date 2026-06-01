# COPILOT TASK 07 — CONTENT CALENDAR BUILDER
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 7  
**Route:** `/calendar`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build a visual content calendar that helps marketers plan social media posts across platforms for a week or month view.

---

## Allowed Files

```
src/app/calendar/page.tsx
src/components/calendar/CalendarHeader.tsx
src/components/calendar/WeekView.tsx
src/components/calendar/DayColumn.tsx
src/components/calendar/PostSlot.tsx
src/components/calendar/AddPostModal.tsx
src/lib/mock/calendarData.ts
```

---

## Data Model

```ts
export type Platform = 'instagram' | 'linkedin' | 'facebook'

export interface CalendarPost {
  id: string
  day: number           // 0=Sunday ... 6=Saturday
  platform: Platform
  title: string         // Arabic
  status: 'مخطط' | 'مكتوب' | 'منشور'
  time?: string         // e.g., "10:00 ص"
}
```

---

## Page Layout

- Page title: `مخطط المحتوى`
- View toggle: `أسبوع` / `شهر` (implement Week view; Month view is placeholder)
- Platform filter: show all / Instagram / LinkedIn / Facebook
- Current week navigation: `← الأسبوع السابق` / `الأسبوع التالي →` (reversed in RTL)

---

## WeekView Layout

- 7 columns (Sunday→Saturday) arranged right-to-left (RTL start = Saturday on right)
- Each column: DayColumn component
- DayColumn header: day name (Arabic: الأحد، الاثنين ... السبت) + date number
- DayColumn body: PostSlot items stacked vertically

---

## PostSlot Component

```tsx
// Compact card showing:
// - Platform icon (colored)
// - Post title (truncated 1 line)
// - Status badge
// - Time if set
// Colors: Instagram=#E1306C, LinkedIn=#0077B5, Facebook=#1877F2
```

---

## AddPostModal

Simple modal (no external modal library):
- Opens on click of `+ إضافة منشور` in a DayColumn
- Fields: العنوان (text) / المنصة (select) / الوقت (text) / الحالة (select)
- CTA: `إضافة` / `إلغاء`
- State managed locally in page component (mock only — no persistence)

---

## Mock Data

5-7 pre-filled posts across the week distributed across platforms.

---

## Acceptance Criteria

- [ ] `/calendar` renders week view
- [ ] 7 day columns visible (RTL order)
- [ ] Platform colors correct
- [ ] AddPostModal opens and closes
- [ ] Platform filter shows/hides posts
- [ ] Responsive (horizontal scroll on mobile)
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 07 Complete — [date]
- /calendar renders: YES/NO
- Week view works: YES/NO
- Modal opens/closes: YES/NO
- Build passes: YES/NO
- Notes: ...
```
