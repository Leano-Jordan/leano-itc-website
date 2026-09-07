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

The public service list is intentionally conservative and is based on demonstrated project work rather than a list of technologies merely explored.

Current areas presented on the site:

- HTML / CSS / JavaScript web development
- PHP web applications
- Business systems and ordering/inventory workflows
- SQL and MySQL/MariaDB-backed applications
- Android development with Kotlin and Jetpack Compose
- AJAX/JSON application workflows
- Technical review, QA, accessibility and security-focused engineering checks

Selected projects are presented as development projects, not fabricated client case studies.

## Running locally

Because the site has no build system, it can be served from any static HTTP server. For example:

```bash
npx serve .
```

Then open the local URL reported by the server.

## Verification notes

- JavaScript syntax is checked with Node.js `--check`.
- Compatibility CSS is designed around progressive enhancement and broadly supported fallbacks.
- The mobile drawer returns keyboard focus to its menu trigger when a navigation item closes the drawer.
- Real Chrome/Edge/Firefox/Safari runtime testing remains environment-dependent and must be completed on actual browser installations before release.

## Commercial/template notes

The repository is still a branded Leano ITC implementation, not a neutral template distribution.

Before commercial redistribution, review and document the provenance/licensing of the local imagery and hosted fonts, separate business configuration from reusable implementation, and replace Leano-specific identity/content with configurable values.

See `CUSTOMIZATION.md` for the current hand-off map and `THIRD_PARTY_LICENSES.md` for licensing items that still require verification.
