# git log of a life — portfolio

A personal portfolio told as a git history. Your life events are commits on
colored branches (`school`, `work`, `projects`, `student-team`, `learning`); recruiters can scan
the feed and reach you, while developers can open the terminal drawer and
poke around with `git log`, `git show`, `git checkout`, and more.

## Edit your content

Two files, no build step:

- `data/about.js` — your name, role, blurb, and links (email, GitHub, LinkedIn).
- `data/commits.js` — your life events. Each commit has a `branch`, `hash`, `date`,
  `msg`, and `add` / `del` lines (the green + / red − in the expanded diff).
  Add a new branch by adding a `--<name>` color in `css/theme.css` and a matching
  entry in `BRANCHES`.

## Reskin

All colors and fonts are tokens at the top of `css/theme.css`. Change `--bg`,
`--accent`, the branch colors, etc. and the whole site follows.

## Structure

```
index.html            markup only
css/
  theme.css           design tokens (colors, fonts)
  layout.css          page shell + responsive grid
  components.css      cards, chips, terminal, animations
data/
  about.js            your identity + links
  commits.js          your life events
js/
  main.js             entry point
  rail.js             identity rail + branch filters
  graph.js            commit feed + scroll-reveal
  terminal.js         the interactive shell
  utils.js            small helpers
```

## Run locally

ES modules need a server (opening `index.html` via `file://` won't work):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Create a repo named `yens5757.github.io`.
2. Push these files.
3. Settings → Pages → Source: `main` branch → Save.

Live at `https://yens5757.github.io` shortly after.
