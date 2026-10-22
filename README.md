# VISUALGV — Creative Technology Studio

A corporate landing page for a New York creative technology studio, with an
Astro version and a Next.js App Router version running on vinext. The design is
dark, serif-led, grid-based, and finished with bright green accents.

## Run locally

Install dependencies:

```sh
npm install
```

Run the Astro version:

```sh
npm run dev
```

Run the vinext version on http://localhost:8787:

```sh
npm run dev:vinext
```

The vinext setup is already initialized in this repository. `npx vinext init`
is only needed again when setting it up in a fresh project.

## Build for production

Build the Astro version:

```sh
npm run build
```

Build the vinext version:

```sh
npm run build:vinext
```

The Astro output is in `dist/` — upload this directory to Cloudflare, or
connect the repo for automatic Git deploys.

## Deploy to Cloudflare

1. Push this project to a GitHub or GitLab repository
2. Go to Create application → Import a repository → select this repo
3. Build command: npm run build · Output directory: dist
4. Attach visualgv.com as a custom domain in the Domains tab
