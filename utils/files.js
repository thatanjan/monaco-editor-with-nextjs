import {
	htmlCodeExample,
	tsCodeExample,
	jscodeExample,
	cssCodeExample,
} from './codeExamples'

const files = [
	{
		name: 'script.js',
		language: 'javascript',
		value: jscodeExample,
	},
	{
		name: 'about.ts',
		language: 'typescript',
		value: tsCodeExample,
	},
	{
		name: 'style.css',
		language: 'css',
		value: cssCodeExample,
	},
	{
		name: 'index.html',
		language: 'html',
		value: htmlCodeExample,
	},
]

export default files
