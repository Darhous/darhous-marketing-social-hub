# 05 — RELEASE RULES
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Last updated:** 2026-06-01

---

## Git Branching Strategy

```
main          — stable, deployable checkpoints only
feature/*     — Copilot work per task (e.g., feature/foundation-layout)
docs/*        — Documentation-only updates (e.g., docs/stage-1-setup)
```

---

## Commit Message Convention

```
[STAGE-N] [AGENT] short description

Examples:
[STAGE-1] MAESTRO: orchestration docs + agent briefs created
[STAGE-2] COPILOT: Next.js foundation + Tailwind + layout scaffold
[STAGE-3] COPILOT: landing page hero + navigation
[STAGE-12] CODEX: QA report stage 4 — no blockers
```

---

## Push Rules

| Condition | Action |
|---|---|
| Remote is empty | Push freely |
| Remote has commits | Fetch and inspect before pushing |
| Push rejected | STOP — report to user before any force |
| Merge conflict | STOP — report to user, do not auto-resolve |
| `--force` push to main | FORBIDDEN without explicit user approval |

---

## Stage Gate Criteria

A stage is not complete until:

1. Copilot task file acceptance criteria are fully met
2. `next build` runs without errors
3. `next lint` passes (zero errors)
4. `tsc --noEmit` passes (zero TypeScript errors)
5. Codex QA report filed with no HIGH severity blockers
6. Maestro reviews and approves the stage
7. Commit created with correct message format
8. Checkpoint pushed to origin/main

---

## What NEVER Goes to Git

```
.env.local
.env.*.local
node_modules/
.next/
*.log
*.pem
secrets/
```

Verify `.gitignore` contains all of the above before first push.

---

## Deployment Readiness Gate (Final)

Before any public deployment:

- [ ] `PRODUCTION_LAUNCH_CHECKLIST.md` — all items checked
- [ ] `ROUTE_AUDIT_CHECKLIST.md` — all 13 routes verified
- [ ] `FOOTER_COMPLIANCE_CHECKLIST.md` — Darhous footer correct
- [ ] `ACADEMY_INTEGRATION_CHECKLIST.md` — architecture ready (even if content deferred)
- [ ] Codex final QA score ≥ 4/5 on all dimensions
- [ ] No console errors in production build
- [ ] All social links verified active
- [ ] mailto link verified: ahmeddarhous@gmail.com
- [ ] WhatsApp link verified: https://wa.me/201030002331

---

## Academy Integration Deferral Note

The academy at `C:\Users\ahmed\Desktop\ai cources\darhous-ai-cloud-academy` is a future integration target.

Current stage: Architecture-ready (deferred implementation).

The `/integration` page must exist and document the connection points, but no live data integration is required for launch.

When integration is activated:
- A separate feature branch will be created
- Academy repo access will be requested read-only
- Claude Maestro will review all connection points before merge
