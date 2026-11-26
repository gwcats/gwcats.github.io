# GWCats website

Website for GWCats, the EU Marie Skłodowska-Curie Staff Exchanges project on
gravitational-wave cosmology with galaxy catalogues (grant agreement
[101299291](https://cordis.europa.eu/project/id/101299291)). Built with
[Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
```

## Editing content

| What                      | Where                     |
| ------------------------- | ------------------------- |
| Project facts             | `src/data/project.ts`     |
| Partner organisations     | `src/data/network.ts`     |
| Workshops (newest first)  | `src/data/workshops.ts`   |
| Page text                 | `src/pages/*.astro`       |
| Header, footer, EU notice | `src/layouts/Base.astro`  |
| Styles and colours        | `src/styles/global.css`   |

Logo files live in `public/`: `images/gwcats-hero.jpg` (home page),
`images/gwcats-mark.png` (header, white on transparent), `favicon.png` and
`apple-touch-icon.png`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it. One-time setup: in the repository's **Settings → Pages**, set
**Source** to **GitHub Actions**.

The site is served from `https://gwcats.github.io/`. For a custom domain,
update `site` in `astro.config.mjs`.
