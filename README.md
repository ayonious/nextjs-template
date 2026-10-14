# Basic Next.js site

A barebones Next.js App Router project with React, TypeScript, and simple CSS.

## Run locally

```sh
yarn install
yarn dev
```

Open http://localhost:3000.

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
