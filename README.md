# PhysioXpert

Marketing website for **PhysioXpert** — home physiotherapy in Whitefield, Bengaluru (Vite + React + Express).

## Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production

```bash
npm run build
NODE_ENV=production npm run start
```

On Windows PowerShell:

```powershell
npm run build
$env:NODE_ENV="production"; node dist/index.js
```

The server serves the built SPA from `dist/public` and falls back to `index.html` for client routes (`/blog`, `/careers`, `/privacy`, `/terms`, etc.).

### SEO after deploy

Update **`client/public/robots.txt`** and **`client/public/sitemap.xml`** so every URL uses your real production domain (replace `https://physioxpert.com` if you use another host).

Submit the sitemap in [Google Search Console](https://search.google.com/search-console) once the site is live.

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — client bundle + Node server bundle
- `npm run preview` — preview Vite build
- `npm run check` — TypeScript

## Treatment images

Add WebP files under `client/public/treatments/` (see `TreatmentCarouselSection.tsx` for filenames).

## License

MIT
