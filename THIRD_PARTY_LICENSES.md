# Third-party licence record

This file records third-party resources currently referenced by the website. It is an engineering/commercial due-diligence record, not a legal opinion.

| Resource | Version / reference | Purpose | Licence status | Source | Commercial redistribution action |
|---|---|---|---|---|---|
| Noto Sans / Noto Sans Display / Noto Sans Mono | System-local CSS family references; no CDN request | Display, body and monospace typography | **OPEN-SOURCE / OFL 1.1** | Noto Fonts project | Suitable for commercial software/template use under the SIL Open Font License. If font files are bundled later, include the applicable OFL notice/license and preserve any reserved-name requirements. |
| Local JPEG imagery | `assets/hero.jpg`, `assets/studio.jpg`, `assets/texture.jpg` | Site imagery | **UNKNOWN** | Repository-local assets | Establish provenance and commercial-use rights before redistribution; replace with cleared assets if provenance cannot be established. |

## Current dependency position

- No package manager manifest.
- No JavaScript framework dependency.
- No external font stylesheet or font CDN dependency.
- Inline SVG is used for the site mark and interface icons; no separate icon package is referenced.
- Noto is referenced as a local/system font family only. The browser falls back to system fonts when Noto is not installed, so typography does not create a network dependency.

## Noto licensing evidence

The Noto project states that Noto fonts are published under the SIL Open Font License (OFL) v1.1. The OFL permits the fonts to be bundled, embedded, modified and redistributed with software, subject to its conditions, including the requirement to include the licence notice when distributing the font software and restrictions around reserved names. This repository does not currently bundle font binaries.

Source evidence: https://github.com/notofonts/get-noto and https://github.com/notofonts/noto-cjk/blob/main/Sans/LICENSE

## Important

- This record does not clear the repository's local imagery. Image provenance remains an outstanding commercial/licensing item.
- Do not treat this record as proof of ownership of third-party assets.
- Final rights verification remains an owner/distributor responsibility.
