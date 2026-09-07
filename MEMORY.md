# WEBSITE PROJECT MEMORY

## CURRENT BASELINE

Current repository state: `main` after factual service/project positioning, browser-compatibility cleanup, documentation alignment, and semantic styling-hook fixes.
Current branch: `main`
Current repository HEAD: `a5ea77ee1ee15e7c410942ae4db5980a86438bb2`
Architecture: Static single-page HTML/CSS/JavaScript, no build step.
Stack: HTML5, CSS, vanilla JavaScript, inline SVG, local JPEG assets, external web fonts.

## TEMPLATE ARCHITECTURE

Foundation: `base.css` + tokens/components in `style.css`.
Layout: `.shell`, `.section`, CSS Grid/Flexbox.
Components: header, mobile drawer, buttons, cards, steps, work items, form, footer, theme toggle, scroll reveal.
Page: `index.html`.
Assets: `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg`.
Configuration: Business content/metadata remains mainly in `index.html`.
Compatibility: `compat.css` supplies progressive fallbacks for dynamic viewport units, backdrop blur and masking. Core CSS uses broadly supported RGB/hex syntax for key colours.

## DESIGN SYSTEM

Typography: Cabinet Grotesk, Satoshi, JetBrains Mono with system fallbacks.
Spacing: `--space-1` through `--space-32`.
Colours: Purple primary palette with light/dark tokens.
Breakpoints: 560px, 800px, 860px, 900px. Review widths: 375, 390, 430, 768, 1024, 1280, 1440px.

## KNOWN DECISIONS

- Keep vanilla HTML/CSS/JS. Framework migration is unjustified for this static template.
- Use progressive browser enhancement and explicit fallbacks instead of adding build complexity.
- Prefer sRGB/RGB/hex syntax for broadly supported core CSS.
- Keep native form validation + `mailto:` until a real backend/CRM is added.
- Public service claims are deliberately conservative and tied to demonstrated project work.
- Do not present illustrative or invented client engagements as real case studies.
- The public technology list currently focuses on HTML, CSS, JavaScript, PHP, SQL/MySQL/MariaDB, Kotlin, Android and Jetpack Compose, plus engineering review practices.
- Keep theme persistence under a generic `site-theme` storage key so the interaction engine is not coupled to the Leano brand name.
- Use the existing `.details` / `.detail` and footer heading/list styling hooks rather than introducing duplicate component CSS for equivalent semantic structures.

## COMPLETED WORK

- `bc00d41c922f63218701e61e36636b205ad39a72`: hardened theme storage, mobile drawer, reduced-motion handling, validation and mailto flow. JS syntax check passed locally.
- `8166599f315eb7aaa19fbbd9e37603831c8a1a6b`: compatibility fallbacks, correct WebKit/standard backdrop-filter ordering, mask fallback ordering, drawer visibility protection. `tinycss2` parse: 0 errors.
- `aac01b305820b1b31571a23ae928108b90bdea6f`: removed unsupported base CSS diagnostics for text-size-adjust, hanging-punctuation and text-wrap.
- `f3954add8f86996419d437ec2231d231618c6741`: replaced core OKLCH/color-mix usage with RGB/hex equivalents; added WebKit + standard backdrop/mask declarations.
- `6dd43d9545976073597dcd5dd6338229ae74508e`: repaired contact definition-list semantics and removed unsupported image fetch-priority hint.
- `f09f9e9e8d1a480bfa5719d65bf95dd916b4ca91`: updated engineering memory against the repository state before this cycle.
- `4ef68349aea9ed9b0ffce966d25adad8b62015b9`: replaced exaggerated service/technology claims and invented work examples with factual capability and selected-project content.
- `2ac59936773cf2555951d43c873dd897df518e97`: simplified `compat.css`, removing obsolete colour-feature diagnostics while retaining progressive fallbacks.
- `2169130122e2dac5a8fe3f1c57f77dff8`: added a numeric `scrollTo` fallback when object-form smooth scrolling is unavailable.
- `fbbe555c1e94c24597310dfe1cc57750e79bf02b`: aligned README with the current factual positioning and verification limits.
- `1795b57923c6934eed9dd5fa4959601863caedef`: fixed contact and footer semantic styling hooks so existing component CSS applies to the current HTML structure.
- `a5ea77ee1ee15e7c410942ae4db5980a86438bb2`: changed the theme persistence key from brand-specific `leano-theme` to reusable `site-theme`.

## SCORECARD

Architecture: 84
Maintainability: 82
Visual: 85
UX: 85
Responsive: 82
Accessibility: 87
Performance: 79
SEO: 84
Security: 75
Code Quality: 87
Content: 90
Commercial: 80
Legal/IP: 58
Reusability: 81
Overall: 82

Change from previous recorded baseline: +1 overall.
The increase reflects verified semantic styling-hook corrections and removal of a brand-specific theme-storage coupling. No score increase was applied to browser compatibility because real cross-browser runtime testing remains incomplete.
Legal/IP remains low because asset licensing and business rights are not proven by repository evidence.

## OPEN ISSUES

HIGH: Real Chrome/Edge/Firefox/Safari runtime matrix is not completed in this environment. Chromium was available but the headless runtime did not complete reliably, so browser behaviour remains UNKNOWN rather than being claimed as verified.
HIGH: Business-specific service, technology, outcome and commercial claims should still be reviewed by the owner before public release.
MEDIUM: Fontshare/Google Fonts licensing, privacy and self-hosting should be reviewed before commercial distribution.
MEDIUM: Production SEO still needs robots.txt, sitemap.xml, deployment-aware canonical handling and final social-image strategy.
MEDIUM: Business configuration remains mainly in `index.html`; centralise only if it genuinely improves reuse.
LOW: Editor-only spelling warnings may remain for valid technical vocabulary.

## MANUAL WORK

- Run the real browser matrix at 375 / 390 / 430 / 768 / 1024 / 1280 / 1440px in Chromium/Chrome, Edge, Firefox and Safari, including Safari macOS/iOS.
- Confirm final business/service claims before public launch.
- Confirm rights/licences for imagery, fonts, icons and third-party assets.
- Connect enquiry form to a real inbox/CRM if `mailto:` is insufficient.

## DEPENDENCIES

- Fontshare-hosted Cabinet Grotesk and Satoshi: external hosted fonts; licence/redistribution status requires final commercial review.
- Google Fonts-hosted JetBrains Mono: external hosted font; licence/redistribution status requires final commercial review.
- No JavaScript framework or package manager dependency is used by the website itself.

## LEGAL/IP NOTES

Local JPEG provenance/licensing is not established by repository evidence.
External font licensing must be confirmed before redistribution.
Technical review does not establish legal compliance.

## TEMPLATE CUSTOMIZATION NOTES

Safe areas: business copy, contact details, navigation labels, services/project content, design tokens, typography, imagery paths and metadata.
Primary files: `index.html`, `style.css`, `base.css`, `compat.css`, `assets/`.
Preserve JavaScript/navigation IDs, classes and data attributes when customizing.
Do not copy Leano-specific branding, contact information, SEO metadata or project claims into a different customer's template without deliberate replacement.

## VERIFICATION

Confirmed from current repository:
- Current `index.html` uses the existing `.details` / `.detail` contact styling hooks and semantic footer headings/lists.
- Current `app.js` uses the generic `site-theme` storage key and passes Node.js syntax checking in the available environment.
- `compat.css` contains no OKLCH/color-mix diagnostics and retains progressive fallbacks.
- Repository HEAD after this cycle is `a5ea77ee1ee15e7c410942ae4db5980a86438bb2`.

Local verification performed during this cycle:
- `node --check` on the current JavaScript logic: PASS.
- Chromium headless smoke attempt: environment/runtime did not complete reliably and timed out; therefore browser rendering and interaction remain UNKNOWN and are not claimed as verified.

Unknown / not verified:
- Real browser rendering and interaction across Chrome/Edge/Firefox/Safari.
- Production network/font loading behaviour.
- Final deployment-specific SEO behaviour.
- Provenance/licensing of local JPEG assets and final commercial redistribution rights for hosted fonts.

## NEXT VERIFIED PRIORITY

Build a reliable browser smoke-test path for the current repository and verify mobile drawer, theme toggle, scroll navigation, reveal behaviour, form validation and responsive rendering without lowering the evidence standard.

## RELEASE HISTORY

- `a5ea77ee1ee15e7c410942ae4db5980a86438bb2` — 2026-09-07 — semantic styling-hook fixes and generic theme storage key — Overall 82/100 — Node syntax verified; browser runtime remains unknown.
- `1795b57923c6934eed9dd5fa4959601863caedef` — 2026-09-07 — contact/footer styling-hook correction — static review; superseded by subsequent memory update.
- `fbbe555c1e94c24597310dfe1cc57750e79bf02b` — 2026-09-07 — factual service/project positioning, compatibility hardening, README alignment — Overall 81/100 — static verification passed; real browser matrix still unknown.
- `595fb5f9d9f7714d3b08af2471fd1474df0b96365` — 2026-09-07 — engineering memory finalized against prior repository state — Overall 79/100.
