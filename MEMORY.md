# PROJECT MEMORY

## Current Architecture
Static single-page HTML/CSS/JavaScript with no build step. `base.css` is the foundation, `style.css` contains design tokens/layout/components, `compat.css` contains progressive fallbacks, and `app.js` contains interaction behaviour.

## Repository Structure
`index.html`, `base.css`, `style.css`, `compat.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `BROWSER_COMPATIBILITY.md`, `SECURITY.md`, `404.html`, `robots.txt`, `sitemap.xml`.

## Design System
Cabinet Grotesk, Satoshi and JetBrains Mono with system fallbacks. Purple light/dark token system. Existing spacing tokens and responsive breakpoints remain authoritative in `style.css`.

## Important Components
Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, capability cards, approach/work sections, contact form, footer and scroll-reveal elements.

## Browser Targets
Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Compatibility Findings
Core CSS avoids limited-availability text sizing, non-standard font smoothing, `text-rendering: optimizeLegibility` and dynamic viewport units. Progressive fallbacks remain for sticky positioning, backdrop blur, masking, touch hints and forced-colour focus. Runtime browser/device verification remains UNKNOWN.

## Known Constraints
No framework or package manager. Enquiry form uses `mailto:` until a real backend/CRM exists. Business configuration is still mainly in `index.html`. External fonts remain hosted rather than self-hosted. The current HTML still contains non-essential `fetchpriority="high"` hints and those remain unverified for the strict browser target.

## Completed Improvements
- Hardened theme storage and validated stored values.
- Added theme button state semantics (`aria-pressed`) and a title hint.
- Throttled scroll-state work through `requestAnimationFrame` with cancellation on page exit.
- Hardened mobile drawer focus management and keyboard focus trapping.
- Added Escape-to-close and outside-click close behaviour.
- Added body scroll locking while the drawer is open.
- Added automatic drawer close when returning to desktop width.
- Preserved safe hash scrolling and now update the URL hash without forcing a page reload.
- Added anchor scroll margins for sticky-header clearance.
- Added a graceful mailto fallback message if an email client does not open.
- Made form status updates screen-reader observable with `aria-live`.
- Added print cleanup for drawer state and decorative site chrome.
- Added a lightweight custom 404 page with `noindex`.
- Added `SECURITY.md` documenting the static security boundary and deployment controls.
- Preserved progressive compatibility architecture rather than introducing a framework.

## Outstanding Issues
HIGH: Real Chrome/Edge/Firefox/Safari runtime matrix is not completed.
HIGH: Final business/service/commercial claims require owner review before public release.
MEDIUM: Font licensing/privacy/self-hosting review remains outstanding.
MEDIUM: Local JPEG provenance/licensing remains unproven.
MEDIUM: Business configuration should eventually be separated from implementation if that improves template reuse without unnecessary abstraction.
LOW: `fetchpriority="high"` remains in `index.html`.
LOW: Final social-preview image strategy and deployment-specific SEO verification remain outstanding.

## Deferred Issues
Backend/CRM form integration, full browser/device matrix, final asset licensing clearance and deeper automated regression testing are deferred until suitable runtime/tooling is available or requirements justify them.

## Decisions
Keep vanilla HTML/CSS/JS. Evolve the existing architecture rather than introducing a framework. Prefer progressive enhancement. Preserve existing IDs/classes/data attributes when customizing. Do not invent business facts, testimonials, awards, certifications or final artwork.

Service positioning remains six core areas with related extensions. AI-assisted engineering is positioned as an engineering workflow capability, not a standalone AI product service.

## Commercial / Legal Notes
The repository remains a branded Leano ITC implementation rather than a neutral template distribution. Leano identity, claims, metadata, contact details and imagery must be deliberately replaced for another customer. Licensing/provenance uncertainty remains documented. This is not legal advice.

## Third-Party Dependencies
External Fontshare CSS for Cabinet Grotesk/Satoshi and Google Fonts CSS for JetBrains Mono. No JS framework or package dependency.

## Template Customization Points
Brand, content, theme tokens, imagery, navigation, contact details, SEO metadata and capability wording. See `CUSTOMIZATION.md`.

## Regression Warnings
Preserve `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]` and drawer `data-open` behaviour unless consumers are updated together.

## Scorecard
| Category | Score |
|---|---:|
| Architecture | 86 |
| Maintainability | 92 |
| UI/UX | 89 |
| Responsive | 91 |
| Browser Compatibility | 88 |
| Accessibility | 95 |
| JavaScript Quality | 95 |
| CSS Quality | 94 |
| Performance | 86 |
| Security | 80 |
| SEO | 89 |
| Content Quality | 93 |
| Template Reusability | 87 |
| Customizability | 86 |
| Commercial Readiness | 86 |
| Legal / Licence Hygiene | 61 |
| Overall | 90 |

Scores are based on static evidence only. Runtime browser execution, final asset rights and deployment-level security/SEO controls remain unverified.

## Error Scorecard
CRITICAL: 0
HIGH: 2
MEDIUM: 3
LOW: 2

CONSOLE ERRORS: UNKNOWN
BROKEN LINKS: UNKNOWN
BROKEN INTERACTIONS: UNKNOWN
RESPONSIVE BLOCKERS: UNKNOWN
KNOWN BROWSER ISSUES: 0
ACCESSIBILITY BLOCKERS: 0
SECURITY BLOCKERS: 0
LEGAL/LICENCE BLOCKERS: 1

Unknown is not zero.

## Verification
Current HEAD was inspected before this round. Static source review covered the current repository structure, `index.html`, `app.js`, `compat.css`, `MEMORY.md` and project documentation. The new JavaScript changes preserve existing IDs/classes and add guarded behaviour only. The browser/device matrix remains UNKNOWN because actual runtime installations are unavailable in this environment.

## Last Verified Commit
`5bd5c5497cc6ed6f8b54bc850d24cfc171381da8`

## Last Improvement Round
2026-09-07: batched mobile-navigation resilience, focus management, theme semantics, scroll lifecycle cleanup, anchor positioning, mailto fallback messaging, print-state cleanup, custom 404 handling and security/deployment documentation. Static verification performed against the current GitHub HEAD; runtime browser matrix remains unverified.
