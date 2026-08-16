# Mahdin — Portfolio

A dark, premium personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to edit things

Everything content-related lives in two files, so you never have to hunt through components:

| What you want to change | File |
|---|---|
| Name, title, hero text, about text, email, GitHub/LinkedIn links | `src/data/siteData.js` |
| Skills (Frontend / Tools / Other) | `src/data/siteData.js` → `skillGroups` |
| Services cards | `src/data/siteData.js` → `services` |
| Work process steps | `src/data/siteData.js` → `processSteps` |
| Projects (add, remove, edit) | `src/data/projects.js` |

### Adding a project screenshot

1. Put your image in `src/assets/` (e.g. `src/assets/aria-dolce.jpg`).
2. In `src/data/projects.js`, set that project's `image` field to `/src/assets/aria-dolce.jpg`.
3. Until you add an image, a clean placeholder mockup is shown automatically.

### Adding a new project

Copy one of the objects in `src/data/projects.js` and fill in `name`, `description`, `tech`, `image`, `liveUrl` and `githubUrl`.

### Contact form

The form currently opens the visitor's email app with the message pre-filled (`mailto:`) — this works with zero setup and no backend. If you'd rather collect messages directly, sign up for a free plan at [Formspree](https://formspree.io) (or a similar service) and replace the `handleSubmit` function in `src/sections/Contact.jsx` with a `fetch()` call to the endpoint they give you. Never put API keys directly in frontend code — form services like Formspree are designed to be safe for this.

## Project structure

```
src/
  assets/        → put your images here
  components/    → reusable UI pieces (Navbar, Button, cards, etc.)
  sections/      → one file per homepage section
  data/          → siteData.js and projects.js — edit these to update content
  App.jsx        → composes all sections
  main.jsx       → React entry point
  index.css      → Tailwind + global styles
```

## Deployment

**Vercel / Netlify:** connect your GitHub repo, and both will auto-detect Vite. Build command: `npm run build`, output directory: `dist`.

**GitHub Pages:**
1. `npm install --save-dev gh-pages`
2. Add to `package.json`: `"homepage": "https://<your-username>.github.io/<repo-name>"` and a script `"deploy": "gh-pages -d dist"`.
3. Add `base: '/<repo-name>/'` to `vite.config.js` inside `defineConfig({...})`.
4. Run `npm run build && npm run deploy`.

## Notes

- No backend, no database, no paid services — everything runs statically in the browser.
- Animations respect `prefers-reduced-motion` automatically.
- Built with React 18, Vite 5, Tailwind CSS 3, Framer Motion, and Lucide React icons.
