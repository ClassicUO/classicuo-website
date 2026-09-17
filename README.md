# ClassicUO website

Static React + TypeScript site built with Vite. Two pages: `/` and `/support`.

```sh
npm install
npm run dev      # local dev server
npm run build    # output in dist/
```

## Deploy (Cloudflare Workers, static assets)

Config in `wrangler.jsonc`. Custom domains: `classicuo.eu` and `www.classicuo.eu`. www -> apex redirect is a Cloudflare Redirect Rule in the dashboard (Workers assets `_redirects` only allows relative paths).

```sh
npx wrangler login      # once
npm run deploy          # build + wrangler deploy
```

Mail for classicuo.eu stays on Aruba (MX / SPF records untouched).

## CI deploy (manual)

GitHub → Actions → "Deploy to Cloudflare" → Run workflow. Needs two repo secrets:

- `CLOUDFLARE_API_TOKEN` — token with the "Edit Cloudflare Workers" template.
- `CLOUDFLARE_ACCOUNT_ID` — from the Workers & Pages overview page.
