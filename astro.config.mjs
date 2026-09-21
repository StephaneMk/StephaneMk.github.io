// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-moise-kinyok.netlify.app',
  integrations: [preact()],
});
