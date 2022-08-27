import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// import vercel from "@astrojs/vercel/serverless";
// @ts-ignore
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  integrations: [react(), sitemap(), compress(), astroImageTools],
  trailingSlash: "never",
  vite: {},
});
