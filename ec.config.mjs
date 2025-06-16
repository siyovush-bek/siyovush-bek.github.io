import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
	plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
	defaultProps: {
		showLineNumbers: false,
		collapseStyle: 'collapsible-auto',
	},
	styleOverrides: {
		frames: {
			shadowColor: 'none',
		},
	},
})
