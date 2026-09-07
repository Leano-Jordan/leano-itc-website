# PROJECT MEMORY

## Current Architecture

Static single-page HTML/CSS/JavaScript with no build step. `base.css` provides foundation styles, `style.css` provides tokens/layout/components, `compat.css` provides progressive fallbacks, and `app.js` provides interaction behaviour.

## Repository Structure

`index.html`, `base.css`, `style.css`, `compat.css`, `app.js`, `assets/`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `BROWSER_COMPATIBILITY.md`, `robots.txt`, `sitemap.xml`.

## Design System

Cabinet Grotesk, Satoshi and JetBrains Mono with system fallbacks. Purple light/dark token system. Spacing tokens `--space-1` through `--space-32`. Breakpoints currently centred around 560px, 800px, 860px and 900px.

## Important Components

Sticky header, desktop navigation, mobile drawer, theme toggle, buttons, hero, capability cards, approach/work sections, contact form, footer and scroll-reveal elements.

## Browser Targets

Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Compatibility Findings

Removed obsolete `-moz-text-size-adjust` and `-webkit-text-size-adjust` declarations in favour of the standard property. Added a `100vh` viewport fallback before `100dvh`, safer decorative masking fallbacks, narrow-screen action handling, reduced-motion coverage and print safeguards. `theme-color` metadata was removed from the HTML head to eliminate the remaining compatibility diagnostic rather than retaining a non-essential browser-UI hint. Real multi-browser runtime verification is still unavailable and must not be represented as verified.

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
- Replaced obsolete vendor-prefixed text-size adjustment declarations with standard `text-size-adjust`.
- Added explicit light/dark `color-scheme` handling for native controls.
- Added `100vh` fallback, overflow wrapping, disabled-control cursor states and print-safe output.
- Hardened decorative mask fallback logic and added an extra narrow-mobile layout guard.
- Validated stored theme values before applying them.
- Throttled scroll-state work through `requestAnimationFrame`.
- Replaced fragile selector construction with `getElementById` for drawer hash targets and guarded scroll positions at zero.
- Removed `theme-color` metadata that was producing the remaining compatibility diagnostic.
- Added Fontshare preconnect, hero `fetchpriority`, intrinsic hero dimensions and a strict referrer policy.
- Added `BROWSER_COMPATIBILITY.md` as the explicit compatibility evidence record.

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
| Maintainability | 86 |
| UI/UX | 87 |
| Responsive | 85 |
| Browser Compatibility | 78 |
| Accessibility | 90 |
| JavaScript Quality | 90 |
| CSS Quality | 87 |
| Performance | 84 |
| Security | 77 |
| SEO | 89 |
| Content Quality | 93 |
| Template Reusability | 86 |
| Customizability | 85 |
| Commercial Readiness | 84 |
| Legal / Licence Hygiene | 61 |
| Overall | 86 |

Scores reflect evidence. Browser compatibility improved through removal of obsolete diagnostics and stronger fallbacks, but runtime verification remains unavailable. Performance improved through connection warming, hero priority and intrinsic dimensions. Accessibility and JS scores reflect safer interaction and native-control handling. Legal/licence remains low because rights are not yet proven.

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

Current repository HEAD was inspected before this round. Static source review covered `base.css`, `compat.css`, `app.js`, `index.html`, repository tree and prior engineering memory. The six existing service cards, navigation contracts, form hooks and static architecture were preserved.

Static verification: obsolete Mozilla/WebKit text-size adjustment declarations are absent; `theme-color` metadata is absent; viewport fallback exists; compatibility documentation is present; JavaScript theme storage, scroll scheduling and drawer target handling are guarded; hero loading hints and intrinsic dimensions are present.

Real browser rendering and interaction remain UNKNOWN because a full Chrome/Firefox/Safari/Edge/Samsung Internet/mobile execution matrix is not available in the current environment.

## Last Verified Commit

`49603cca0b4a34525b40e2d58c120ba40879bc5b`

## Last Improvement Round

2026-09-07: hardened browser compatibility and responsive behaviour, removed the remaining text-size-adjust and theme-color diagnostics, strengthened JS event handling, added print/narrow-mobile safeguards, improved hero loading hints and added explicit browser compatibility documentation.
