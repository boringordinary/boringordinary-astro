import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import linaria from "@linaria/rollup";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // adapter: vercel(),
  integrations: [react(), sitemap(), tailwind(), compress()],
  trailingSlash: "never",
  vite: {
    // @ts-ignore
    plugins: [linaria()],
  },
});
