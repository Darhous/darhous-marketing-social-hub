# FOOTER COMPLIANCE CHECKLIST
## Darhous Marketing & Social Media Hub

**Maintained by:** Claude (Maestro)  
**Reference task:** `docs/copilot-tasks/02_DARHOUS_FOOTER.md`  
**Rule:** The Stitch footer is NOT acceptable. This checklist verifies the Darhous official footer.

---

## Bottom Signature Bar — Container

- [ ] `border-top: 1px solid rgba(255, 255, 255, 0.05)` applied
- [ ] `padding-top: 1.5rem` (24px) applied
- [ ] `padding-bottom: 1.5rem` applied
- [ ] `display: flex` and `flex-direction: column` applied
- [ ] `align-items: center` applied
- [ ] `gap: 1rem` (16px) between icon row and signature text

## Social Icon Buttons — Count & Order

- [ ] Exactly 4 social buttons present
- [ ] Instagram button present
- [ ] LinkedIn button present
- [ ] Facebook button present
- [ ] WhatsApp button present

## Social Icon Buttons — Size & Shape

- [ ] Each button: `width: 36px`
- [ ] Each button: `height: 36px`
- [ ] Each button: `border-radius: 0.75rem` (rounded-xl = 12px)
- [ ] Buttons arranged in horizontal row with `gap-3` (12px)

## Social Icon Buttons — Colors & Style

- [ ] Instagram: bg `rgba(225,48,108,0.1)`, border `rgba(225,48,108,0.2)`, icon `#E1306C`
- [ ] LinkedIn: bg `rgba(0,119,181,0.1)`, border `rgba(0,119,181,0.2)`, icon `#0077B5`
- [ ] Facebook: bg `rgba(24,119,242,0.1)`, border `rgba(24,119,242,0.2)`, icon `#1877F2`
- [ ] WhatsApp: bg `rgba(37,211,102,0.1)`, border `rgba(37,211,102,0.2)`, icon `#25D366`

## Social Icon Buttons — Behavior

- [ ] NO text labels on any social button
- [ ] Each button has `aria-label` (e.g., `aria-label="Instagram"`)
- [ ] Each button opens correct URL in `_blank`
- [ ] Each button has `rel="noopener noreferrer"`
- [ ] Hover: `transform: translateY(-3px) scale(1.1)`
- [ ] Hover: `box-shadow` with platform color at 35% opacity

## Social Links — URL Verification

- [ ] Instagram → `https://www.instagram.com/darhous/`
- [ ] LinkedIn → `https://www.linkedin.com/in/darhous/`
- [ ] Facebook → `https://www.facebook.com/ahmed.darhous`
- [ ] WhatsApp → `https://wa.me/201030002331`

## Signature Text

- [ ] Text reads exactly: `designed by Ahmed Darhous ©`
- [ ] Font size: 12px (`caption` scale)
- [ ] Font weight: 400 (Regular)
- [ ] Color: `#b9cacb` (`on-surface-variant`)
- [ ] "Ahmed Darhous" is an `<a>` tag
- [ ] mailto: `href="mailto:ahmeddarhous@gmail.com"`
- [ ] mailto link: same color as surrounding text
- [ ] mailto link: `text-decoration: underline`
- [ ] mailto link: `text-underline-offset: 2px`

## Signature Bar — What Must NOT Be Present

- [ ] No additional text in signature bar
- [ ] No legal links (privacy policy, terms, etc.)
- [ ] No social button text labels
- [ ] No tooltip overlays
- [ ] No copyright line separate from the signature text

## Rendering

- [ ] Footer appears on all 13 routes
- [ ] Footer renders on mobile (375px) — signature bar centered
- [ ] Footer renders on tablet (768px)
- [ ] Footer renders on desktop (1280px)
- [ ] No layout overflow caused by footer

---

**Verified by:** ______________________  
**Date:** ______________________
