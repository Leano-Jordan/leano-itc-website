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

The obsolete `-moz-text-size-adjust` and `-webkit-text-size-adjust` declarations are absent. Standard `text-size-adjust: 100%` is used. `theme-color` metadata is absent. Dynamic viewport sizing has a `100vh` fallback before `100dvh`. Backdrop blur, masking and sticky positioning have progressive fallbacks. Touch controls receive safe mobile interaction hints. Forced-colour focus and control borders are protected. Real multi-browser runtime verification remains unavailable and must not be represented as verified.

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
- Added sticky-positioning fallback for engines without `position: sticky`.
- Added WebKit-only masking fallback without restoring obsolete text-size-adjust declarations.
- Added touch-action and tap-highlight handling for links and controls.
- Added forced-colour focus and button-control visibility safeguards.
- Added explicit iframe containment and border normalization.
- Added image border normalization for legacy rendering consistency.
- Added vertical-only textarea resizing to preserve form layout.
- Added native-system-theme change handling when no stored theme preference exists.
- Added `requestAnimationFrame` fallback for older/nonstandard execution contexts.
- Added `scrollY` fallback to `pageYOffset`.
- Added IntersectionObserver cleanup on `pagehide`.
- Added smooth-scroll feature fallback through `@supports`.

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
| Architecture | 85 |
| Maintainability | 88 |
| UI/UX | 88 |
| Responsive | 87 |
| Browser Compatibility | 82 |
| Accessibility | 92 |
| JavaScript Quality | 93 |
| CSS Quality | 89 |
| Performance | 84 |
| Security | 77 |
| SEO | 89 |
| Content Quality | 93 |
| Template Reusability | 86 |
| Customizability | 85 |
| Commercial Readiness | 85 |
| Legal / Licence Hygiene | 61 |
| Overall | 87 |

Scores reflect static evidence. Compatibility, accessibility and JavaScript scores improved from additional progressive fallbacks, native-theme handling, event fallbacks and lifecycle cleanup. Runtime browser/device verification remains unverified, so the browser score is deliberately capped below release-grade certainty. Legal/licence remains low because rights are not yet proven.

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

Current repository HEAD was inspected before this round. Static review covered `base.css`, `compat.css`, `app.js`, `index.html`, `MEMORY.md`, browser compatibility documentation and the repository's recent commit state.

Static verification: `-moz-text-size-adjust` absent; `-webkit-text-size-adjust` absent; `theme-color` metadata absent; standard `text-size-adjust` present; `100vh` precedes `100dvh`; sticky, masking and backdrop fallbacks are present; forced-colour safeguards are present; touch handling is present; native theme changes are guarded; scroll scheduling has a fallback; IntersectionObserver cleanup is present.

Real browser rendering and interaction remain UNKNOWN because a full Chrome/Firefox/Safari/Edge/Samsung Internet/mobile execution matrix is not available in the current environment.

## Last Verified Commit

`d47f8dd745182905f63240e06de2b39e0c12635f`

## Last Improvement Round

2026-09-07: executed a browser-hardening batch covering progressive CSS fallbacks, mobile touch behaviour, forced-colour accessibility, form rendering safeguards, system-theme changes, animation/scroll fallbacks and IntersectionObserver lifecycle cleanup. The previously reported Mozilla/WebKit text-size-adjust and `theme-color` diagnostics remain absent from the current source.
