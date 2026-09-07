# WEBSITE PROJECT MEMORY

## CURRENT BASELINE

Current repository state: `main` after browser-compatibility, CSS compatibility, accessibility-semantic and editor-diagnostic cleanup.
Current branch: `main`
Current repository HEAD: `f09f9e9e8d1a480bfa5719d65bf95dd916b4ca91`
Architecture: Static single-page HTML/CSS/JavaScript, no build step.
Stack: HTML5, CSS, vanilla JavaScript, inline SVG, local JPEG assets, external web fonts.

## TEMPLATE ARCHITECTURE

Foundation: `base.css` + tokens/components in `style.css`.
Layout: `.shell`, `.section`, CSS Grid/Flexbox.
Components: header, mobile drawer, buttons, cards, steps, work items, form, footer, theme toggle, scroll reveal.
Page: `index.html`.
Assets: `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg`.
Configuration: Business content/metadata mainly in `index.html`.
Compatibility: `compat.css` progressive fallbacks; core CSS uses broadly supported RGB/hex syntax for key colours.

## DESIGN SYSTEM

Typography: Cabinet Grotesk, Satoshi, JetBrains Mono with system fallbacks.
Spacing: `--space-1` through `--space-32`.
Colours: Purple primary palette with light/dark tokens.
Breakpoints: 560px, 800px, 860px, 900px. Review widths: 375, 390, 430, 768, 1024, 1280, 1440px.

## DECISIONS

- Keep vanilla HTML/CSS/JS. Framework migration is unjustified for this static template.
- Use progressive browser enhancement and explicit fallbacks instead of adding build complexity.
- Prefer sRGB/RGB/hex syntax for broadly supported core CSS.
- Keep native form validation + `mailto:` until a real backend/CRM is added.

## COMPLETED WORK

- `bc00d41c922f63218701e61e36636b205ad39a72`: hardened theme storage, mobile drawer, reduced-motion handling, validation and mailto flow. JS syntax check passed locally.
- `8166599f315eb7aaa19fbbd9e37603831c8a1a6b`: compatibility fallbacks, correct WebKit/standard backdrop-filter ordering, mask fallback ordering, drawer visibility protection. `tinycss2` parse: 0 errors.
- `aac01b305820b1b31571a23ae928108b90bdea6f`: removed unsupported base CSS diagnostics for text-size-adjust, hanging-punctuation and text-wrap.
- `f3954add8f86996419d437ec2231d231618c6741`: replaced core OKLCH/color-mix usage with RGB/hex equivalents; added WebKit + standard backdrop/mask declarations.
- `6dd43d9545976073597dcd5dd6338229ae74508e`: repaired contact definition-list semantics and removed unsupported image fetch-priority hint.
- `f09f9e9e8d1a480bfa5719d65bf95dd916b4ca91`: updated this engineering memory against the current repository state.

## SCORECARD

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

These are evidence-based engineering estimates, not compliance certificates. Legal/IP remains low because asset licensing and business rights are not proven by repository evidence.

## OPEN ISSUES

HIGH: Real Chrome/Edge/Firefox/Safari runtime matrix is not completed in this environment. Status: UNKNOWN / ENVIRONMENT LIMIT.
HIGH: Business-specific service, technology, outcome and commercial claims require owner confirmation.
MEDIUM: Fontshare/Google Fonts licensing, privacy and self-hosting should be reviewed before commercial distribution.
MEDIUM: Production SEO still needs robots.txt, sitemap.xml, deployment-aware canonical handling and final social-image strategy.
MEDIUM: Business configuration remains mainly in `index.html`; centralise only if it genuinely improves reuse.
LOW: VS Code cSpell flags valid vocabulary such as `lede`, `textlink` and `nums`. Editor-only warning.

## MANUAL WORK

- Confirm final business/service/technology claims and illustrative work.
- Confirm rights/licences for imagery, fonts, icons and third-party assets.
- Connect enquiry form to a real inbox/CRM if `mailto:` is insufficient.
- Run final real-browser matrix testing, including Safari macOS/iOS.

## LEGAL/IP

Local JPEG provenance/licensing is not established by repository evidence.
External font licensing must be confirmed before redistribution.
Technical review does not establish legal compliance.

## TEMPLATE CUSTOMIZATION

Safe areas: business copy, contact details, navigation labels, services/work content, design tokens, typography, imagery paths and metadata.
Primary files: `index.html`, `style.css`, `base.css`, `assets/`.
Preserve JavaScript/navigation IDs, classes and data attributes.

## NEXT VERIFIED PRIORITY

Establish a repeatable real-browser smoke-test matrix, then continue the deeper content/claim audit. The reported compatibility and HTML-structure defects are addressed; runtime browser evidence remains the main gap.
