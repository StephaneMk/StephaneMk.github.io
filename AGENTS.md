## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Design & quality workflow

User-level skills are installed in `~/.claude/skills`. Use them for any UI work on this site:

1. **Direction** — `awesome-design`: pick a reference DESIGN.md (e.g. `linear.app`, `vercel`, `notion`) and keep a project `DESIGN.md` at the root as the source of truth.
2. **Build** — `design-taste-frontend` (anti-slop rules) for new pages/sections; `redesign-existing-projects` when improving existing pages; `image-to-code` when starting from a mockup or screenshot.
3. **Review** — `web-design-guidelines` on changed `.astro`/CSS files (accessibility, focus states, forms, motion, images, performance).
4. **Verify visually** — `playwright-cli`: with the dev server running (`astro dev --background`), open the page, take desktop + mobile (375px) screenshots and check them before calling the work done.
