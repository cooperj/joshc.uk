import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  site: "https://www.joshc.uk",
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
      mermaidConfig: {
        flowchart: {
          htmlLabels: true,
        },
        accessibility: {
          ariaRoledescription: "diagram",
        },
      },
      iconPacks: [
        {
          name: "lucide",
          loader: () =>
            fetch("https://unpkg.com/@iconify-json/lucide@1/icons.json").then(
              (res) => res.json(),
            ),
        },
      ],
    }),
    mdx(),
    sitemap(),
    icon(),
    react(),
  ],
});
