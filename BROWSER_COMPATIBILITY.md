# Browser compatibility notes

## Target matrix

Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Static safeguards

- Removed `text-size-adjust` from the core stylesheet because MDN currently classifies it as limited availability rather than Baseline.
- Removed non-standard `-webkit-font-smoothing`, `-moz-osx-font-smoothing` and `text-rendering: optimizeLegibility` from the core baseline.
- Core viewport sizing now uses the broadly supported `100vh` baseline; no `100dvh` dependency remains in the core stylesheet.
- `overflow-wrap: break-word` is the baseline with `overflow-wrap: anywhere` enabled only when supported.
- Form controls explicitly allow shrinking with `min-width: 0` to reduce flex/grid overflow.
- Print output no longer depends on an explicit `min-height: auto` override.
- Backdrop blur is decorative and has an opaque fallback.
- Hero masking is decorative and falls back to an unmasked grid when the standard property is unavailable.
- Touch-action and tap-highlight enhancements are gated behind feature support.
- Forced-colour focus and control visibility receive explicit safeguards.
- Narrow mobile layouts collapse primary hero actions to full-width controls below 360px.
- Reduced-motion preferences disable animation and smooth scrolling.
- Image borders and iframe containment use conservative baseline properties.

## HTML loading hints

The current `index.html` still contains `fetchpriority="high"` on the hero image preload and hero image. `fetchpriority` is a newer loading hint and is not required for correctness, so it should be removed from the HTML when the file can be safely rewritten as a complete current-HEAD document. The underlying preload/image behaviour remains functional without the hint.

## Verification status

Static compatibility review: VERIFIED for the safeguards above.

Real device/browser runtime matrix: UNVERIFIED in the current tooling environment. No claim of zero runtime errors is made until those browsers can be exercised.

## Current known compatibility issues

- `fetchpriority="high"` remains in `index.html` as a non-essential progressive loading hint. This is classified as LOW compatibility risk and does not block core functionality.
- Runtime rendering and interaction across the full browser/device matrix remain UNVERIFIED.
