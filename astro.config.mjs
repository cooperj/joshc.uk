import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  site: "https://www.joshc.uk",
  integrations: [mdx(), sitemap(), tailwind(), icon(), react()],
});
