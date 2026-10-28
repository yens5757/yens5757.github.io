# Aiken Lee — portfolio

Live at https://yens5757.github.io

A one-page portfolio built with **Angular 19** (standalone components, signals, the new control flow)
and pre-rendered to static HTML at build time, so the content is readable without JavaScript and
link previews work. Light and dark themes follow the system setting, with a toggle in the header.

## Edit the content

Everything on the page lives in `src/app/data.ts`: profile, experience, projects, education, awards
and skills. The components only lay it out. To update the resume, replace `public/resume.pdf`.

```
src/
  index.html               meta tags + theme picked before first paint
  styles.css               design tokens (light + dark) and shared pieces
  app/
    data.ts                all content
    app.component.*        page layout: hero and sections
    nav.component.*        sticky header, theme toggle, mobile menu, active-section highlight
    cards.ts               timeline entry + project card
    icon.component.ts      inline SVG icons
    browser.ts             theme service + scroll-reveal directive (browser-only code)
public/
  resume.pdf, favicon.svg
  log/                     the "git log of a life" version, linked from the footer
```

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # -> dist/portfolio/browser
```

## Deploy

`.github/workflows/pages.yml` builds and publishes every push to `main`
(Settings → Pages → Source: GitHub Actions).
