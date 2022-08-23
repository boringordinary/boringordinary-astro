import netlify from "@astrojs/netlify/edge-functions";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import linaria from "@linaria/rollup";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react(), sitemap(), tailwind(), compress()],
  trailingSlash: "never",
  vite: {
    plugins: [linaria()],
  },
});
