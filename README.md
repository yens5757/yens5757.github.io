# Aiken Lee — portfolio

Live at https://yens5757.github.io

A plain one-page portfolio: about, experience, projects, education, skills, contact.
No build step and no framework; content is written straight into `index.html` so it reads
well for recruiters, search engines and link previews.

```
index.html      all content (edit here)
styles.css      design tokens at the top (light + dark), then layout and components
script.js       mobile menu, active-section highlight
photo.jpg       portrait (480×480)
resume.pdf      linked from the nav and hero: replace the file to update it
log/            the "git log of a life" version, linked from the footer
```

## Run locally

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

`.github/workflows/pages.yml` publishes every push to `main`
(Settings → Pages → Source: GitHub Actions).
