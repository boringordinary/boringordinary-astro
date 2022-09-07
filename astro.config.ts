import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress"; // @ts-ignore

import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config"; // import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  site: "https://boringordinary.com",
  integrations: [astroImageTools, react(), sitemap(), compress(), tailwind()],
  trailingSlash: "never",
  vite: {}
});