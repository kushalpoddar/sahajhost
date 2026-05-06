# SahajHost — React rebuild

Marketing site for **sahajhost.in** rebuilt as a single-page React + Vite app with Tailwind v4.

- Vite 8 + React 19
- Tailwind CSS v4 (CSS-first theme tokens via `@theme`)
- Quicksand from Google Fonts
- All hero / section illustrations are hand-authored SVG (no raster images required)
- Proper SEO: `<title>`, meta description, OpenGraph, Twitter card, canonical and JSON-LD (`Organization` + `Product` schema)
- Accessible FAQ accordion (no jQuery), sticky header with mobile drawer

## Develop

```bash
nvm use         # uses .nvmrc → Node 25
npm install
npm run dev
```

App runs on http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Project layout

```
public/                    # static assets (drop logo.png / brands1.webp here if you want originals)
src/
  components/
    Topbar.jsx             # contact bar
    Header.jsx             # sticky nav + mobile drawer
    Hero.jsx
    IdealSolution.jsx
    WhyApacheNginx.jsx
    Plans.jsx              # pricing with term toggle (6mo / 1y / 2y / 3y)
    ManagedVPS.jsx
    Faq.jsx                # accessible accordion
    Brands.jsx
    Footer.jsx
    Logo.jsx
    icons/Icons.jsx        # inline SVG icon set
    illustrations/
      HeroArt.jsx
      IdealArt.jsx
      StackArt.jsx
      VpsArt.jsx
      FaqArt.jsx
  App.jsx
  main.jsx
  index.css                # Tailwind v4 + theme tokens
index.html                 # SEO meta + JSON-LD + favicon
```

## Notes

- Buy buttons link to the existing `https://sahajhost.in/checkout/index.php?id=…` flow — change them when the new backend is ready.
- Plan prices live in `src/components/Plans.jsx` (`PLAN_DATA`). Update there.
- The original site was `noindex`. This rebuild is set to `index, follow`. Tweak in `index.html` if needed.
- To swap any SVG illustration for the original raster, drop the file into `public/images/` and replace the `<HeroArt />` import with `<img src="/images/…" alt="…" />`.
