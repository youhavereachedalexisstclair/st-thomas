import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reflections = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/reflections' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
	}),
});

const recipes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
	schema: z.object({
		title: z.string(),
		categories: z.array(z.enum(['desserts', 'entrees', 'sides', 'soups-stews'])),
		sourceUrl: z.string().url().optional(),
	}),
});

export const collections = { reflections, recipes };
