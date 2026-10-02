# New England Vending Connector

Marketing site for New England Vending Connector (NEVC), a DBA of Vital Vending Sales. NEVC matches New England businesses and schools with vetted vending and micro-market providers. It is a matching service, not a vending operator: see `NEVC-Brand-Kit.md` (voice rules) before editing copy.

Lighthouse (mobile + desktop): 100 / 100 / 100 / 100.

## Stack

One static `index.html`. No framework, no runtime build on the host.

- **CSS**: Tailwind, compiled and **inlined** into `index.html` (`<style id="site-css">`). Source is `src/input.css` + `tailwind.config.js`.
- **Fonts**: Sora + Inter, self-hosted latin subsets in `fonts/` (`@font-face` in `src/fonts.css`, `inter-latin.woff2` preloaded).
- **Images**: WebP with `srcset`/`sizes` responsive ladders in `images/`. Source photos and the brand kit stay in the repo root and are excluded from the deploy via `.vercelignore`.
- **JS**: ~2 KB inline at the end of `<body>` — mobile menu, scroll-reveal (IntersectionObserver), hero carousel, and a deferred SVG bubble background.

## Build

Run after changing **any class in `index.html`** or **any rule in `src/`**:

```bash
node build.mjs      # or: npm run build
```

This compiles `src/input.css` with Tailwind (purging against `index.html`), prepends `src/fonts.css`, and injects the minified result inline. Commit the updated `index.html`.

## Local preview

```bash
node serve.mjs                              # http://localhost:3000 (gzip, correct MIME types)
node screenshot.mjs http://localhost:3000 [label]   # full-page screenshot -> ./temporary screenshots/
node lighthouse.mjs http://localhost:3000 [desktop] # mobile (or desktop) Lighthouse run
```

`node_modules` (tailwindcss, sharp, puppeteer, lighthouse) is dev tooling only. It is not needed to run or deploy the site.

## Deploy

Static deployment on Vercel — no install, no build (`vercel.json`: null commands, root output). `.vercelignore` keeps `src/`, `dist/`, `node_modules/`, tooling, and source assets out of the deploy. Pushing to `main` triggers a production deploy.

## Before launch

- Confirm the phone number and that the `info@newenglandvendingconnector.com` inbox exists.
- Confirm the "within one business day" response promise (FAQ, contact section, JSON-LD).
- Point the lead form `action` at a real endpoint (Formspree, a Vercel function, etc.).
- Add Terms of Service and Privacy Policy pages that reference Vital Vending Sales as the legal entity.
