# Future Lab — The Futurist Network

A standalone, responsive one-page site using original Future Lab copy, photography, films, and faculty profiles. Buildless HTML, CSS, and JavaScript; no database or API credentials required.

## Run locally

`python3 -m http.server 5175 --directory site`

Netlify publishes `site/` using the included `netlify.toml`. Edit `site/index.html`, `site/style.css`, or `site/main.js`, then push to the connected production branch.

## Content

Includes four pillars, five gathering features, the Observe / Provoke / Prototype / Share method, six faculty profiles with expandable biographies, sixteen gallery photos with keyboard-accessible lightbox, the community collage, three externally hosted event films, and an optional locally hosted animated artwork.

`docs/content-inventory.json` records the original public source copy, faculty, and assets. All content was assembled from The Spatial Network workspace on October 15, 2026. The next gathering’s date, time, and venue remain unannounced. No historical ticket price or date is presented as current. External links route to the main Futurist Network website; contact opens an email draft. No signup submission or mailing list is implied.

Film playback depends on the existing Cloudinary and Supabase public media URLs. Videos load on demand, and the artwork only plays after an explicit click. Photos are locally bundled. Google Fonts provides Lato and Open Sans, with system fallbacks. Source assets remain the property of their respective owners.

## Discovery limits

Searched local project material, related local Future Land content, and the public web. Connected Google Drive search returned an internal error. This inventory is comprehensive for the gathered public page assets, not a claim that every private Future Lab file has been located.
