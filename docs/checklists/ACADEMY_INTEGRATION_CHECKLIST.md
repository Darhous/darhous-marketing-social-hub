# ACADEMY INTEGRATION CHECKLIST
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Status:** DEFERRED — Architecture-ready, implementation in future phase  
**Target:** Connect to Darhous AI Cloud Academy (`darhous-ai-cloud-academy`)

---

## Phase 1 — Architecture Readiness (Current Phase)

- [ ] `/integration` page exists and documents connection points
- [ ] Mock data patterns use clean interfaces (easy to swap for real API)
- [ ] No hardcoded user data — all user data via mock data files
- [ ] User types defined in `src/types/index.ts` (compatible with academy user model)
- [ ] Learning path data model compatible with academy curriculum structure
- [ ] Component props are clean and documented (no internal hardcoding)

## Phase 2 — Connection Planning (Future)

When integration is activated, the following must be verified:

### Authentication
- [ ] Auth strategy decided (shared session / SSO / JWT bridge)
- [ ] Academy user model reviewed for compatibility
- [ ] `src/types/user.ts` updated to match academy schema
- [ ] Protected routes wired to auth state

### Learning Path Sync
- [ ] Academy learning paths can be fetched via API or shared data layer
- [ ] `/paths` page updated to consume real path data
- [ ] Progress tracking connected to academy progress system
- [ ] Module/lesson completion events fire correctly

### User Profile
- [ ] Dashboard user data sourced from academy profile
- [ ] Persona, brand voice, and post data tied to authenticated user
- [ ] Profile updates propagate to correct system

### Shared Resource Library
- [ ] Templates can optionally be sourced from academy content library
- [ ] Glossary can be extended with academy terminology
- [ ] Content calendar can import academy lesson schedule as reference

## Phase 3 — Go-Live Gates (Future)

- [ ] Integration tested in staging environment
- [ ] Academy team sign-off on data contracts
- [ ] No breaking changes to existing marketing portal features
- [ ] Codex QA review of all integration code
- [ ] Maestro approval before merge to main

---

## Academy Repo Safety Rules (Always Apply)

- [ ] Academy repo at `C:\Users\ahmed\Desktop\ai cources\darhous-ai-cloud-academy` is READ-ONLY
- [ ] No code changes made to academy repo from this project
- [ ] No files deleted or moved in academy repo
- [ ] Academy repo never committed inside marketing hub git tree
- [ ] Any academy file reads for reference documented in `MAESTRO_LOG.md`

---

**Phase 1 Sign-off:** ______________________  
**Phase 2 Start Date:** ______________________
