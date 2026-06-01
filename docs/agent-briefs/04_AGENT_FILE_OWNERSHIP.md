# 04 — AGENT FILE OWNERSHIP MAP
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Last updated:** 2026-06-01

This file is the authoritative source for which agent owns which files. No agent may edit a file it does not own without Maestro approval.

---

## Ownership Rules

| Symbol | Meaning |
|---|---|
| ✅ OWNS | Agent creates and maintains this file |
| 📖 READ | Agent may read but not edit |
| 🚫 FORBIDDEN | Agent must never touch this |

---

## Claude (Maestro) — Owns

```
docs/**                          ✅ ALL docs files
README.md                        ✅
.gitignore                       ✅ (initial setup only)
next.config.ts                   ✅ (review + small config fixes only)
```

---

## Copilot — Owns (all app code)

```
src/app/**                       ✅ All pages and layouts
src/components/**                ✅ All UI components
src/lib/**                       ✅ Utilities, hooks, helpers
src/types/**                     ✅ TypeScript type definitions
src/styles/**                    ✅ Global CSS / Tailwind overrides
tailwind.config.ts               ✅
tsconfig.json                    ✅ (initial setup)
package.json                     ✅ (initial setup)
public/**                        ✅ Static assets
```

Copilot must not touch:
```
docs/**                          🚫
stitch_darhous_marketing_hub/**  🚫
.env.local                       🚫 (Maestro handles secrets)
```

---

## Gemini — Owns

```
docs/agent-reports/GEMINI_CONTENT_OUTPUT.md    ✅
```

Gemini may read:
```
docs/agent-briefs/01_GEMINI_CONTENT_PROMPT.md  📖
stitch_darhous_marketing_hub/**                📖 (design reference only)
```

---

## Codex — Owns

```
docs/agent-reports/CODEX_QA_REPORT.md         ✅
```

Codex may read:
```
src/**                                          📖
docs/agent-briefs/02_CODEX_QA_PROMPT.md        📖
docs/checklists/**                              📖
```

---

## Continue — Owns

```
docs/agent-reports/CONTINUE_NOTES.md           ✅
```

Continue may read:
```
src/**                                          📖 (specific files only, when asked)
```

---

## Stitch Source (READ-ONLY by all agents)

```
stitch_darhous_marketing_hub/**                📖 Reference only
```

No agent may modify, delete, or move any file in the Stitch folder.

---

## Conflict Resolution

If two agents need to edit the same file:
1. Stop immediately
2. Report conflict to Maestro
3. Maestro decides which agent proceeds
4. The other agent waits

Never merge conflicting agent outputs without Maestro review.

---

## File Creation Rule

Before creating any new file, an agent must:
1. Check this ownership map
2. Confirm the target directory is within their scope
3. Create only files explicitly required by their task brief
