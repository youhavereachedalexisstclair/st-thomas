# Saint Thomas the Apostle Orthodox Church

A static parish website for Saint Thomas the Apostle Orthodox Church in Springfield, Missouri.

## Develop

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare)

The site is a static build hosted on Cloudflare Workers (free `*.workers.dev` URL until a custom domain is ready).

```bash
npx wrangler login
npm run deploy
```

## Content

- Reflections live in `src/content/reflections/`
- Recipes live in `src/content/recipes/`
- Parish facts (address, schedule, calendars, Tithe.ly) live in `src/data/parish.ts`

Icons in `public/icons/` are public-domain images from Wikimedia Commons.
