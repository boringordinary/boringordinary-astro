import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), sitemap()],
  trailingSlash: 'never'

});