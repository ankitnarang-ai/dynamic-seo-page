# Dynamic SEO Landing Pages

A single, reusable Next.js template that renders **industry/service-wise SEO landing pages**
entirely from JSON, driven by the URL. A path like `/virtual-reality/noida` decomposes into:

- **service** = `virtual-reality` → `data/services/virtual-reality.json` (the "green" category content)
- **location** = `noida` → an entry in `data/cities.json` (the "red" location content)

Adding a new service or city is a **data-only** change — drop a JSON file / add a city and the page
works immediately, **no code changes and no rebuild**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Try:

- `/virtual-reality/noida`, `/virtual-reality/busan` — same template, different city
- `/game-development/noida` — a different service with a different section set/order
- `/virtual-reality/atlantis`, `/no-such-service/noida` — custom 404
- `/` — index of every available service × city

## How it works

| Area | File |
|------|------|
| Single template + `generateMetadata` | [app/[service]/[location]/page.tsx](app/%5Bservice%5D/%5Blocation%5D/page.tsx) |
| Load JSON + deep token replace (`{city}`, `{country}`, `{service}`) | [lib/content.ts](lib/content.ts) |
| Content types | [lib/types.ts](lib/types.ts) |
| Site identity + Organization JSON-LD | [lib/site.ts](lib/site.ts), [app/layout.tsx](app/layout.tsx) |
| Section renderers (dispatched by `type`) | [components/Section.tsx](components/Section.tsx), [components/sections/](components/sections/) |
| Safe `<img>` with fallback | [components/SafeImage.tsx](components/SafeImage.tsx) |
| Custom 404 | [app/not-found.tsx](app/not-found.tsx) |
| Service content | [data/services/](data/services/) |
| Cities + hreflang locales | [data/cities.json](data/cities.json) |

### Content model

- **Hero**: `titlePrefix` + green `highlight` span + `titleSuffix`, description, bullets, CTAs, image.
- **Sections**: an ordered `sections[]` array. Each entry has a `type`
  (`text-media`, `card-grid`, `process`, `callout`, `gallery`, `testimonials`, `cta-form`, `faqs`).
  Sections render in array order — reorder / add / remove purely in JSON.
- **SEO**: `metaTitle` (static per service), `metaDescription` + `keywords` (city-templated),
  `robots`, canonical (built from the route slugs), Open Graph, Twitter, and per-city `hreflang`.
- Any empty/omitted optional block hides itself (its component returns `null`) — no blank space.
- Missing/broken images fall back to a placeholder via `SafeImage`.

### Scalability

`app/[service]/[location]/page.tsx` sets `export const dynamicParams = true` and has **no**
`generateStaticParams`, and `lib/content.ts` reads JSON with `fs` at request time — so new JSON
files are served on demand without a rebuild.
