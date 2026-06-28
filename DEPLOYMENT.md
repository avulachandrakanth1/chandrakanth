# Deployment Guide — GitHub Pages

This portfolio is a **Next.js static export** hosted on **GitHub Pages** at:

> **https://avulachandrakanth1.github.io/chandrakanth/**

---

## TL;DR — Deploy in one command

```bash
./deploy.sh
```

or

```bash
npm run deploy
```

Wait ~1–2 minutes, then hard-refresh the live URL (`Cmd + Shift + R`).

---

## How it works

| Piece | Role |
|-------|------|
| `output: "export"` (`next.config.ts`) | Builds a fully static site into `out/` |
| `basePath: "/chandrakanth"` | Matches the repo name so asset URLs resolve at `/chandrakanth/...` |
| `images.unoptimized: true` | Required — GitHub Pages has no image optimization server |
| `.nojekyll` | **Critical.** Disables Jekyll so the `_next/` folder is served |
| `gh-pages -d out -t` | Publishes `out/` (incl. dotfiles) to the `gh-pages` branch |

The `deploy` script in `package.json`:

```jsonc
"deploy": "next build && touch out/.nojekyll && gh-pages -d out -t"
```

1. `next build` → static export into `out/`
2. `touch out/.nojekyll` → creates the Jekyll bypass file
3. `gh-pages -d out -t` → pushes `out/` to the `gh-pages` branch (`-t` = include dotfiles like `.nojekyll`)

---

## One-time GitHub Pages setup

In the GitHub repo: **Settings → Pages**

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Save. Every `./deploy.sh` after that just updates the `gh-pages` branch.

---

## The CSS-not-loading bug (and the fix)

**Symptom:** The deployed site loads but has **no styling** — plain unstyled HTML.

**Cause:** GitHub Pages runs **Jekyll** by default. Jekyll **ignores any file or folder that starts with an underscore**, including Next.js's `_next/` directory — which is where all the CSS and JS live. So every stylesheet returns **404** and the page renders unstyled.

**Fix:** Publish a `.nojekyll` file at the root of the `gh-pages` branch. This tells GitHub Pages to skip Jekyll entirely and serve `_next/` as-is.

The catch: the `gh-pages` CLI **does not publish dotfiles by default**, so simply creating `.nojekyll` isn't enough — you must pass the `-t` / `--dotfiles` flag. That's why the deploy script uses `gh-pages -d out -t`.

### Verify the fix

```bash
git fetch origin gh-pages
git ls-tree origin/gh-pages --name-only | grep -i nojekyll
```

If it prints `.nojekyll`, the fix is in place.

---

## Troubleshooting

| Problem | Check |
|---------|-------|
| CSS still missing | DevTools → Network tab → reload. Do `.css` requests return **404**? → `.nojekyll` is missing or Pages source is wrong. |
| 404 on the whole site | Pages **Source** must be the `gh-pages` branch, `/ (root)`. |
| Assets load from wrong path | `basePath` in `next.config.ts` must equal the repo name (`/chandrakanth`). |
| Old version shows | Hard-refresh (`Cmd + Shift + R`); GitHub Pages CDN can cache 1–2 min. |
| Stale unstyled cache | Try an incognito window to bypass the browser cache. |

---

## Local preview

```bash
npm run dev      # http://localhost:3000  (note: dev server ignores basePath)
```

To preview the exact production build:

```bash
npm run build
npx serve out    # then open the printed URL + /chandrakanth/
```

---

## If you rename the repository

The site path is tied to the repo name. If you rename `chandrakanth` to something else, update **`basePath`** in `next.config.ts` to match, then redeploy:

```ts
const repoName = "new-repo-name";
```
