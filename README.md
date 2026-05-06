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

## Docker

Multi-stage build → small static container served by [`serve`](https://www.npmjs.com/package/serve) (no nginx).

```bash
# build & run
docker compose up --build -d

# tail logs
docker compose logs -f web

# stop
docker compose down
```

Then open [http://localhost:8899](http://localhost:8899) (only bound to `127.0.0.1` — public traffic comes in via nginx).

The hidden monthly page is reachable at:
- [http://localhost:8899/monthly](http://localhost:8899/monthly) (clean URL via `serve.json`)
- [http://localhost:8899/monthly.html](http://localhost:8899/monthly.html)

Override the **host** port with the `HOST_PORT` env var (the container always listens on 3000 internally):

```bash
HOST_PORT=9000 docker compose up -d
```

Files involved:
- `Dockerfile` — Node 25 alpine, multi-stage (build → runtime)
- `serve.json` — `cleanUrls`, long cache for assets, no-cache for HTML, basic security headers
- `docker-compose.yml` — single `web` service with healthcheck
- `.dockerignore` — keeps the build context lean

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

- Plan CTAs open a `mailto:` to `male69calcutta@gmail.com` with the plan + term in the subject. Wire to a real checkout when ready.
- Plan prices live in `src/components/Plans.jsx` (`PLAN_DATA`). Update there.
- The original site was `noindex`. This rebuild is set to `index, follow`. Tweak in `index.html` if needed.
- To swap any SVG illustration for the original raster, drop the file into `public/images/` and replace the `<HeroArt />` import with `<img src="/images/…" alt="…" />`.
