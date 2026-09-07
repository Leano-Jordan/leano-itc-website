# PROJECT MEMORY

## Current Architecture
Static single-page HTML/CSS/JavaScript with no build step. `base.css` is the foundation, `style.css` contains tokens/layout/components, `compat.css` contains progressive fallbacks, and `app.js` contains interaction behaviour.

## Repository Structure
`index.html`, `base.css`, `style.css`, `compat.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `BROWSER_COMPATIBILITY.md`, `SECURITY.md`, `404.html`, `robots.txt`, `sitemap.xml`.

## Browser Targets
Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS. Runtime matrix remains UNKNOWN.

## Compatibility Findings
Core CSS avoids limited-availability text sizing, non-standard font smoothing, `text-rendering: optimizeLegibility` and dynamic viewport units. Progressive fallbacks remain for sticky positioning, backdrop blur, masking, touch hints and forced-colour focus. `fetchpriority="high"` remains in HTML and is still unverified for the strict browser target.

## Important Components
Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, capability cards, approach/work sections, contact form, footer and scroll-reveal elements.

## Completed Improvements
- Hardened theme storage and validated stored values.
- Added theme button `aria-pressed` state and title hint.
- Added scroll-frame cancellation on page exit.
- Added mobile drawer focus management and keyboard focus trapping.
- Added Escape and outside-click drawer closing.
- Added background scroll locking while the drawer is open.
- Added automatic drawer close when returning to desktop width.
- Preserved hash scrolling while updating the URL hash without reload.
- Added sticky-header anchor scroll margins.
- Added graceful `mailto:` failure messaging.
- Made form status updates screen-reader observable with `aria-live`.
- Added print cleanup for drawer state and decorative chrome.
- Added a lightweight `404.html` with `noindex`.
- Added `SECURITY.md` documenting the static security boundary and deployment controls.

## Known Constraints
No framework or package manager. The enquiry form uses `mailto:` until a real backend/CRM exists. Business configuration is mainly in `index.html`. External fonts are hosted rather than self-hosted.

## Outstanding Issues
HIGH: Real multi-browser/device runtime matrix is not completed.
HIGH: Final business/service/commercial claims require owner review.
MEDIUM: Font licensing/privacy/self-hosting review remains outstanding.
MEDIUM: Local JPEG provenance/licensing remains unproven.
MEDIUM: Business configuration should eventually be separated if that improves reuse without unnecessary abstraction.
LOW: `fetchpriority="high"` remains in `index.html`.
LOW: Final social-preview image and deployment-specific SEO verification remain outstanding.

## Deferred Issues
Backend/CRM integration, full browser/device matrix, final asset licensing clearance and deeper automated regression testing.

## Decisions
Keep vanilla HTML/CSS/JS. Prefer progressive enhancement and evolutionary refactoring. Preserve existing IDs/classes/data attributes. Do not invent business facts, testimonials, awards, certifications or final artwork. Keep six core service areas with related extensions. AI-assisted engineering remains an engineering workflow capability, not a standalone AI product service.

## Commercial / Legal Notes
The repository is still a branded Leano ITC implementation rather than a neutral template distribution. Identity, claims, metadata, contact details and imagery must be replaced deliberately for another customer. Licensing uncertainty remains documented. This is not legal advice.

## Third-Party Dependencies
Fontshare CSS for Cabinet Grotesk/Satoshi and Google Fonts CSS for JetBrains Mono. No JS framework dependency.

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

## Last Verified Commit
`5bd5c5497cc6ed6f8b54bc850d24cfc171381da8`

## Last Improvement Round
2026-09-07: improved mobile navigation resilience, focus management, theme semantics, scroll lifecycle, anchor positioning, mailto fallback behaviour, print handling, 404 handling and security/deployment documentation. Static verification only; runtime browser matrix remains UNKNOWN.
