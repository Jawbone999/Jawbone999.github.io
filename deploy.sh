#!/usr/bin/env bash

# Abort on errors
set -e

# Build
npm run build

# Navigate to build output directory
cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:jawbone999/jawbone999-portfolio.git master:gh-pages

cd -