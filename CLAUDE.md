# MCBB website: context for Claude

This file gives Claude the background on the new website for Manning Curtis Bradshaw & Bednar PLLC (MCBB), a Salt Lake City litigation firm. It lives in the repository as `CLAUDE.md`, and a copy can be uploaded to a Claude Project.

## What this is

- A rebuild of the firm's website, **mc2b.com**, which currently runs on Squarespace. The new site is a draft and is **not live**.
- **Preview site:** https://mcbb-preview.netlify.app (updates automatically from the `main` branch).
- **Code:** https://github.com/MCBB-law/mcbb-website
- **Hosting:** Netlify. Every pull request gets its own Deploy Preview link, posted as a comment on the pull request.
- **Project lead:** Trevor J. Lee (tlee@mc2b.com). Partners edit through pull requests; nothing is merged into `main` without a person checking the preview first.

## How to make changes (for Claude Code)

- Work on a branch and open a pull request. Never push straight to `main`.
- Run `npm install` and then `npm run build` before opening the pull request; the build must pass.
- Make only the change that was asked for. Don't reword bios or practice text unless asked.
- Say in the pull request, in plain English, what changed and which pages to check.

## How the site is built

Astro (static site). No database; all content is in files.

| To change… | Edit |
|---|---|
| A lawyer's bio | `src/content/people/<slug>.md` (one Markdown file per lawyer; front matter holds name, title, phone, email, photo, practice areas) |
| Headshots | `public/people/<slug>.jpg` |
| Practice pages (all 8) | `src/data/practices.ts` |
| Which lawyers appear on a practice page | the `match` pattern for that practice in `src/data/practices.ts`, compared with each bio's `practiceAreas` |
| News items | `src/pages/news.astro` (newest first) |
| Home, About, Careers, Contact, Disclaimer | `src/pages/*.astro` |
| Address, phone, email, menu | `src/data/site.ts` |
| Page photos | `public/images/`; which photo goes on which page is in `src/data/images.ts` |
| Colors, fonts, buttons, spacing | `src/styles/global.css` |
| Page header with photo | `src/components/PageHero.astro` |
| Old URL → new URL redirects | `public/_redirects` |
| Open questions, typo fixes, photo credits | `CONTENT-NOTES.md` |

Lawyers are listed together (partners and associates), alphabetical by last name, on the People page, the home page, and each practice page.

## Design (black-and-white redesign)

- Black and white only. No color accents.
- Headlines: Jost, uppercase. Body text: Inter.
- Main pages (Home, About, People, Careers, Contact, News) open with a full-width **landscape** photo. The Practices overview and the 8 practice pages use a split header with a tall **architecture** photo. Intellectual Property uses a public-domain 1922 patent drawing (U.S. Patent No. 1,424,428).
- Photos are black-and-white JPGs, about 2400 px wide for banners and 1200 × 1500 for practice pages. Full-size originals are kept on Trevor's Mac, not in the repository. Photos come from the firm's Unsplash+ subscription.
- Square buttons with an arrow, thin 1-pixel lines between grid items, gentle fade-in on scroll (turned off for visitors who prefer reduced motion).
- Headshots display in grayscale and turn to color on hover.
- Inspired by mbllaw.com, but nothing is copied from it.

## Writing style

- Plain English. Don't use "pursuant to" or other legalese.
- Curly (typographic) quotation marks and apostrophes in page text: “ ” ‘ ’. Straight quotes in code.
- No spaces before or after em dashes (word—word).
- Short sentences. The firm's voice is confident and understated: trial lawyers, big-firm experience, small-firm service.
- Bios and practice pages were copied word for word from mc2b.com (with typo fixes listed in `CONTENT-NOTES.md`). Keep a lawyer's own wording unless they ask for a change.

## Preview mode

- `PREVIEW = true` in `src/data/site.ts` shows a "Preview draft" ribbon and yellow-bordered "Draft note" boxes, and tells search engines not to index the site. Leave it on until launch.
- Before launch: set `PREVIEW = false`, remove the `X-Robots-Tag` block in `netlify.toml`, restore `public/robots.txt`, connect the mc2b.com domain in Netlify. The full checklist is in `README.md`.

## Firm facts used on the site

- Manning Curtis Bradshaw & Bednar PLLC, founded May 1997.
- 201 South Main Street, Suite 750, Salt Lake City, UT 84111 (the firm recently moved here).
- Tel 801.363.5678 · Fax 801.364.5678 · info@mc2b.com
- 18 lawyers: 10 partners (Bednar, Bradshaw, Brown, Church, Derum, Gilmore, Lee, Longson, Manning, Vogel; Manning, Bradshaw, and Bednar are founding partners) and 8 associates (Bindrup, Espinosa, Ferrin, Jacobsen, Kelly, Kordsiemon, Michalik, Sabin).
- Practices: Business Litigation, Government Defense, Labor & Employment, Insurance Coverage, Intellectual Property & Technology, Real Estate & Construction, Bankruptcy & Restructuring, Appellate.

## Open items

- Christian Michalik needs a real headshot (his card shows initials).
- The Bankruptcy & Restructuring page is placeholder draft text for the bankruptcy group to rewrite.
- News has only one item newer than 2022; add recent items or hide the page.
- Partners should confirm the typo fixes listed in `CONTENT-NOTES.md`.
- Confirm Carson Fuller has left the firm (his old page redirects to People).
- Decide on Netlify Pro ($20/month) and making the GitHub repository private before launch.
