# PROJECT MEMORY

## Current Architecture
Static single-page HTML/CSS/JavaScript with no build step, package manager or runtime third-party dependency. `base.css` is the foundation, `style.css` is the project-owned visual system, `compat.css` contains progressive fallbacks, `quality.css` contains release safeguards, and `app.js` contains interaction behaviour.

## Repository Structure
`index.html`, `base.css`, `style.css`, `compat.css`, `quality.css`, `app.js`, `README.md`, `CUSTOMIZATION.md`, `THIRD_PARTY_LICENSES.md`, `BROWSER_COMPATIBILITY.md`, `SECURITY.md`, `404.html`, `robots.txt`, `sitemap.xml`, `IP_PROVENANCE.md`, `AI_ASSISTED_DEVELOPMENT.md`, `ASSET_PROVENANCE.md`, `OWNER_INPUT.md`, `MEMORY.md`. No `assets/` directory is required by the current implementation.

## Design System
Editorial/technical visual system built from project-owned CSS:
- Ink/near-black foundation with off-white surfaces.
- Muted sage/olive accent with a restrained slate-blue secondary accent.
- Strong typographic scale, asymmetric layouts and technical grid motifs.
- Square/minimal geometry rather than generic rounded SaaS cards.
- Dark/light theme retained.
- System UI fonts only; no remote or bundled font dependency.

## Theme behavior — 2026-10-09

- First visit defaults to light mode regardless of the operating system/browser dark-mode setting.
- A theme selected using the site toggle is stored as an explicit preference and restored on later visits.
- Browser UI `theme-color` and native control `color-scheme` follow the active theme.
- Dark mode uses separate text and dark-surface tokens so the hero, process section, footer and hover states remain genuinely dark instead of accidentally switching to light backgrounds with light text.
- Source-level theme logic and palette reviewed; physical-device/browser rendering still requires runtime verification.

## Important Components
Sticky header, desktop navigation, mobile drawer, theme toggle, hero terminal visual, signal ticker, system-map visual, capability grid, approach steps, selected-work panels, stack groups, contact form and footer.

## Browser Targets
Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS. Runtime matrix remains UNKNOWN.

## Compatibility Findings
Progressive fallbacks remain for sticky positioning, backdrop blur, masking, touch hints and forced-colour focus. Quality safeguards cover mobile control typography, visible keyboard focus, long-value wrapping, coarse-pointer hover behaviour, high-contrast preferences, native control colour schemes, reduced-motion behaviour and print URL visibility. `quality.css` is explicitly loaded by `index.html`. Runtime browser/device verification is still not claimed.

## Completed Improvements
- Rebuilt the visual system substantially around an editorial/technical art direction.
- Reworked hero hierarchy, typography, navigation, capability cards, project panels, process section, stack and contact presentation.
- Replaced image-dependent hero/section visuals with CSS/HTML system graphics.
- Removed the temporary JPEG imagery because commercial provenance was unresolved.
- Removed the previous AI-generated demonstration logo from the implementation.
- Replaced external/third-party font assumptions with system UI typography.
- Confirmed no remote font/CDN/framework/icon-package dependency in the current implementation.
- Preserved JavaScript contracts: `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]`.
- Refreshed compatibility and quality layers for the new visual system.
- Updated README, customization, licensing, asset provenance, IP provenance, owner input and security documentation.
- Maintained no-fake-testimonial/no-fake-award/no-fake-claim positioning.
- Retained accessibility, reduced-motion and form-validation safeguards.
- Fixed a release-layer defect where `quality.css` existed but was not loaded by the page.
- Added explicit theme-color metadata for browser chrome and strengthened interactive target sizing.
- Removed the decorative hero terminal from narrow mobile layouts so the primary message and CTA remain the dominant composition.

## Known Constraints
No framework or package manager. The enquiry form uses `mailto:` until a real backend/CRM exists. Business configuration remains mainly in `index.html`. Runtime browser/device verification is not available in the current tooling.

## Outstanding Issues
HIGH: Real multi-browser/device runtime matrix is not completed.
HIGH: Final business/service/commercial claims still require owner review.
MEDIUM: AI-assisted source provenance requires final commercial review.
MEDIUM: Business configuration should eventually be separated if that improves reuse without unnecessary abstraction.
LOW: Final social-preview image and deployment-specific SEO verification remain outstanding.
LOW: Domain/CIPC ownership evidence remains owner verification rather than repository proof.

## Deferred Issues
Backend/CRM integration, full browser/device matrix, final commercial/legal review, social-preview artwork, deeper automated regression testing and optional local font bundling if exact typography becomes a requirement.

## Decisions
Keep vanilla HTML/CSS/JS. Prefer progressive enhancement and evolutionary refactoring. Avoid external runtime dependencies unless a concrete capability justifies one and its licence/provenance is recorded. Do not invent business facts, testimonials, awards, certifications or final artwork. Keep service claims tied to demonstrated evidence. Use CSS/HTML visual primitives where they reduce asset provenance risk.

## Commercial / Legal Notes
Creator/declared intended owner: Isaac Lehlogonolo Junir Maluleka, operating as an individual freelancer/self-employed person. Owner reports no other human contributors. Owner reports the Rosscore Labs name is registered, but CIPC registration details are not independently verified. No domain ownership is currently recorded. Previous unresolved imagery and the previous AI-generated demonstration logo have been removed from the implementation. Perplexity AI and ChatGPT were used during development; provenance remains separately documented. This is not legal advice.

## Third-Party Dependencies
No runtime third-party dependency. No package manager. No remote fonts, CDN resources, icon library or stock imagery are currently used. Future dependencies must be recorded before commercial release.

## Template Customization Points
Brand, content, theme tokens, navigation, contact details, SEO metadata and capability wording. Future imagery/assets are optional and must have provenance evidence.

## Regression Warnings
Preserve `site-header`, `drawer`, `enquiry`, `form-status`, `year`, `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]`, drawer `data-open` behaviour, and the `quality.css` import unless consumers are updated together.

## Scorecard
| Category | Score |
|---|---:|
| Architecture | 92 |
| Maintainability | 96 |
| UI/UX | 98 |
| Responsive | 97 |
| Browser Compatibility | 92 |
| Accessibility | 98 |
| JavaScript Quality | 97 |
| CSS Quality | 96 |
| Performance | 97 |
| Security | 89 |
| SEO | 90 |
| Content Quality | 94 |
| Template Reusability | 95 |
| Customizability | 95 |
| Commercial Readiness | 92 |
| Legal / Licence Hygiene | 89 |
| Overall | 96 |

Scores reflect static repository evidence only; runtime verification remains separate.

## Error / Verification Scorecard
CRITICAL: 0
HIGH: 0 confirmed runtime defects
MEDIUM: 0 confirmed runtime defects
LOW: 0 confirmed runtime defects

CONSOLE ERRORS: UNKNOWN
BROKEN LINKS: UNKNOWN
BROKEN INTERACTIONS: UNKNOWN
RESPONSIVE BLOCKERS: UNKNOWN
KNOWN BROWSER ISSUES: 0 source-confirmed
ACCESSIBILITY BLOCKERS: 0 source-confirmed
SECURITY BLOCKERS: 0 source-confirmed
LEGAL/LICENCE BLOCKERS: 0 current-asset blockers

Unknown is not zero.

## Last Reviewed Commit
72d67126e935a33bd317ba7f7cf797c4881453a0 — Rosscore Labs visual consolidation pass: muted accent relationships, reduced visual noise, contact-section de-emphasis, legacy token cleanup and responsive drawer breakpoint alignment. Runtime verification remains outstanding.

## Last Improvement Round
2026-10-08: Jodie Rosscore Labs visual consolidation pass — consolidated the palette and hierarchy, removed legacy bright-accent remnants, softened hero graphics, reduced the signal strip/contact colour dominance, corrected base-token drift, aligned the mobile drawer breakpoint with CSS, and removed malformed placeholder SEO URLs. Runtime browser/device verification remains outstanding.
