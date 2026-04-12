import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  update: z.coerce.date().optional(),
  icon: z.string().optional(),
  headerImage: z.string().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({
    base: "src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  schema: contentSchema,
});

const portfolio = defineCollection({
  loader: glob({
    base: "src/content/portfolio",
    pattern: "**/*.{md,mdx}",
  }),
  schema: contentSchema,
});

export const collections = {
  blog,
  portfolio,
};
