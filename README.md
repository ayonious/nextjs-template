# Basic Next.js site

[![CI](https://github.com/ayonious/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ayonious/nextjs-template/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ayonious/nextjs-template/graph/badge.svg)](https://codecov.io/gh/ayonious/nextjs-template)

A barebones Next.js App Router project with React, TypeScript, and simple CSS.

## Run locally

```sh
yarn install
yarn dev
```

Open http://localhost:3000.

## Test

```sh
yarn test
```

Use `yarn test:watch` while developing to rerun affected tests after changes.
Run `yarn test:coverage` to generate a local coverage report.

## Pages

- `/` — Home (`app/page.tsx`)
- `/about` — About (`app/about/page.tsx`)
- `/contact` — Contact (`app/contact/page.tsx`)

Shared navigation lives in `app/layout.tsx` and styles in `app/globals.css`.
Replace the example email address in the Contact page with your own.

## Production

```sh
yarn build
yarn start
```
