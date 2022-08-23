import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react(), sitemap(), tailwind()],
  trailingSlash: 'never'
});