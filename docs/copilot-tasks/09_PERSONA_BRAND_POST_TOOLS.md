# COPILOT TASK 09 — PERSONA BUILDER + BRAND VOICE + POST GENERATOR
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 9  
**Routes:** `/persona-builder` + `/brand-voice` + `/post-generator`  
**Stitch Reference:** `stitch_darhous_marketing_hub/stitch_darhous_marketing_hub/brand_voice_builder_darhous_marketing_hub/code.html`  
**Depends on:** Tasks 01 + 02 complete

---

## Goal

Build three interconnected marketing tools. These are the core creative tools of the platform.

---

## TOOL A: Persona Builder (`/persona-builder`)

### Allowed Files
```
src/app/persona-builder/page.tsx
src/components/persona/PersonaForm.tsx
src/components/persona/PersonaCard.tsx
src/components/persona/PersonaAvatar.tsx
src/lib/mock/personaData.ts
src/types/persona.ts
```

### Data Model
```ts
export interface Persona {
  id: string
  name: string               // Arabic
  age: string
  gender: string
  location: string
  jobTitle: string           // Arabic
  income: string
  education: string
  goals: string[]            // Arabic goals list
  painPoints: string[]       // Arabic pain points
  favoredPlatforms: string[] // Instagram, LinkedIn etc.
  bio: string                // Arabic paragraph
}
```

### Page Layout
- Left panel (LTR — or right panel in RTL context): PersonaForm
- Right panel: PersonaCard live preview (updates as user types)
- PersonaCard: styled card with avatar circle (gradient + initials), all persona details in structured sections
- PersonaAvatar: gradient circle, initials display, platform icons row
- Save button: `حفظ الشخصية` (mock — no real persistence)
- Export button: `تصدير` (placeholder)

### Mock Persona
Pre-fill with one example persona on load so the card preview is visible immediately.

---

## TOOL B: Brand Voice Builder (`/brand-voice`)

### Stitch Reference
Read `brand_voice_builder_darhous_marketing_hub/code.html` (333 lines) and extract the layout, sections, and design patterns. Re-implement as React components.

### Allowed Files
```
src/app/brand-voice/page.tsx
src/components/brand/BrandVoiceForm.tsx
src/components/brand/VoiceTraitSliders.tsx
src/components/brand/ToneExamples.tsx
src/components/brand/BrandSummaryCard.tsx
src/types/brand.ts
```

### Data Model
```ts
export interface BrandVoice {
  brandName: string
  tagline: string           // Arabic
  personality: string[]     // selected traits from list
  toneSliders: {
    formal: number           // 0-100
    serious: number
    respectful: number
    enthusiastic: number
  }
  doList: string[]          // Arabic "we do" statements
  dontList: string[]        // Arabic "we don't" statements
  examplePost: string       // Arabic sample post
}
```

### Page Layout
- Section 1: Brand basics (name, tagline, personality tags)
- Section 2: VoiceTraitSliders — 4 sliders with gradient track
  - رسمي — غير رسمي
  - جاد — مرح
  - محترم — ودود
  - هادئ — حماسي
- Section 3: نفعل / لا نفعل (do / don't lists — add/remove items)
- Section 4: مثال على منشور (textarea with character count)
- BrandSummaryCard: right side preview panel showing voice summary
- Save CTA: `حفظ صوت العلامة`

---

## TOOL C: Post Generator (`/post-generator`)

### Allowed Files
```
src/app/post-generator/page.tsx
src/components/post/PostGeneratorForm.tsx
src/components/post/PostPreview.tsx
src/components/post/PlatformSelector.tsx
src/components/post/PostVariants.tsx
src/lib/mock/postTemplates.ts
src/types/post.ts
```

### Behavior Note
This tool does NOT call any AI API. It uses template-based generation from `postTemplates.ts`. Design it to be API-ready (clean handler pattern) but implement with templates only.

### Data Model
```ts
export interface PostRequest {
  platform: 'instagram' | 'linkedin' | 'facebook'
  goal: string               // e.g., "زيادة التفاعل"
  topic: string              // Arabic free text
  tone: string               // e.g., "رسمي" | "ودود" | "تحفيزي"
  includeHashtags: boolean
  includeEmoji: boolean
  length: 'قصير' | 'متوسط' | 'طويل'
}

export interface GeneratedPost {
  id: string
  platform: string
  content: string            // Arabic
  hashtags?: string[]
  characterCount: number
}
```

### Page Layout
- Right panel (RTL): PostGeneratorForm
  - PlatformSelector: 3 large icon buttons (Instagram / LinkedIn / Facebook)
  - Goal select, topic input, tone select
  - Toggle switches: الهاشتاقات / الإيموجي
  - Length selector: قصير / متوسط / طويل
  - CTA: `توليد المنشور` (large gradient button)
- Left panel: PostPreview + PostVariants
  - PostPreview: mockup of how post looks on selected platform (simple styled box with platform chrome)
  - PostVariants: show 2-3 template variants, each copyable
  - Copy button per variant: `نسخ` with success toast state

### Mock Templates
Provide 3 Arabic post templates per platform per goal combination. Use `[TOPIC]` as placeholder that gets replaced with the user's topic input.

---

## Acceptance Criteria

- [ ] All 3 routes render without errors
- [ ] Persona card updates live as form is filled
- [ ] Brand voice sliders work
- [ ] Post generator produces mock output on button click
- [ ] Platform selector changes preview style
- [ ] Copy button changes to "تم النسخ" confirmation
- [ ] All pages use RTL layout correctly
- [ ] `next build` passes

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 09 Complete — [date]
- /persona-builder: YES/NO
- /brand-voice: YES/NO
- /post-generator: YES/NO
- Live preview working: YES/NO
- Build passes: YES/NO
- Notes: ...
```
