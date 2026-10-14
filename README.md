# Basic Next.js site

A barebones Next.js App Router project with React, plain JavaScript, and simple CSS.

## Run locally

```sh
yarn install
yarn dev
```

Open http://localhost:3000.

## Pages

- `/` — Home (`app/page.js`)
- `/about` — About (`app/about/page.js`)
- `/contact` — Contact (`app/contact/page.js`)

Shared navigation lives in `app/layout.js` and styles in `app/globals.css`.
Replace the example email address in the Contact page with your own.

## Production

```sh
yarn build
yarn start
```
