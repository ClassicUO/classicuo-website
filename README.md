# ClassicUO website

Static React + TypeScript site built with Vite. Two pages: `/` and `/support`.

```sh
npm install
npm run dev      # local dev server
npm run build    # output in dist/
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: this folder

`/support` is served from `support.html` via Cloudflare Pages clean URLs.
`public/_redirects` keeps old `index.php` / `support.php` links working.
