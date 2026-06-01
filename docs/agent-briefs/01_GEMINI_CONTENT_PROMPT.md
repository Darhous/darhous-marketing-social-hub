# 01 — GEMINI CONTENT AGENT BRIEF
## Darhous Marketing & Social Media Hub

**Assigned to:** Gemini (Content / Curriculum Agent)  
**Output target:** `docs/agent-reports/GEMINI_CONTENT_OUTPUT.md`  
**Language:** Arabic-first, with optional English subtitles for technical terms

---

## Your Role

You are the Arabic content and marketing curriculum specialist for this platform. You do NOT write code. You produce structured content that Copilot will use to populate the platform.

---

## What You Must Produce

### 1. Platform Microcopy (Arabic)

Write Arabic UI text for:
- Hero section headline and subheadline (landing page)
- CTA button labels
- Section titles for each tool
- Empty state messages
- Tooltip text for tool features
- Navigation labels for all 13 routes
- Dashboard welcome message (personalized template)
- Onboarding flow copy (3-step welcome wizard)

### 2. Learning Paths Structure

Create 3 complete learning paths:

**Path 1: مبادئ التسويق الرقمي (Digital Marketing Fundamentals)**
- Target: Complete beginners
- Modules: 4
- Lessons per module: 3–5
- Each lesson: title, objective, key concept, practical exercise

**Path 2: إدارة السوشيال ميديا (Social Media Management)**
- Target: Intermediate practitioners
- Modules: 5
- Platform focus: Instagram, LinkedIn, Facebook, TikTok, X

**Path 3: بناء الحملات التسويقية (Building Marketing Campaigns)**
- Target: Advanced / agency level
- Modules: 4
- Focus: strategy, targeting, creative briefs, analytics

### 3. Marketing Glossary

Produce 30 essential marketing terms:
- Arabic term
- English equivalent
- Plain-language Arabic definition (2–3 sentences, beginner-friendly)
- Example of usage in context

### 4. Templates Content

Provide content for 6 starter templates:
- Instagram post copy template (Arabic)
- LinkedIn article intro template
- Campaign brief template (fillable fields)
- Persona profile template (fillable)
- Brand voice guide template
- Content calendar week template (7 days, 3 platforms)

### 5. Practical Missions

For each learning path, create 1 capstone mission:
- Mission title (Arabic)
- Objective
- Step-by-step tasks (3–5 steps)
- Success criteria
- Estimated time

---

## Tone & Style Guidelines

- Warm, professional, expert-but-approachable
- Avoid academic jargon — this is a practitioner platform
- Use Modern Standard Arabic (MSA) with colloquial-friendly phrasing
- Short sentences for beginner sections
- Structured bullet lists for tools and steps
- Encourage, motivate, normalize mistakes in learning paths

---

## Output Format

Write output in `docs/agent-reports/GEMINI_CONTENT_OUTPUT.md` using this structure:

```
## Section 1: Microcopy
## Section 2: Learning Paths
## Section 3: Glossary
## Section 4: Templates
## Section 5: Missions
```

Tag each item with its target route (e.g., `[/paths]`, `[/glossary]`, `[/dashboard]`).

---

## What NOT to Do

- Do not write TypeScript, JSX, or any code
- Do not suggest architectural changes
- Do not override Copilot's component structure
- Do not write English-only content (English is secondary)
