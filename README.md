# Personal Portfolio

A single-page developer portfolio built with React 19, Vite 7 and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Make it yours

**Everything you need to edit lives in one file: [`src/data/portfolio.js`](src/data/portfolio.js).**

| Export           | What it controls                                                                |
| ---------------- | ------------------------------------------------------------------------------- |
| `profile`        | Name, role(s), tagline, location, email, phone, résumé, avatar                   |
| `socials`        | The icon links in the hero and contact card (`github`, `linkedin`, `x`, `mail`)   |
| `about`          | About paragraphs and the three stat tiles                                        |
| `skills`         | Skill groups and their tags                                                      |
| `projects`       | Project cards — `featured: true` for the large cards, `status` for the badge      |
| `experience`     | Work timeline — each entry takes optional `tags`                                 |
| `education`      | Education timeline, shown under Experience                                       |
| `certifications` | Certificate and achievement cards, each linking to the certificate               |
| `contact`        | Heading and body text of the closing section                                     |

`profile.roles` is an array: one entry types out once and stays, several rotate.

Project `status` accepts `'Completed'`, `'In progress'` or `'Planned'`, which colour the
badge green, amber and grey respectively.

### Images and résumé

Drop files into `public/` and reference them with a leading slash:

```js
avatar: '/avatar.jpg',
resumeUrl: '/resume.pdf',
// in a project:
image: '/projects/ledgerline.png',
```

### Brand colour

The whole site is themed from one colour ramp. Edit the `--color-accent-*` values in the
`@theme` block at the top of [`src/index.css`](src/index.css). Any 50→900 ramp works —
[uicolors.app](https://uicolors.app) will generate one from a single hex value.

### Theme

Dark mode is the default and the toggle in the navbar persists the choice to
`localStorage`. To default to light instead, remove `class="dark"` from `<html>` in
[`index.html`](index.html) and change the fallback in `useTheme()` in
[`src/hooks.js`](src/hooks.js).

## Deploy

The build output is a static `dist/` folder, so anything that serves static files works.

- **Vercel / Netlify** — connect the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages** — `npm run build`, then publish `dist/`. `base: './'` is already set in
  [`vite.config.js`](vite.config.js) so relative asset paths work from a subdirectory.
- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.

## Structure

```
index.html              page shell, fonts, meta description
src/
  main.jsx              React entry
  App.jsx               section order, theme + scroll wiring
  index.css             Tailwind import, theme tokens, custom utilities
  hooks.js              theme, scroll reveal, active nav link, typewriter
  data/portfolio.js     ← all content
  components/
    Nav.jsx             sticky navbar, mobile menu, theme toggle
    Hero.jsx            name, typewriter role, CTAs, socials
    Section.jsx         shared section heading wrapper
    About.jsx  Skills.jsx  Projects.jsx  Experience.jsx
    Certifications.jsx  Contact.jsx  Footer.jsx
    Icons.jsx           inline SVG icon set (no icon dependency)
```

## Outstanding TODOs

- Copy `Divya_Chouhan_Resume.pdf` into `public/resume/` and uncomment `resumeUrl`.
- Add a photo to `public/` and set `profile.avatar`.
- Add GitHub and demo links to **ResQMeal** and **Tomato** once those repos are public.
- Certificate links currently point at the previous portfolio's GitHub Pages site. Copy that
  repo's `certificates/` folder into `public/certificates/` to make this site self-contained.

## Accessibility notes

Skip link, `aria-current` on the active nav item, labelled icon-only links, visible focus
rings, and all motion disabled under `prefers-reduced-motion`.
