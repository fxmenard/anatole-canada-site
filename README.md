# Anatole in Canada (private family blog)

A private story of Anatole's 5-month exchange in Victoria, BC (grade 8, from 8 Sept 2026), written in his voice. English and French versions. Static site, no build step.

## Files

| File | What it is |
|---|---|
| `index.html` / `index-fr.html` | Main story (EN / FR) |
| `merveilles.html` / `merveilles-fr.html` | Dad's hike in the Valley of Wonders, Oct 2026 (EN / FR) |
| `style.css` | Shared styles (Fraunces + Source Sans 3, moss / tide / paper palette) |
| `merveilles.css`, `lb.js` | Extra styles and photo zoom, used by the hike pages only |
| `images/` | Photos, resized to max 1400 px, JPEG quality ~76 |
| `functions/_middleware.js` | Password gate (HTTP Basic Auth) |

## Hosting

- **Cloudflare Pages** (legacy Pages project, not a Worker), connected to this GitHub repo.
- Every push to the main branch redeploys automatically, usually within a minute.
- Dashboard: dash.cloudflare.com > Workers & Pages > Overview > the project labelled "Pages". The live address ends in `.pages.dev`.
- No build command, output directory is the repo root.

## Password

- `functions/_middleware.js` asks every visitor for a login.
- Username: value of `SITE_USER` (defaults to `family` if not set).
- Password: the `SITE_PASSWORD` secret, set in Cloudflare under the project's Settings > Variables and Secrets.
- After changing a variable or secret, trigger a new deployment, because it only applies to new ones.

## Adding content

1. Add or edit entries in the HTML files. Keep chronological order and keep EN and FR in sync.
2. Photos: resize to max 1400 px, JPEG quality ~76, put in `images/`, use `class="photo" loading="lazy"` with a useful `alt`.
3. Videos: unlisted YouTube links in a `.video-embed` wrapper.
4. Commit and push. Cloudflare does the rest.

## Style rules

- Written in Anatole's voice, except the hike pages, which are Dad's.
- No em dashes.
- Practical details (logistics, bookings, brochures) stay out. Only the story moments go in.
