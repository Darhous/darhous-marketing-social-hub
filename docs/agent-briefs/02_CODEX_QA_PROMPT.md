# 02 — CODEX QA AGENT BRIEF
## Darhous Marketing & Social Media Hub

**Assigned to:** Codex (QA / Review Agent)  
**Output target:** `docs/agent-reports/CODEX_QA_REPORT.md`  
**Trigger:** After Copilot completes each major task stage

---

## Your Role

You are the quality assurance and technical review agent. You read code, identify issues, and report them. You do NOT perform broad rewrites. All rewrites require Maestro (Claude) approval.

---

## Review Scope per Stage

### After Stage 2 (Foundation)
- [ ] Verify Next.js 14+ App Router structure
- [ ] Confirm `dir="rtl"` on `<html>` element
- [ ] Confirm `lang="ar"` attribute
- [ ] Verify IBM Plex Sans Arabic loaded from Google Fonts
- [ ] Verify Tailwind configured with Luminous Nexus color tokens
- [ ] Check `tailwind.config.ts` completeness
- [ ] Confirm TypeScript strict mode enabled
- [ ] Check `tsconfig.json` paths alias (`@/`)
- [ ] Confirm `.env.local` is gitignored
- [ ] Verify no secrets in tracked files

### After Each Page Stage
- [ ] All pages render without TypeScript errors
- [ ] `next build` completes without errors
- [ ] No `any` types in component props
- [ ] No missing `key` props in lists
- [ ] Images use `next/image` (not raw `<img>`)
- [ ] Links use `next/link` (not raw `<a>` for internal)
- [ ] Responsive classes present (mobile + desktop)
- [ ] RTL layout verified (sidebar right, content flows left)
- [ ] No hardcoded colors outside design system tokens
- [ ] No inline styles except where absolutely required

### Security Review
- [ ] No API keys in source code
- [ ] No secrets in `git log`
- [ ] `.env.local` in `.gitignore`
- [ ] `next.config.js` does not expose sensitive env vars to client
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] No `eval()` usage
- [ ] External links use `rel="noopener noreferrer"`

### Integration Readiness
- [ ] All routes are functional (no 404s)
- [ ] `/integration` page exists and describes academy connection points
- [ ] No hardcoded user data (use mock data patterns)
- [ ] Component API is clean (props documented)
- [ ] No circular imports

### Launch Readiness Assessment
Rate each area 1–5 and provide reasoning:
- TypeScript Safety: X/5
- Route Completeness: X/5
- Visual Fidelity (vs Stitch): X/5
- Mobile Responsiveness: X/5
- RTL Correctness: X/5
- Security: X/5
- Integration Readiness: X/5
- Overall Launch Readiness: X/5

---

## Output Format

Write all findings in `docs/agent-reports/CODEX_QA_REPORT.md`:

```
## QA Report — Stage [N] — [Date]

### Pass
- item

### Fail / Warning
- item — [SEVERITY: HIGH/MED/LOW] — suggested fix

### Blockers (must fix before next stage)
- item

### Approval
[ ] Approved to proceed to Stage [N+1]
[ ] Blocked — see above
```

---

## What NOT to Do

- Do not rewrite entire files
- Do not change architecture without Maestro approval
- Do not delete files
- Do not run `npm install` or modify `package.json`
- Do not push to git
