# Leano ITC — Website

Marketing and service website for **Leano ITC**, a Pretoria-based software development practice.

## Stack

Static single-page site with no build step required.

- `index.html` — page markup, SEO metadata, JSON-LD `ProfessionalService` schema and inline SVG branding
- `base.css` — reset and base element styles
- `style.css` — design tokens, light/dark palettes, layout and components
- `compat.css` — progressive browser-compatibility fallbacks
- `app.js` — theme toggle, mobile drawer, scroll reveal, enquiry form and compatibility-safe scrolling
- `assets/` — local imagery
- `robots.txt` / `sitemap.xml` — basic crawl guidance for the current production URL
- `THIRD_PARTY_LICENSES.md` — current third-party resource and licensing due-diligence record
- `CUSTOMIZATION.md` — hand-off and template customization guide
- `MEMORY.md` — evolving engineering memory and release scorecard

## Current positioning

The public service list is intentionally conservative and based on demonstrated project work. The site presents six core capabilities with directly related extensions rather than creating a catalogue of unrelated services:

- **Web application development** — responsive HTML/CSS/JavaScript/PHP interfaces and document-driven business workflows.
- **Business systems** — ordering, inventory, reporting, workflow features and practical process automation.
- **Database-backed software** — SQL/MySQL/MariaDB data modelling, application/database integration, records and reports generated from application data.
- **Android application development** — Kotlin/Jetpack Compose applications, including local-network and device-aware functionality.
- **Application integration** — HTTP/API-style communication, AJAX, JSON, server endpoints and application workflows.
- **Technical review & QA** — defect analysis, security/accessibility checks, release-readiness work and progressive software modernisation.

Related capabilities such as technical planning, development documentation and AI-assisted engineering are deliberately positioned as parts of the engineering workflow, not as standalone departments. AI is described as an engineering aid for research, prototyping, debugging and documentation rather than as an unsupported client-facing AI product service.

Selected projects are presented as development projects, not fabricated client case studies.

## Running locally

Because the site has no build system, it can be served from any static HTTP server. For example:

```bash
npx serve .
```

Then open the local URL reported by the server.

## Verification notes

- JavaScript syntax is checked with Node.js `--check` when the local verification environment is available.
- Compatibility CSS is designed around progressive enhancement and broadly supported fallbacks.
- The mobile drawer returns keyboard focus to its menu trigger when a navigation item closes the drawer.
- Real Chrome/Edge/Firefox/Safari runtime testing remains environment-dependent and must be completed on actual browser installations before release.

## Commercial/template notes

The repository is still a branded Leano ITC implementation, not a neutral template distribution.

Before commercial redistribution, review and document the provenance/licensing of the local imagery and hosted fonts, separate business configuration from reusable implementation where justified, and replace Leano-specific identity/content with configurable values.

See `CUSTOMIZATION.md` for the current hand-off map and `THIRD_PARTY_LICENSES.md` for licensing items that still require verification.
