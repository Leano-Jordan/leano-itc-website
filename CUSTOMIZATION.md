# Website template customization

The current repository is a working Rosscore Labs site and also serves as the foundation for a reusable static website template.

## Safe customization points

- **Brand:** replace the visible brand name, mark and favicon.
- **Content:** update headings, service descriptions, project descriptions, calls to action and footer copy.
- **Theme:** update the design tokens in `style.css`, including colours, typography, spacing, radii and shadows.
- **Assets:** the current visual system does not require image assets. If imagery is later introduced, it must be owned or clearly commercially licensed and recorded in `ASSET_PROVENANCE.md`.
- **Navigation:** update the primary and mobile navigation together, preserving matching section IDs.
- **Contact:** replace the enquiry destination and contact details deliberately. The current form uses a `mailto:` flow.
- **SEO:** update the title, description, canonical URL, Open Graph/Twitter metadata, JSON-LD and `sitemap.xml` for the final deployment.
- **Capability wording:** keep service claims tied to demonstrated evidence.

## Recommended customization order

1. `index.html` — identity, content, navigation, contact and page metadata.
2. `style.css` — visual theme and component presentation.
3. `robots.txt` / `sitemap.xml` — deployment URL and crawl settings.
4. `THIRD_PARTY_LICENSES.md` / `ASSET_PROVENANCE.md` — final licence and asset evidence if anything external is added.
5. `README.md` / `MEMORY.md` — hand-over and verification state.

## Dependency boundary

Prefer the current dependency-free approach. Add an open-source library only when it creates a concrete capability that is better than maintaining the equivalent small local implementation. If a dependency is added, record its exact version, licence, source and redistribution implications before release.

## Commercial hand-off checklist

Before distributing a customized version:

1. Remove or replace Leano-specific identity, contact information, project claims and metadata.
2. Replace business-specific content and SEO values.
3. Verify any newly introduced assets or dependencies.
4. Update the canonical URL and sitemap.
5. Review all public claims and legal/compliance language for the new business.
6. Review AI-assisted code/content provenance where applicable.
7. Run browser, responsive, accessibility and interaction checks.

This guide describes the current implementation. Repository code remains the source of truth when the guide and implementation diverge.
