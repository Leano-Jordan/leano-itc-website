# Browser compatibility notes

## Target matrix

Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Static safeguards

- Core viewport sizing uses the broadly supported `100vh` baseline; no `100dvh` dependency remains in the core stylesheet.
- `overflow-wrap: break-word` is the baseline with `overflow-wrap: anywhere` enabled only when supported.
- Form controls explicitly allow shrinking with `min-width: 0` to reduce flex/grid overflow.
- Backdrop blur is decorative and has an opaque fallback.
- Hero masking is decorative and falls back to an unmasked grid when the standard property is unavailable.
- Touch-action and tap-highlight enhancements are gated behind feature support.
- Forced-colour focus and control visibility receive explicit safeguards.
- Narrow mobile layouts collapse primary hero actions to full-width controls below 360px.
- Reduced-motion preferences disable animation and smooth scrolling.
- Image borders and iframe containment use conservative baseline properties.
- Keyboard focus, long-value wrapping, hover-transform gating and native control colour-scheme handling receive release safeguards in `quality.css`.

## HTML loading hints

The hero image uses standard `preload` and responsive image attributes without a `fetchpriority` dependency. The hero image itself uses `fetchpriority="high"` only if present in the current markup; this is non-essential to correctness and should not be treated as a compatibility requirement.

## Theme behavior

- First-visit theme is explicitly light; the site does not inherit `prefers-color-scheme` from Edge, Chrome or the operating system.
- A user-selected theme is persisted and restored. Browser `theme-color` and native form-control `color-scheme` are synchronized with that selection.
- Light and dark theme surface/text tokens are separated to prevent low-contrast inversion in dark sections and project-card hover states.

## Verification status

Static compatibility review: VERIFIED for the safeguards above.

Real device/browser runtime matrix: UNVERIFIED in the current tooling environment. No claim of zero runtime errors is made until those browsers can be exercised.

## Current known compatibility issues

No known browser-specific blocking issue is currently identified by static review. Runtime rendering and interaction across the full browser/device matrix remain UNVERIFIED.
