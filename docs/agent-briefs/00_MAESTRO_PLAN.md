# 00 — MAESTRO PLAN
## Darhous Marketing & Social Media Hub
### بوابة درهوس للتسويق والسوشيال ميديا

**Date Created:** 2026-06-01  
**Maestro:** Claude Code (Supervisor / Technical Lead)  
**Repository:** https://github.com/Darhous/darhous-marketing-social-hub  
**Working Directory:** `C:\Users\ahmed\Desktop\parrelled\social`

---

## Project Vision

A production-ready **Arabic-first Marketing & Social Media portal** for digital professionals and agencies in the Arabic-speaking market. Built on the **Luminous Nexus** design system — Futuristic Glassmorphism, RTL-first, IBM Plex Sans Arabic.

The platform must be:
- Standalone and fully functional at launch
- Academy-integration-ready (deferred — architecture only)
- Mobile-responsive
- Accessible (WCAG AA minimum)
- TypeScript-safe throughout

---

## Design Foundation

**System:** Luminous Nexus  
**Source:** `stitch_darhous_marketing_hub/stitch_darhous_marketing_hub/luminous_nexus/DESIGN.md`

| Token | Value |
|---|---|
| Background | `#11131b` / `#0A0C14` |
| Primary (Cyan) | `#00dbe7` / `#e1fdff` |
| Secondary (Violet) | `#d0bcff` / `#571bc1` |
| Tertiary (Emerald) | `#67f4b7` |
| Font | IBM Plex Sans Arabic |
| Direction | RTL (Right-to-Left) |
| Cards | `rounded-2xl`, glassmorphic, backdrop-blur |
| Buttons | Cyan→Violet gradient, glow on hover |

---

## Stage Roadmap

| Stage | Name | Owner | Status |
|---|---|---|---|
| 0 | Inspection | Claude (Maestro) | ✅ DONE |
| 1 | Orchestration Setup | Claude (Maestro) | ✅ IN PROGRESS |
| 2 | Next.js Foundation + Layout | Copilot | ⏳ PENDING |
| 3 | Landing Page | Copilot | ⏳ PENDING |
| 4 | Dashboard | Copilot | ⏳ PENDING |
| 5 | Learning Paths | Copilot | ⏳ PENDING |
| 6 | Tools Hub | Copilot | ⏳ PENDING |
| 7 | Content Calendar | Copilot | ⏳ PENDING |
| 8 | Campaign Planner | Copilot | ⏳ PENDING |
| 9 | Persona / Brand / Post Tools | Copilot | ⏳ PENDING |
| 10 | Templates + Glossary + Integration | Copilot | ⏳ PENDING |
| 11 | Final Polish + Responsive | Copilot | ⏳ PENDING |
| 12 | QA Review | Codex | ⏳ PENDING |
| 13 | Content & Curriculum | Gemini | ⏳ PENDING |
| 14 | Launch Validation | Claude (Maestro) | ⏳ PENDING |

---

## Required Routes

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/paths` | Learning Paths |
| `/dashboard` | User Dashboard |
| `/tools` | Marketing Tools Hub |
| `/templates` | Templates Marketplace |
| `/calendar` | Content Calendar Builder |
| `/campaign-planner` | Campaign Planner |
| `/persona-builder` | Persona Builder |
| `/brand-voice` | Brand Voice Builder |
| `/post-generator` | Post Generator |
| `/glossary` | Marketing Glossary |
| `/admin-ready` | Admin-Ready Concept Page |
| `/integration` | Academy Integration Readiness |

---

## Agent Responsibilities Summary

| Agent | Role | Output Location |
|---|---|---|
| Claude (Maestro) | Inspect, plan, task files, review, git | `docs/` |
| Copilot | All app code, components, pages | `src/` |
| Gemini | Arabic content, curriculum, copy | `docs/agent-reports/GEMINI_CONTENT_OUTPUT.md` |
| Codex | QA, TypeScript, security review | `docs/agent-reports/CODEX_QA_REPORT.md` |
| Continue | Small local hints only | `docs/agent-reports/CONTINUE_NOTES.md` |

---

## Critical Rules

1. No code outside `C:\Users\ahmed\Desktop\parrelled\social`
2. Stitch source folder is READ-ONLY — never modified
3. Academy repo is READ-ONLY — never modified
4. All Copilot work driven by task files in `docs/copilot-tasks/`
5. Push only after stable milestones
6. Never force-push to origin/main without Maestro approval
7. Every commit must reference the stage and task
