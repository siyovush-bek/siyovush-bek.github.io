import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { imageService } from '@unpic/astro/service'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, fontProviders } from 'astro/config'
import remarkDirective from 'remark-directive'
import remarkSmartypants from 'remark-smartypants'

import { SITE } from './src/constants'
import { remarkAsides } from './src/remark'
import { pagefindIntegration } from './src/utils'

export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'IBM Plex Sans',
				weights: ['400', '500', '600'],
				subsets: ['latin'],
				cssVariable: '--font-plex-sans',
			},
		],
	},
	output: 'static',
	trailingSlash: 'always',
	site: SITE.url,
	integrations: [
		expressiveCode(),
		mdx(),
		sitemap(),
		pagefindIntegration(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		service: imageService(),
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		// @ts-expect-error: Astro types don't match remark plugin
		remarkPlugins: [[remarkSmartypants, { backticks: false }], remarkDirective, remarkAsides],
	},
})
