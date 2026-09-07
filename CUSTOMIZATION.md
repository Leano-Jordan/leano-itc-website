# Website template customization

The current repository is a working Leano ITC site and also serves as the foundation for a reusable static website template.

## Safe customization points

- **Brand:** replace the visible brand name, mark, favicon and social preview artwork.
- **Content:** update headings, service descriptions, project descriptions, calls to action and footer copy.
- **Theme:** update the design tokens in `style.css`, including colours, typography, spacing, radii and shadows.
- **Assets:** replace files in `assets/` with commercially cleared imagery or connect equivalent asset paths.
- **Navigation:** update the primary and mobile navigation together, preserving matching section IDs.
- **Contact:** replace the enquiry destination and contact details deliberately. The current form uses a `mailto:` flow.
- **SEO:** update the title, description, canonical URL, Open Graph/Twitter metadata, JSON-LD and `sitemap.xml` for the final deployment.
- **Capability wording:** keep the six core service areas intact unless new evidence supports a change. Related capabilities should be expressed as extensions of the relevant core area, not invented as separate departments.

## Capability boundaries

The current site can describe practical document/report/invoice/quotation workflows when they are generated from application data; API/system integration through HTTP, JSON and server endpoints; workflow automation inside business software; progressive software improvement/modernisation; hands-on technical planning around application/database/workflow structure; narrow local-network/device-aware applications; and technical development documentation/handover.

AI-assisted engineering is a workflow capability used for research, prototyping, debugging, documentation and productivity. It is not currently positioned as a standalone AI product-development service.

## Preserve these implementation contracts

- Keep the IDs used by JavaScript, including `site-header`, `drawer`, `enquiry`, `form-status` and `year`.
- Preserve `.menu-btn`, `[data-theme-toggle]`, `[data-reveal]` and the drawer `data-open` state unless the JavaScript is updated at the same time.
- Keep `base.css` as the foundation, `style.css` as the main design/component layer and `compat.css` for progressive browser fallbacks.
- Avoid adding a framework or build pipeline unless the site requirements justify the additional complexity.

## Commercial hand-off checklist

Before distributing a customized version:

1. Remove or replace Leano-specific identity, contact information, project claims and metadata.
2. Replace or clear the local imagery and verify font licensing.
3. Update the canonical URL, sitemap and social metadata.
4. Review all public claims and legal/compliance language for the new business.
5. Review service wording against demonstrated capability evidence.
6. Run the browser, responsive, accessibility and interaction checks documented in `MEMORY.md`.

This guide describes the current implementation. Repository code remains the source of truth when the guide and implementation diverge.
