# Serhii Kuznetsov — portfolio

My personal site: the projects I have built, a case study for each one that has a real story
behind it, notes on the bugs worth writing down, and a way to get in touch.

**[sk-portfilio.vercel.app](https://sk-portfilio.vercel.app)**

**Next.js 15 · React 19 · TypeScript · Tailwind CSS v3 · Framer Motion · MDX**

![The home page](docs/screenshot.jpg)

## What is on it

| Route | What it shows |
| --- | --- |
| `/` | Hero, counters, the featured projects and the latest notes |
| `/work` | Every project with category filters; older, smaller ones in a compact "Earlier work" list |
| `/work/[slug]` | Case studies — the problem, the decisions it forced, what was measured — generated statically |
| `/notes` | Write-ups of bugs and decisions from my projects, with the numbers |
| `/notes/[slug]` | One note, written in MDX and generated statically |
| `/services` | What I offer, each item linked to the project where I have already done it |
| `/resume` | Experience, skills and education, plus the CV as a PDF |
| `/contacts` | A three-field form and the direct channels |

## The decisions worth defending

**One list of projects feeds everything.** [`data/projects.ts`](data/projects.ts) drives the home
page, the work page, the case-study routes, the sitemap, the proof links on `/services` and the
counters. A project cannot show one stack on the home page and another on `/work`, and the
counters cannot claim more projects than the site actually lists — they are counted, not typed in.

**Case studies only where there is a story.** [`data/case-studies.ts`](data/case-studies.ts) has
entries only for projects with something worth writing up; the rest fall back to their highlights.
A case study padded with invented detail is worse than none.

**No link that leads to a 404.** Several of the repositories are private. Rather than a GitHub
button a visitor can only open to an error page, those cards show a lock and the case study says
so.

**Server components by default.** Project cards, the services, the resume and the case studies
render on the server, and hover effects are CSS transitions. Client code is limited to what needs
the browser: the work filter, scroll reveals, the page transition, the counters, the contact form
and the navigation.

**Metadata for every page, including the client ones.** The root layout's canonical is `/`, and a
`"use client"` page cannot export metadata — so `/work`, `/resume` and the rest used to inherit it
and tell search engines they were duplicates of the home page. Each of those segments now has a
server `layout.tsx` calling `pageMetadata()` from [`lib/metadata.ts`](lib/metadata.ts).

## Notes

The bugs that taught me the most are written up on the site, each with the measurements:

- [The lag my test browser could not see](https://sk-portfilio.vercel.app/notes/the-lag-my-test-browser-could-not-see)
  — headless Chrome draws at 60 fps, so on a 165 Hz screen it hid a 146 ms frame caused by
  `backdrop-filter`.
- [AnimatePresence and the pages that went blank](https://sk-portfilio.vercel.app/notes/animatepresence-and-the-blank-pages)
  — an exit animation in the App Router left 30 of 40 pages at `opacity: 0`.
- [The counter that reset "4 years" to zero](https://sk-portfilio.vercel.app/notes/the-counter-that-reset-to-zero)
  — two halves of react-countup disagreeing about when to start.

## Project structure

```
app/                  routes; layout.tsx files carry metadata for client pages
  work/[slug]/        case-study pages, one per entry in data/projects.ts
  notes/[slug]/       one page per note, generated statically
  opengraph-image.tsx social preview card, generated at build time
components/           ProjectCard, Reveal, Stats, ContactForm, NoteList, …
content/notes/        the notes themselves, one .mdx file each
data/
  projects.ts         every project, newest first
  case-studies.ts     long-form notes, keyed by project slug
  notes.ts            title, date, summary and tags of every note
  resume.ts           experience, skills and education
lib/
  site.ts             name, role, contacts, CV path, canonical URL
  metadata.ts         per-page title, canonical and Open Graph
public/assets/        portrait, project screenshots, the CV
```

## Adding a project

1. Put a screenshot in `public/assets/work/`.
2. Add an entry to the top of `projects` in [`data/projects.ts`](data/projects.ts) — newest first,
   with anything marked `archived: true` kept at the end. For a private repository use
   `github: null` with a `sourceNote`; with nothing live to link to, `live: null` with a
   `linkNote`. `featured: true` puts it on the home page.
3. Optionally, write a case study under the same slug in
   [`data/case-studies.ts`](data/case-studies.ts).

The `/work/<slug>` page, the sitemap entry, the filter chip and the counters follow on their own.

## Adding a note

1. Write it as `content/notes/<slug>.mdx` — plain Markdown; typography comes from the
   `.note-body` rules in `app/globals.css`, and links are handled in
   [`mdx-components.tsx`](mdx-components.tsx).
2. Add its title, date, summary, tags and loader to the top of `notes` in
   [`data/notes.ts`](data/notes.ts).

The page, the index, the home-page list, the sitemap entry and the reading time follow on their own.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000, with Turbopack
npm run typecheck
npm run lint
npm run build
```

`typecheck`, `lint` and `build` all have to pass before a push to `master`, which Vercel deploys.
Vercel installs with `npm ci`, so `package-lock.json` must stay in step with `package.json`.

`NEXT_PUBLIC_SITE_URL` sets the canonical origin; without it the site uses Vercel's
`VERCEL_PROJECT_PRODUCTION_URL`, and `http://localhost:3000` locally. The contact form posts to
Formspree — the endpoint is in [`components/ContactForm.tsx`](components/ContactForm.tsx).
