#!/usr/bin/env bash
#
# deploy.sh — Build and publish the portfolio to GitHub Pages (macOS / Linux).
#
# Usage:
#   ./deploy.sh
#
# What it does:
#   1. Builds the Next.js static export into ./out
#   2. Adds a .nojekyll file (stops GitHub's Jekyll from hiding the _next/ folder)
#   3. Publishes ./out to the gh-pages branch (including dotfiles via -t)
#   4. Verifies that .nojekyll landed on the gh-pages branch
#
set -euo pipefail

# ---- pretty output -------------------------------------------------------
BOLD="$(printf '\033[1m')"; GREEN="$(printf '\033[0;32m')"
YELLOW="$(printf '\033[0;33m')"; RED="$(printf '\033[0;31m')"
RESET="$(printf '\033[0m')"

step()  { printf "\n${BOLD}==>${RESET} %s\n" "$1"; }
ok()    { printf "${GREEN}✔${RESET} %s\n" "$1"; }
warn()  { printf "${YELLOW}!${RESET} %s\n" "$1"; }
fail()  { printf "${RED}✗${RESET} %s\n" "$1" >&2; exit 1; }

# ---- run from the project root ------------------------------------------
cd "$(dirname "$0")"

# ---- sanity checks -------------------------------------------------------
command -v npm >/dev/null 2>&1 || fail "npm is not installed or not on PATH."
[ -f package.json ] || fail "package.json not found — run this from the project root."

if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  warn "You have uncommitted changes. They won't be part of the deploy."
fi

# ---- install deps if needed ---------------------------------------------
if [ ! -d node_modules ]; then
  step "Installing dependencies (node_modules not found)"
  npm install
fi

# ---- build + publish -----------------------------------------------------
step "Building static export and publishing to the gh-pages branch"
npm run deploy
ok "Published to the gh-pages branch."

# ---- verify .nojekyll ----------------------------------------------------
step "Verifying .nojekyll on the gh-pages branch"
if git fetch origin gh-pages >/dev/null 2>&1 \
   && git ls-tree origin/gh-pages --name-only | grep -qi '^\.nojekyll$'; then
  ok ".nojekyll is present — CSS/JS in _next/ will be served correctly."
else
  warn "Could not confirm .nojekyll on gh-pages (check your network/auth)."
fi

# ---- done ----------------------------------------------------------------
printf "\n${GREEN}${BOLD}Deployment complete.${RESET}\n"
printf "Live in ~1–2 min at: ${BOLD}https://avulachandrakanth1.github.io/chandrakanth/${RESET}\n"
printf "Then hard-refresh with ${BOLD}Cmd + Shift + R${RESET}.\n"
