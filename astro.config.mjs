// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.irohamo.dev',
	// Astro 7 で既定値が 'jsx' に変わったため、v6 と同じ HTML 準拠の空白処理を維持する
	compressHTML: true,
	integrations: [mdx(), sitemap()]
});
