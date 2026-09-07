# WEBSITE PROJECT MEMORY

## CURRENT BASELINE

Current repository state: `main` after browser-compatibility cleanup, CSS syntax simplification, contact definition-list repair and repository rescan.
Current branch: `main`
Current repository HEAD: `6dd43d9545976073597dcd5dd6338229ae74508e`
Current architecture: Static single-page HTML/CSS/JavaScript site with no build step.
Current stack: HTML5, CSS, vanilla JavaScript, inline SVG, local JPEG assets, external web fonts.

## TEMPLATE ARCHITECTURE

Foundation: `base.css` + design tokens/components in `style.css`.
Layout: `.shell`, `.section`, CSS Grid/Flexbox primitives.
Components: header, mobile drawer, buttons, cards, steps, work items, form, footer, theme toggle, scroll reveal.
Pages: `index.html` single page.
Assets: `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg`.
Configuration: Business content and metadata remain mainly in `index.html`.
Compatibility: `compat.css` supplies progressive fallbacks; core CSS now uses broadly supported RGB/hex syntax instead of OKLCH/color-mix.

## DESIGN SYSTEM

Typography: Cabinet Grotesk, Satoshi, JetBrains Mono with system fallbacks.
Spacing: `--space-1` through `--space-32`.
Colours: Purple primary palette with light/dark theme tokens.
Responsive breakpoints: 560px, 800px, 860px and 900px. Review targets: 375, 390, 430, 768, 1024, 1280, 1440px.

## KNOWN DECISIONS

Decision: Keep vanilla HTML/CSS/JS.
Reason: Static site does not need framework complexity.
Date: 2026-09-07.

Decision: Use progressive browser enhancement rather than a framework/build migration.
Reason: Preserve existing visual design while providing fallbacks.
Date: 2026-09-07.

Decision: Prefer broadly supported sRGB/RGB CSS syntax for core visual properties.
Reason: Reduce compatibility diagnostics and parsing risk on older supported browsers.
Date: 2026-09-07.

Decision: Keep native form validation + `mailto:`.
Reason: No backend/CRM exists in the repository.
Date: 2026-09-07.

## COMPLETED WORK

Date: 2026-09-07
Change: Hardened theme storage, mobile navigation, reduced-motion handling, form validation and mailto behaviour.
Files: `app.js`
Verification: JavaScript syntax check passed locally.
Commit: `bc00d41c922f63218701e61e36636b205ad39a72`

Date: 2026-09-07
Change: Fixed HTML validity/semantics, metadata, favicon markup, phone URI and removed unsupported image fetch-priority hint.
Files: `index.html`
Verification: Current file re-fetched; contact definition-list structure corrected.
Commit: `6dd43d9545976073597dcd5dd6338229ae74508e`

Date: 2026-09-07
Change: Added browser compatibility fallbacks, corrected WebKit/standard backdrop-filter ordering, mask fallback ordering and drawer visibility protection.
Files: `compat.css`
Verification: Parsed locally with `tinycss2`: 0 parse errors.
Commit: `8166599f315eb7aaa19fbbd9e37603831c8a1a6b`

Date: 2026-09-07
Change: Removed unsupported base CSS diagnostics for text-size-adjust, hanging-punctuation and text-wrap.
Files: `base.css`
Verification: Current file re-fetched.
Commit: `aac01b305820b1b31571a23ae928108b90bdea6f`

Date: 2026-09-07
Change: Replaced OKLCH/color-mix usage with RGB/hex equivalents and added WebKit + standard backdrop/mask declarations.
Files: `style.css`
Verification: Current file re-fetched; targeted compatibility declarations confirmed.
Commit: `f3954add8f86996419d437ec2231d231618c6741`

Date: 2026-09-07
Change: Added persistent engineering memory and scorecard.
Files: `MEMORY.md`
Commit: `60889ddc06a3a4052a105f728a543d034fdd60ef`

## CURRENT SCORECARD

Architecture: 82
Maintainability: 80
Visual: 84
UX: 83
Responsive: 82
Accessibility: 87
Performance: 79
SEO: 82
Security: 75
Code Quality: 85
Content: 72
Commercial: 75
Legal/IP: 58
Reusability: 77
Overall: 79

Scores are engineering estimates from repository evidence, not compliance certificates. Legal/IP remains low because asset licensing and business rights are not proven by the repository.

## OPEN ISSUES

HIGH: Real Chrome/Edge/Firefox/Safari runtime matrix has not been completed in this environment. Status: UNKNOWN / ENVIRONMENT LIMIT.

HIGH: Business-specific service, technology, outcome and commercial claims require owner confirmation. Status: MANUAL REVIEW REQUIRED.

MEDIUM: Fontshare and Google Fonts licensing/privacy/self-hosting should be reviewed before commercial template distribution.

MEDIUM: Production SEO infrastructure still needs robots.txt, sitemap.xml, deployment-aware canonical handling and a final social-image strategy.

MEDIUM: Business configuration is still embedded mainly in `index.html`; centralise only if it genuinely improves reuse.

LOW: VS Code cSpell flags valid vocabulary such as `lede`, `textlink` and `nums`. Editor warning only, no runtime impact.

## MANUAL WORK

- Confirm final business/service/technology claims and illustrative work.
- Confirm rights/licences for imagery, fonts, icons and third-party assets.
- Connect the enquiry form to a real inbox/CRM if `mailto:` is insufficient.
- Run final real-browser matrix testing, including Safari macOS/iOS.

## DEPENDENCIES

Runtime/package dependencies: None.
External CSS: Fontshare for Cabinet Grotesk/Satoshi; Google Fonts for JetBrains Mono. Licensing and delivery terms require final review.

## LEGAL/IP NOTES

Local JPEG provenance/licensing is not established by repository evidence.
External font licensing must be confirmed before redistribution.
No legal-compliance claim is made from this technical audit.

## TEMPLATE CUSTOMIZATION NOTES

Safe customization areas: visible business copy, contact details, navigation labels, service/work content, design tokens, typography, imagery paths and metadata.
Primary files: `index.html`, `style.css`, `base.css`, `assets/`.
Preserve JavaScript/navigation IDs, classes and data attributes when adapting.

## NEXT VERIFIED PRIORITY

Issue: Establish a repeatable real-browser smoke-test matrix, then continue the deeper content/claim audit.
Reason: The reported compatibility and HTML-structure defects have been addressed; runtime browser evidence is now the main gap.

## RELEASE HISTORY

`bc00d41c922f63218701e61e36636b205ad39a72` — JS resilience and interaction hardening — 75/100.
`be817eb4e098e056aa640028ce645a8b40607c51` — HTML validity, semantics, metadata and browser-facing fixes — 76/100.
`11273fff6be50377d02d1a0f3d3195e90847e827` — Progressive compatibility layer — 77/100.
`6dd43d9545976073597dcd5dd6338229ae74508e` — Compatibility cleanup, core CSS syntax simplification, contact semantics and fetch-priority cleanup — 79/100.
