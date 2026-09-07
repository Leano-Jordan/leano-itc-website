# PROJECT MEMORY

## Current Architecture

Static single-page HTML/CSS/JavaScript with no build step. `base.css` provides foundation styles, `style.css` provides tokens/layout/components, `compat.css` provides progressive fallbacks, and `app.js` provides interaction behaviour.

## Repository Structure

`index.html`, `base.css`, `style.css`, `compat.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `robots.txt`, `sitemap.xml`.

## Design System

Cabinet Grotesk, Satoshi and JetBrains Mono with system fallbacks. Purple light/dark token system. Spacing tokens `--space-1` through `--space-32`. Breakpoints currently centred around 560px, 800px, 860px and 900px.

## Important Components

Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, capability cards, approach/work sections, contact form, footer and scroll-reveal elements.

## Browser Targets

Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Compatibility Findings

Progressive fallbacks exist for dynamic viewport units, backdrop blur and masking. Core colours avoid OKLCH/color-mix diagnostics. Real multi-browser runtime verification is still unavailable in the current environment and must not be represented as verified.

## Known Constraints

No framework or package manager. Enquiry form uses `mailto:` until a real backend/CRM is added. Business configuration is still mainly in `index.html`. External fonts remain hosted rather than self-hosted.

## Completed Improvements

- Hardened theme storage, mobile drawer, reduced-motion behaviour, validation and mailto flow.
- Added browser compatibility fallbacks and removed unsupported CSS diagnostics.
- Corrected contact/footer semantic styling hooks.
- Made theme storage key reusable as `site-theme`.
- Added crawl guidance through `robots.txt` and `sitemap.xml` for the current canonical site.
- Added `CUSTOMIZATION.md` to make hand-off/customization points explicit.
- Added `THIRD_PARTY_LICENSES.md` to record licensing/provenance items requiring verification.
- Fixed mobile drawer navigation focus so keyboard focus returns to the menu trigger when a drawer link closes the menu.
- Expanded the six core capability cards with directly supported document/workflow, automation, integration, local-network/device, modernisation and handover-related wording without creating unsupported service departments.
- Added AI-assisted engineering as an engineering-workflow capability rather than a standalone AI service claim.
- Expanded enquiry topics to cover the new capability extensions without changing the underlying mailto workflow.

## Outstanding Issues

HIGH: Real Chrome/Edge/Firefox/Safari runtime matrix is not completed. Browser rendering and interaction remain UNKNOWN.

HIGH: Final business/service and commercial claims require owner review before public release.

MEDIUM: Font licensing/privacy/self-hosting review remains outstanding.

MEDIUM: Local JPEG provenance/licensing remains unproven.

MEDIUM: Business configuration should eventually be separated from implementation if doing so improves template reuse without creating an abstraction-heavy system.

LOW: Final social-preview image strategy and deployment-specific SEO verification remain outstanding.

## Deferred Issues

Backend/CRM form integration, full browser/device matrix, final asset licensing clearance, and deeper automated regression testing are deferred until suitable runtime/tooling is available or the project requirements justify them.

## Decisions

Keep vanilla HTML/CSS/JS. Evolve the existing architecture rather than introducing a framework. Prefer progressive enhancement. Preserve existing JavaScript IDs/classes/data attributes when customizing. Do not invent business facts, testimonials, awards, certifications or final artwork.

Service positioning remains six core areas with related extensions. Digital documents/workflows, API/system integration, automation, modernisation, technical planning, local-network/device-aware work and development documentation are attached to existing capabilities rather than marketed as separate departments. AI-assisted engineering is described as an internal/workflow capability, not a standalone AI product service.

## Commercial / Legal Notes

The site is not yet a neutral commercial template distribution. Leano-specific identity, claims, metadata, contact details and imagery must be deliberately replaced for another customer. `THIRD_PARTY_LICENSES.md` records known licensing/provenance uncertainty. This is not legal advice.

## Third-Party Dependencies

External Fontshare CSS for Cabinet Grotesk/Satoshi and Google Fonts CSS for JetBrains Mono. No JS framework or package dependency.

## Template Customization Points

Brand, content, theme tokens, imagery, navigation, contact details, SEO metadata and capability wording. See `CUSTOMIZATION.md`.

## Regression Warnings

Preserve `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]` and drawer `data-open` behaviour unless consumers are updated together. The service card grid and enquiry topic list are content-level extensions and should remain aligned with the six-core capability model.

## Scorecard

| Category | Score |
|---|---:|
| Architecture | 84 |
| Maintainability | 84 |
| UI/UX | 86 |
| Responsive | 82 |
| Browser Compatibility | 72 |
| Accessibility | 89 |
| JavaScript Quality | 88 |
| CSS Quality | 84 |
| Performance | 80 |
| Security | 75 |
| SEO | 88 |
| Content Quality | 93 |
| Template Reusability | 86 |
| Customizability | 85 |
| Commercial Readiness | 83 |
| Legal / Licence Hygiene | 61 |
| Overall | 84 |

Scores reflect evidence. Content, reusability and customizability improved because the public capability model now covers supported adjacent work without broad unsupported claims. Browser Compatibility remains deliberately lower because runtime verification is incomplete. Legal/licence remains low because rights are not yet proven.

## Error Scorecard

CRITICAL: 0
HIGH: 2
MEDIUM: 3
LOW: 1

CONSOLE ERRORS: UNKNOWN
BROKEN LINKS: UNKNOWN
BROKEN INTERACTIONS: UNKNOWN
RESPONSIVE BLOCKERS: UNKNOWN
KNOWN BROWSER ISSUES: 0
ACCESSIBILITY BLOCKERS: 0
SECURITY BLOCKERS: 0
LEGAL/LICENCE BLOCKERS: 1

Unknown is not zero. The counts above represent known/reviewed state, while unverified runtime categories remain UNKNOWN.

## Verification

Current repository HEAD was inspected before this round. The six existing service cards, navigation contracts, form hooks and static architecture were preserved while capability wording and enquiry topics were extended. The changes are content/markup-level and do not introduce a framework, dependency or new runtime API.

Static verification: HTML structure reviewed against existing CSS/JS hooks. JavaScript implementation was not changed in this round. Real browser rendering and interaction remain UNKNOWN.

## Last Verified Commit

`2dc5e50e12a862395c94cdfd30de2a45c252c4d1` before this round.

## Last Improvement Round

2026-09-07: extended the six core service capabilities with directly supported adjacent work, added capability-aligned enquiry topics, clarified AI-assisted engineering positioning, and updated handover documentation and scorecard.
