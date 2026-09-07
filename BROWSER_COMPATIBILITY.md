# Browser compatibility notes

## Target matrix

Chrome, Edge, Firefox, Safari, Samsung Internet, Chrome Android and Safari iOS.

## Static safeguards

- Standard `text-size-adjust` is used without obsolete Mozilla/WebKit text-size-adjust declarations.
- Dynamic viewport sizing has a `100vh` fallback before `100dvh`.
- Backdrop blur is decorative and has an opaque fallback.
- Hero masking is decorative and falls back to an unmasked grid when the standard property is unavailable.
- Narrow mobile layouts collapse primary hero actions to full-width controls below 360px.
- Reduced-motion preferences disable animation and smooth scrolling.
- Print output removes navigation and decorative backgrounds while restoring a plain readable canvas.

## Verification status

Static compatibility review: VERIFIED for the safeguards above.

Real device/browser runtime matrix: UNVERIFIED in the current tooling environment. No claim of zero runtime errors is made until those browsers can be exercised.

## Current known compatibility issues

None identified by the current static review. Runtime status remains UNVERIFIED rather than being treated as zero.
