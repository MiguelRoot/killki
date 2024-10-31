import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// src/config.js
export const MONACO_BASE_PATH = import.meta.env.PROD
  ? "/static/monaco/vs"
  : "/node_modules/monaco-editor/min/vs";

export const collections = { blog };
