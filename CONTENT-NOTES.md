# Content notes for partner review

Text for practice pages and bios was copied word for word from mc2b.com on Sept. 26, 2026, with the small fixes listed below. Photos currently load from Squarespace's image server; download them into `public/people/` before Squarespace is cancelled.

## Fixes made while copying (please confirm)
- Kendra Brown: education read “S.J., Quinney College of Law”; changed to “J.D., S.J. Quinney College of Law.”
- Alan Bradshaw: client list read “United States Sports Specialty Association”; changed to “United States Specialty Sports Association” to match his bio text and the Insurance page.
- Brent Manning: “Bears’ Ears” changed to “Bears Ears”; “Watkiss-Southerland Inn” changed to “Watkiss-Sutherland Inn.”
- Government Defense page: “Title XI” changed to “Title IX.”
- Taylor Kordsiemon: “Manning Curtis Bradshaw Bednar” (missing &) fixed; “Healhcare” typo fixed.
- Christian Michalik: “Political Schience” and “United State District Court” typos fixed; “University of Illinois-Chicago” written as “University of Illinois Chicago.”
- Austin Sabin: “J. Rueben Clark” and “Marriot School” typos fixed.
- “Professional Affiliations and Activites” heading typo fixed (Brett Gilmore).
- Date ranges use en dashes (2008–2027) and case names are italicized.

## Done since the first pass
- Steven Bednar: all 52 seminar papers and 120 presentations are now on his bio, tucked into collapsible “show all” sections so the page stays readable.
- Carson M. Fuller’s old page (/carson-fuller) now redirects to the People page instead of showing “not found.”
- News: added “Trevor J. Lee joins MCBB as a partner” (Aug. 1, 2026).
- Headshots: `scripts/import-headshots.sh` copies every photo from Squarespace into the site itself. Run it once on a Mac (see the top of the script), then commit and push.

## Needs a decision
- Christian Michalik: the live site shows a stock photo, not a headshot. His bio shows initials until a real photo is added to `public/people/christian-j-michalik.jpg`.
- Confirm Carson Fuller has left the firm.
- Bankruptcy page is new draft copy for the bankruptcy lawyers to rewrite.
- Business Litigation lists all 18 lawyers, because every bio includes business or commercial litigation.
- News: add a few more current items (office move, other hires, results), or hide the page.

## Photos (black-and-white redesign)
All page photos are converted to black and white and stored in `public/images/`. The full-size originals are in the `photos/` folder on Trevor’s Mac, which is not committed to GitHub. Unsplash and Unsplash+ licenses don’t require credit, but the photographers are listed here in case we want to credit them later.

| Page | Photo | Photographer |
|---|---|---|
| Home banner | Snow peaks in darkness | Sylwia Bartyzel |
| About | Clouds over a ridge | Daniel Mirlea |
| People | Fog in a mountain forest | Dejan Zakic |
| Careers | Aspen trunks | Patrick Hendry |
| Contact (and home “Contact us” band) | Wasatch Range over Salt Lake | Nic Y-C |
| News | Bare winter branches | Markus Spiske |
| Practices overview | Curved white façade | Mika Ruusunen |
| Business Litigation | Stacked stairways | Declan Sun |
| Government Defense | Concrete columns | Pascal Bullan |
| Labor & Employment | Concrete stairs | mk. s |
| Insurance Coverage | Curved dark building | Akira Hojo |
| Intellectual Property | Patent drawing, U.S. Patent No. 1,424,428 (J. G. Vincent, 1922), public domain | — |
| Real Estate & Construction | Steel bridge trusses | Mike Hindle |
| Bankruptcy & Restructuring | Curved façade panels | Leandra Rieger |
| Appellate | Looking up between towers | Adrian Cuj |

Spares in `photos/` if we want to swap: misty forest with sun (Ales Krivec), redwoods from below (Curated Lifestyle), snow peak (Guillaume Issaly), Turret Arch in Arches National Park (Intricate Explorer), relief-map and topography abstracts (Planet Volumes, Nick Amo), river delta aerial (Zongnan Bao), and an x-ray pen with blueprints (Alex Shuper).
To swap a photo, ask Claude, or replace the file in `public/images/` with a black-and-white JPG of the same name.
