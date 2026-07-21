import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  fromDate: z.coerce.date().optional(),
  update: z.coerce.date().optional(),
  icon: z.string().optional(),
  headerImage: z.string().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

// Blog posts always have a publication date (toDate / pubDate).
const contentSchema = baseSchema.extend({
  pubDate: z.coerce.date(),
});

// Portfolio items may be ongoing (active), so pubDate (toDate) is optional.
const portfolioSchema = baseSchema.extend({
  pubDate: z.coerce.date().optional(),
  active: z.boolean().default(false),
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
  schema: portfolioSchema,
});

export const collections = {
  blog,
  portfolio,
};
