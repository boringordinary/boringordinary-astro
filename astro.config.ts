import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
// @ts-ignore
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

// import vercel from "@astrojs/vercel/serverless";
// @ts-ignore
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  integrations: [astroImageTools, react(), sitemap(), compress()],
  trailingSlash: "never",
  vite: {},
});
