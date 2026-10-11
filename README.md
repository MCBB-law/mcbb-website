# MCBB website (draft)

Draft rebuild of www.mc2b.com, made with [Astro](https://astro.build) and meant to be hosted on Netlify.

## Where things live

| To change… | Edit |
|---|---|
| Address, phone, email, menu | `src/data/site.ts` |
| Practice pages | `src/data/practices.ts` |
| Attorney bios | One Markdown file per lawyer in `src/content/people/` (headshots go in `public/people/`) |
| News items | `src/pages/news.astro` |
| Home, About, Careers, Contact | `src/pages/*.astro` |
| Colors and fonts | `src/styles/global.css` |
| Page photos | `public/images/` (which photo goes where: `src/data/images.ts`) |
| Old URL → new URL redirects | `public/_redirects` |

Paragraphs marked **Draft note** only show while the site is in preview mode.

## Run it on your Mac

```bash
npm install
npm run dev      # opens a local preview at http://localhost:4321
```

## Put it on Netlify (preview)

1. Create a GitHub repo (for example `mcbb-website`) and push this folder to it.
2. In Netlify: **Add new site → Import an existing project → GitHub**, then pick the repo. The build settings come from `netlify.toml`.
3. Netlify gives you a `*.netlify.app` address. Each branch or pull request gets its own preview link.

Quick alternative with no GitHub: run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop.

## Launch checklist

- [ ] Resolve the items in `CONTENT-NOTES.md`
- [ ] Run `bash scripts/import-headshots.sh` so headshots live in the site (they load from Squarespace for now)
- [ ] Partners proofread every page, including the disclaimer
- [ ] Add current news or hide the News page
- [ ] Set `PREVIEW = false` in `src/data/site.ts`
- [ ] Remove the `X-Robots-Tag` block from `netlify.toml` and restore `public/robots.txt`
- [ ] In Netlify, turn on email notifications for the contact form
- [ ] Add mc2b.com as a custom domain in Netlify, update DNS, confirm HTTPS
- [ ] Keep Squarespace running until the new site is confirmed live, then cancel
