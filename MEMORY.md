# WEBSITE PROJECT MEMORY

## CURRENT BASELINE

Current repository state: `main` after browser-compatibility and validity hardening pass.
Current branch: `main`
Current commit: `11273fff6be50377d02d1a0f3d3195e90847e827`
Current architecture: Static single-page HTML/CSS/JavaScript site with no build step.
Current stack: HTML5, CSS, vanilla JavaScript, inline SVG, local JPEG assets, external web fonts.

## TEMPLATE ARCHITECTURE

Foundation: `base.css` plus design tokens in `style.css`.
Layout: `.shell`, `.section`, responsive CSS Grid/Flexbox primitives.
Components: header, mobile drawer, buttons, cards, steps, work items, form, footer, theme toggle, scroll reveal.
Pages: `index.html` single-page implementation.
Assets: `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg`.
Configuration: Site metadata and business-specific content currently live in `index.html`; further centralisation is a future improvement.
Compatibility: `compat.css` provides progressive fallbacks for selected newer CSS features.

## DESIGN SYSTEM

Typography: Cabinet Grotesk, Satoshi, JetBrains Mono with system fallbacks.
Spacing: CSS custom-property spacing scale from `--space-1` through `--space-32`.
Colours: Purple primary palette with light/dark theme tokens and ink/surface roles.
Components: Pill buttons, cards, chips, form controls, navigation, content bands and reusable section primitives.
Responsive rules: Mobile-first layout with major layout changes at 560px, 800px, 860px and 900px; intended review widths include 375, 390, 430, 768, 1024, 1280 and 1440px.

## KNOWN DECISIONS

Decision: Preserve the existing vanilla HTML/CSS/JS architecture rather than introducing a framework.
Reason: The repository is a small static site and does not need framework complexity.
Date: 2026-09-07
Impact: Lower maintenance and easier reuse as a static template.

Decision: Add a compatibility layer instead of rewriting the design system to older CSS syntax.
Reason: Modern browsers can retain the existing visual treatment while older browsers receive functional fallbacks.
Date: 2026-09-07
Impact: Better progressive enhancement with a small, isolated compatibility surface.

Decision: Use native form validation and `mailto:` for the current enquiry flow.
Reason: No backend or CRM integration exists in the repository.
Date: 2026-09-07
Impact: The form remains static-site compatible; production CRM/inbox wiring remains manual work.

## COMPLETED WORK

Date: 2026-09-07
Change: Hardened theme storage, mobile navigation, reduced-motion handling, form validation and mailto behaviour.
Files: `app.js`
Verification: JavaScript syntax check passed locally; repository content re-fetched after commit.
Commit: `bc00d41c922f63218701e61e36636b205ad39a72`

Date: 2026-09-07
Change: Fixed malformed favicon markup, corrected invalid `<dbl>` semantics, corrected phone URI, cleaned metadata, added social metadata, improved image loading hints and removed unsupported-looking commitment statistics from the visible template baseline.
Files: `index.html`
Verification: Current file re-fetched from `main`; contact markup and corrected phone URI confirmed.
Commit: `be817eb4e098e056aa640028ce645a8b40607c51`

Date: 2026-09-07
Change: Added progressive browser compatibility fallbacks and collapsed-drawer visibility protection.
Files: `compat.css`
Verification: CSS compatibility layer parsed locally with `tinycss2` with zero parse errors; file re-fetched from `main`.
Commit: `11273fff6be50377d02d1a0f3d3195e90847e827`

## CURRENT SCORECARD

Architecture: 82
Maintainability: 79
Visual: 84
UX: 83
Responsive: 82
Accessibility: 84
Performance: 78
SEO: 82
Security: 75
Code Quality: 81
Content: 72
Commercial: 73
Legal/IP: 58
Reusability: 75
Overall: 77

Scoring note: Scores are engineering estimates from the current repository inspection, not automated compliance results. Legal/IP remains deliberately low because asset licensing and business-specific rights are not proven by the repository alone.

## OPEN ISSUES

Priority: HIGH
Issue: Full cross-browser runtime verification has not been executed in real Chrome, Edge, Firefox and Safari sessions in this environment.
Status: UNKNOWN / ENVIRONMENT LIMIT
Affected files: Whole site.
Required action: Run browser matrix tests on real target browsers or a browser automation service.

Priority: HIGH
Issue: Business-specific service and technology claims are not independently substantiated by this repository.
Status: MANUAL REVIEW REQUIRED
Affected files: `index.html`
Required action: Confirm which services, technologies, outcomes and commercial claims Leano ITC is authorised and genuinely able to advertise.

Priority: MEDIUM
Issue: External fonts are loaded from Fontshare and Google Fonts.
Status: REVIEW
Affected files: `index.html`
Required action: Confirm licensing, availability, privacy implications and whether self-hosting is preferable for a reusable commercial template.

Priority: MEDIUM
Issue: SEO infrastructure is incomplete for a production template.
Status: OPEN
Affected files: Repository root.
Required action: Add and verify `robots.txt`, `sitemap.xml`, deployment-aware canonical configuration and production social-image strategy where appropriate.

Priority: MEDIUM
Issue: Business configuration is embedded directly in `index.html`.
Status: OPEN
Affected files: `index.html`
Required action: Introduce a lightweight content/config layer only if it simplifies future duplication without adding build complexity.

## MANUAL WORK

Item: Confirm final business claims, services, technology stack and illustrative work examples.
Reason: Repository evidence alone cannot prove commercial capability claims.
Owner: Site owner.
Status: Pending.

Item: Confirm rights/licences for supplied imagery, fonts, icons and other third-party assets before commercial distribution.
Reason: Technical inspection cannot establish legal ownership or licensing history.
Owner: Site owner.
Status: Pending.

Item: Connect the enquiry form to a real inbox/CRM if a direct `mailto:` flow is not sufficient for production.
Reason: No backend/form service exists in the current architecture.
Owner: Site owner.
Status: Pending.

Item: Perform final real-browser matrix testing, including Safari on macOS/iOS.
Reason: The current environment does not provide a full browser automation matrix.
Owner: Site owner / release environment.
Status: Pending.

## DEPENDENCIES

Package: None.
Purpose: No npm/runtime dependency is currently required by the site.
Licence: N/A.
Status: Good for static distribution.

External resource: Fontshare CSS endpoint.
Purpose: Cabinet Grotesk and Satoshi fonts.
Licence: Must be confirmed from the font/source terms before redistribution.
Status: Review.

External resource: Google Fonts CSS endpoint.
Purpose: JetBrains Mono.
Licence: Font licence and Google Fonts delivery terms should be confirmed for the final commercial template.
Status: Review.

## LEGAL/IP NOTES

Asset: `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg`.
Source/licence: Not established by repository evidence.
Concern: Commercial redistribution rights are unknown.
Action: Confirm provenance/licence or replace with owned/permissively licensed assets.

Asset: External fonts.
Source/licence: External providers.
Concern: Final template distribution and self-hosting rights should be checked.
Action: Record exact licences before release.

## TEMPLATE CUSTOMIZATION NOTES

What can be changed safely: Visible business copy, contact details, navigation labels, service cards, work examples, colours through design tokens, typography declarations, imagery paths and metadata.
Where: Primarily `index.html`, `style.css`, `base.css`, and `assets/`.
How: Replace business-specific content and assets while preserving IDs/classes used by JavaScript and navigation.

## NEXT VERIFIED PRIORITY

Issue: Complete a deeper accessibility/SEO/content audit and establish a browser test matrix.
Reason: Foundation and obvious browser-facing defects have been addressed; the next risk is release confidence rather than cosmetic change.
Expected improvement: Higher evidence quality and fewer unknowns before commercial-template release.

## RELEASE HISTORY

Commit: `bc00d41c922f63218701e61e36636b205ad39a72`
Date: 2026-09-07
Changes: JavaScript resilience and interaction hardening.
Score: 75/100 estimated interim baseline.
Verification: Local syntax check + repository rescan.

Commit: `be817eb4e098e056aa640028ce645a8b40607c51`
Date: 2026-09-07
Changes: HTML validity, semantics, metadata, claims cleanup and browser-facing fixes.
Score: 76/100 estimated interim baseline.
Verification: Repository rescan and targeted structural inspection.

Commit: `11273fff6be50377d02d1a0f3d3195e90847e827`
Date: 2026-09-07
Changes: Progressive browser compatibility layer.
Score: 77/100 estimated current baseline.
Verification: CSS parse test passed; repository rescanned.
