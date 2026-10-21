// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://stephanemk.github.io',
  // CSP stricte : Astro calcule une empreinte pour chaque script, sans 'unsafe-inline'.
  // Les styles gardent 'unsafe-inline' pour les attributs style (pastilles de couleur).
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"],
      },
    },
  },
  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: [400, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Geist',
      cssVariable: '--font-body',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
