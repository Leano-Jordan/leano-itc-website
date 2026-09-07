# PROJECT MEMORY

## Current Architecture

Static single-page HTML/CSS/JavaScript with no build step. `base.css` provides foundation styles, `style.css` provides tokens/layout/components, `compat.css` provides progressive fallbacks, and `app.js` provides interaction behaviour.

## Repository Structure

`index.html`, `base.css`, `style.css`, `compat.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `robots.txt`, `sitemap.xml`.

## Design System

Cabinet Grotesk, Satoshi and JetBrains Mono with system fallbacks. Purple light/dark token system. Spacing tokens `--space-1` through `--space-32`. Breakpoints currently centred around 560px, 800px, 860px and 900px.

## Important Components

Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, cards, approach/work sections, contact form, footer and scroll-reveal elements.

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

## Commercial / Legal Notes

The site is not yet a neutral commercial template distribution. Leano-specific identity, claims, metadata, contact details and imagery must be deliberately replaced for another customer. `THIRD_PARTY_LICENSES.md` records known licensing/provenance uncertainty. This is not legal advice.

## Third-Party Dependencies

External Fontshare CSS for Cabinet Grotesk/Satoshi and Google Fonts CSS for JetBrains Mono. No JS framework or package dependency.

## Template Customization Points

Brand, content, theme tokens, imagery, navigation, contact details and SEO metadata. See `CUSTOMIZATION.md`.

## Regression Warnings

Preserve `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]` and drawer `data-open` behaviour unless consumers are updated together.

## Scorecard

| Category | Score |
|---|---:|
| Architecture | 84 |
| Maintainability | 83 |
| UI/UX | 85 |
| Responsive | 82 |
| Browser Compatibility | 72 |
| Accessibility | 89 |
| JavaScript Quality | 88 |
| CSS Quality | 84 |
| Performance | 80 |
| Security | 75 |
| SEO | 88 |
| Content Quality | 90 |
| Template Reusability | 84 |
| Customizability | 83 |
| Commercial Readiness | 81 |
| Legal / Licence Hygiene | 61 |
| Overall | 83 |

Scores reflect evidence. Browser Compatibility remains deliberately lower because runtime verification is incomplete. Legal/licence remains low because rights are not yet proven.

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

Static repository inspection confirms the current tree contains the documented files and current production URL metadata. `app.js` was previously syntax-checked successfully with Node.js. This round statically verified the drawer focus-return change and the new SEO/licensing/customization documentation. Real browser rendering remains UNKNOWN.

## Last Verified Commit

`b38faa86122130ec5075f4176d0ebfd3199f8e7e` before this round.

## Last Improvement Round

2026-09-07: added SEO crawl files, commercial hand-off/licence records, and mobile drawer keyboard-focus regression protection. Browser runtime remains unverified.
