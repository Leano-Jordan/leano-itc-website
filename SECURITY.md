# Leano ITC Website Security Notes

## Current posture

This is a static marketing site. The current repository contains no server-side credentials, API keys, authentication system, or intentional client-side secret storage based on the current static review.

The enquiry form uses `mailto:` and therefore does not submit form data to a Leano ITC server. It should not be described as a secure server-side contact system.

## Deployment responsibilities

The hosting layer should provide HTTPS and appropriate security headers. A production deployment should consider at minimum:

- Content-Security-Policy appropriate to the final asset and script strategy
- Strict-Transport-Security after HTTPS is confirmed end-to-end
- X-Content-Type-Options: nosniff
- Referrer-Policy consistent with the site's privacy requirements
- Permissions-Policy appropriate to the site's actual feature set

These are deployment controls, not claims that the static source can enforce them universally.

## Third-party resources

The current site has no runtime font CDN or JavaScript CDN dependency. Typography references Noto font families as local/system fonts only. Local JPEG imagery and the temporary demonstration logo remain subject to the provenance/licensing boundaries documented in `THIRD_PARTY_LICENSES.md` and `ASSET_PROVENANCE.md`.

## Form boundary

The enquiry form opens the visitor's email client using `mailto:`. It does not transmit form data to a Leano ITC server. A future backend/CRM integration must add server-side validation, rate limiting, abuse protection and appropriate data handling/privacy documentation.

## Reporting

Security findings should be verified against the deployed site, not inferred solely from source code. This document is operational guidance, not a security certification or legal advice.
