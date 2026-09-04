# Leano ITC — Website

Marketing site for **Leano ITC**, a software and development company based in Pretoria, Gauteng, South Africa.

## Stack

Static single-page site — no build step required.

- `index.html` — page markup, JSON-LD `ProfessionalService` schema, inline SVG logo
- `base.css` — reset and base element styles
- `style.css` — design tokens (fluid type scale, light/dark palettes) and components
- `app.js` — theme toggle, mobile drawer, scroll reveal, enquiry form
- `assets/` — hero, studio and texture imagery

## Running locally

```bash
npx serve .
```

Then open http://localhost:3000

## Before going live

Replace the placeholder content:

- Contact email (`hello@leanoitc.co.za`) and phone (`+27 12 000 0000`)
- The three illustrative engagements in the Work section
- The commitment stats (2 weeks / 48 hrs / 100%)
- Wire the enquiry form to a real inbox or CRM (it currently opens a pre-filled `mailto:`)
