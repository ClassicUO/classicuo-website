# ClassicUO website

Static React + TypeScript site built with Vite. Two pages: `/` and `/support`.

```sh
npm install
npm run dev      # local dev server
npm run build    # output in dist/
```

## Deploy (Cloudflare Workers, static assets)

Config in `wrangler.jsonc`. Custom domains: `classicuo.eu` and `www.classicuo.eu` (www redirects to apex via `public/_redirects`).

```sh
npx wrangler login      # once
npm run deploy          # build + wrangler deploy
```

Mail for classicuo.eu stays on Aruba (MX / SPF records untouched).
