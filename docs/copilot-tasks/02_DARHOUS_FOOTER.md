# COPILOT TASK 02 — DARHOUS OFFICIAL FOOTER
## Darhous Marketing & Social Media Hub

**Assigned to:** GitHub Copilot  
**Stage:** 2 (part of foundation)  
**Priority:** HIGH — replaces Stitch placeholder footer  
**Depends on:** Task 01 complete

---

## Goal

Build the official Darhous footer component. The Stitch footer is NOT acceptable. This is the branded signature footer that appears on every page.

---

## Allowed Files

```
src/components/layout/Footer.tsx      (replace placeholder from Task 01)
src/components/layout/Footer.module.css  (optional — only if Tailwind insufficient)
```

---

## Footer Structure

The footer has two sections:

### Section A — Main Footer Content

- Background: `surface-container-low` (`#191b24`)
- Border-top: 1px solid `rgba(255,255,255,0.06)`
- Padding: `py-12`
- 3-column grid on desktop, stacked on mobile
- Column 1 (right — RTL): Logo + brand tagline in Arabic
- Column 2 (center): Quick navigation links (same as navbar)
- Column 3 (left): Platform description 2 lines Arabic

### Section B — Bottom Signature Bar (STRICT SPEC)

This section has exact requirements — implement precisely:

**Container:**
```css
border-top: 1px solid rgba(255, 255, 255, 0.05);
padding-top: 1.5rem;          /* 24px */
padding-bottom: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;                    /* 16px */
```

**Social Icon Buttons — 4 buttons, in this order (right to left in RTL):**

| Platform | URL | Icon | Color |
|---|---|---|---|
| Instagram | https://www.instagram.com/darhous/ | `camera_enhance` or custom SVG | `#E1306C` |
| LinkedIn | https://www.linkedin.com/in/darhous/ | `linkedin` or custom SVG | `#0077B5` |
| Facebook | https://www.facebook.com/ahmed.darhous | `facebook` or custom SVG | `#1877F2` |
| WhatsApp | https://wa.me/201030002331 | `chat` or custom SVG | `#25D366` |

**Each button:**
```css
width: 36px;
height: 36px;
border-radius: 0.75rem;      /* rounded-xl = 12px */
display: flex;
align-items: center;
justify-content: center;
background-color: rgba([platform-color], 0.1);
border: 1px solid rgba([platform-color], 0.2);
color: [platform-color];
transition: transform 0.2s ease, box-shadow 0.2s ease;
cursor: pointer;
text-decoration: none;
```

**Button hover state:**
```css
transform: translateY(-3px) scale(1.1);
box-shadow: 0 8px 20px rgba([platform-color], 0.35);
```

**Rules:**
- NO text labels on social buttons
- NO tooltip text
- `aria-label` for accessibility ONLY (e.g., `aria-label="Instagram"`)
- Open all links in `_blank` with `rel="noopener noreferrer"`
- Buttons arranged in a horizontal `flex` row with `gap-3`

**Signature Text (below the icon row):**
```
designed by Ahmed Darhous ©
```

- Font: `caption` scale — 12px, Regular 400
- Color: `on-surface-variant` (`#b9cacb`)
- `Ahmed Darhous` must be a mailto link:
  ```html
  <a href="mailto:ahmeddarhous@gmail.com">Ahmed Darhous</a>
  ```
- The mailto link: same color as surrounding text, `text-decoration: underline`, `underline-offset: 2px`
- `©` is a plain text character — no special treatment
- **No legal links**
- **No other text** in the bottom signature bar

---

## TypeScript Interface

```tsx
// No props needed — footer is fully static
export function Footer() { ... }
```

---

## Icon Strategy

Use one of these approaches (choose whichever renders cleanly):
1. Simple SVG inline icons for Instagram, LinkedIn, Facebook, WhatsApp
2. Material Symbols Outlined (already loaded in layout) using closest icons
3. Lucide React icons if installed (do NOT install new packages for this)

Prefer inline SVG for brand accuracy.

---

## Acceptance Criteria

- [ ] Footer renders on all pages via `layout.tsx`
- [ ] Bottom signature bar is centered
- [ ] All 4 social buttons present, correct URLs
- [ ] No text labels on social buttons
- [ ] Hover animation: rise + scale 1.1 + colored shadow
- [ ] `mailto:ahmeddarhous@gmail.com` link works on "Ahmed Darhous"
- [ ] Signature text reads exactly: `designed by Ahmed Darhous ©`
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] No console errors
- [ ] Responsive on mobile (icons remain centered)

---

## Handoff Note to Maestro

Update `docs/agent-reports/COPILOT_HANDOFF_LOG.md`:
```
## Task 02 Complete — [date]
- Footer renders: YES/NO
- Social links verified: YES/NO
- Signature text correct: YES/NO
- Hover animations working: YES/NO
- Notes: ...
```
