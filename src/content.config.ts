import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per lawyer in src/content/people/.
// The file name is the page address: trevor-lee.md -> /people/trevor-lee/
const people = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    lastName: z.string(),          // used for sorting
    title: z.enum(['Partner', 'Associate', 'Of Counsel']),
    founder: z.boolean().default(false),
    phone: z.string().optional(),
    email: z.string().optional(),
    photo: z.string().optional(),  // URL or /people/file.jpg in public/
    cardPhoto: z.string().optional(), // optional different headshot for the People grid and home page cards
    practiceAreas: z.array(z.string()), // as shown on the bio
    oldPath: z.string().optional(),
    draftNote: z.string().optional(),   // shown only in preview mode
    metaTitle: z.string().optional(),       // full browser-tab / search-result title, used as is
    metaDescription: z.string().optional(), // search-result description
  }),
});

export const collections = { people };
