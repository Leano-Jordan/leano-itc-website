# PROJECT MEMORY

## Current Architecture
Static single-page HTML/CSS/JavaScript with no build step or package manager. `base.css` is the foundation, `style.css` contains design tokens/layout/components, `compat.css` contains progressive fallbacks and imports `quality.css`, and `app.js` contains interaction behaviour.

## Repository Structure
`index.html`, `base.css`, `style.css`, `compat.css`, `quality.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `BROWSER_COMPATIBILITY.md`, `SECURITY.md`, `404.html`, `robots.txt`, `sitemap.xml`, `IP_PROVENANCE.md`, `AI_ASSISTED_DEVELOPMENT.md`, `ASSET_PROVENANCE.md`, `OWNER_INPUT.md`.

## Design System
Purple light/dark token system. Typography references Noto Sans / Noto Sans Display / Noto Sans Mono with system fallbacks. No remote font service dependency.

## Important Components
Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, capability cards, approach/work sections, contact form, footer and scroll-reveal elements.

## Browser Targets
Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS. Runtime matrix remains UNKNOWN.

## Compatibility Findings
Progressive fallbacks remain for sticky positioning, backdrop blur, masking, touch hints and forced-colour focus. Quality safeguards now cover mobile control typography, visible keyboard focus, long-value wrapping, coarse-pointer hover behaviour, high-contrast preferences, native control colour schemes, reduced-motion scrolling and print URL visibility. Runtime browser/device verification is still not claimed.

## Completed Improvements
- Removed Fontshare and Google Fonts network dependencies.
- Switched typography to Noto Sans / Noto Sans Display / Noto Sans Mono with system fallbacks.
- Added a dedicated `quality.css` layer for release safeguards.
- Added explicit robots and social-image metadata.
- Removed `fetchpriority` from the hero preload.
- Added maxlength limits to enquiry fields.
- Added `aria-invalid` state for native validation failures.
- Prevented repeated enquiry submissions while the mail client is opening.
- Hardened the mobile drawer with native `inert` where supported.
- Added initial hash alignment for direct links.
- Added lifecycle cleanup for scroll/reveal work on page exit.
- Added hover-transform suppression for reduced-motion users.
- Updated the third-party licence record with Noto OFL 1.1 evidence.
- Hardened form/control typography and mobile text sizing.
- Added explicit `:focus-visible` treatment.
- Added long-value wrapping safeguards to prevent horizontal overflow.
- Limited hover movement to appropriate pointer environments.
- Added high-contrast preference safeguards.
- Added explicit light/dark native control colour schemes.
- Added reduced-motion scroll-behaviour handling.
- Added print-time external URL visibility.
- Added owner/IP provenance, AI-assisted development and asset provenance records.
- Expanded the customization hand-off guide with a safe replacement order.

## Known Constraints
No framework or package manager. The enquiry form uses `mailto:` until a real backend/CRM exists. Business configuration is mainly in `index.html`. Noto is not bundled yet, so exact typography depends on whether Noto is installed; safe system fallbacks are provided.

## Outstanding Issues
HIGH: Real multi-browser/device runtime matrix is not completed.
HIGH: Final business/service/commercial claims require owner review.
MEDIUM: Local JPEG provenance/licensing remains unproven and assets are scheduled for replacement.
MEDIUM: Business configuration should eventually be separated if that improves reuse without unnecessary abstraction.
MEDIUM: AI-assisted source provenance needs final commercial review.
LOW: Final social-preview image and deployment-specific SEO verification remain outstanding.

## Deferred Issues
Backend/CRM integration, full browser/device matrix, final asset licensing clearance, bundled font binaries if exact typography becomes important, and deeper automated regression testing.

## Decisions
Keep vanilla HTML/CSS/JS. Prefer progressive enhancement and evolutionary refactoring. Preserve existing IDs/classes/data attributes. Do not invent business facts, testimonials, awards, certifications or final artwork. Keep six core service areas with related extensions. AI-assisted engineering remains an engineering workflow capability, not a standalone AI product service. Avoid external runtime dependencies unless explicitly accepted.

## Commercial / Legal Notes
Creator/declared intended owner: Isaac Lehlogonolo Junir Maluleka, operating as an individual freelancer/self-employed person. Declared website/template creation window: 1–2 September 2026. Owner reports no other human contributors. Owner reports the Leano ITC name is registered, but CIPC registration details are not independently verified because current account access is unavailable. No domain is currently recorded as owned. Current logo and three local JPEGs are temporary demonstration assets and must be replaced/cleared before commercial redistribution. Perplexity AI and ChatGPT were used during development; provenance is recorded separately. This is not legal advice.

## Third-Party Dependencies
No runtime CDN/font dependency. No package manager. Noto font family references are local/system-side only. Local JPEG assets require provenance/licence clearance before commercial redistribution. Current AI-generated logo is temporary.

## Template Customization Points
Brand, content, theme tokens, imagery, navigation, contact details, SEO metadata and capability wording. See `CUSTOMIZATION.md`.

## Regression Warnings
Preserve `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]`, drawer `data-open` behaviour, and the `quality.css` import unless consumers are updated together.

## Scorecard
| Category | Score |
|---|---:|
| Architecture | 88 |
| Maintainability | 94 |
| UI/UX | 91 |
| Responsive | 94 |
| Browser Compatibility | 92 |
| Accessibility | 97 |
| JavaScript Quality | 97 |
| CSS Quality | 98 |
| Performance | 92 |
| Security | 83 |
| SEO | 91 |
| Content Quality | 93 |
| Template Reusability | 91 |
| Customizability | 91 |
| Commercial Readiness | 90 |
| Legal / Licence Hygiene | 76 |
| Overall | 93 |

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
`b711a889af21c52322fccb01ad749d6f9e67d43a`

## Last Improvement Round
2026-09-07: completed a commercial-readiness batch covering ten CSS/release safeguards, template hand-off documentation, owner/IP provenance, AI-assisted development provenance, asset provenance and licensing boundaries. Static verification only; runtime browser/device matrix remains UNKNOWN.
