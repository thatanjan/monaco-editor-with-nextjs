import { Heading, Box, Grid, Flex, Select, Button } from '@chakra-ui/react'
import Editor from '@monaco-editor/react'
import { useState } from 'react'

const code = `let java = history.back()`

const jscodeExample = `import express from 'express'

const app = express()

app.get('/hello', (req, res) => res.send('hello world from cules coding'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(\`Server is running on \${port}\`))
`

const tsCodeExample = `
const text:string = '12'
console.log(text)
`

const cssCodeExample = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    font-size: 3rem;
}

.flip-box {
    background-color: transparent;
    width: 60vw;
    perspective: 1000px;
    cursor: pointer;
}
`

const htmlCodeExample = `
<div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
            <img src="1.webp" alt="Paris" />
        </div>
        <div class="flip-box-back">
            <h1>Taylor Swift</h1>
        </div>
    </div>
</div>
`

const files = {
	'script.js': {
		name: 'script.js',
		language: 'javascript',
		value: jscodeExample,
	},
	'about.ts': {
		name: 'about.ts',
		language: 'typescript',
		value: tsCodeExample,
	},
	'style.css': {
		name: 'style.css',
		language: 'css',
		value: cssCodeExample,
	},
	'index.html': {
		name: 'index.html',
		language: 'html',
		value: htmlCodeExample,
	},
}

function App() {
	const [fileName, setFileName] = useState('script.js')

	const file = files[fileName]

	return (
		<Box
			sx={{
				height: '100vh',
			}}
		>
			<Flex justifyContent='space-evenly'>
				{Object.keys(files).map(name => (
					<Button
						disabled={name === file.name}
						onClick={() => setFileName(name)}
						key={name}
					>
						{name}
					</Button>
				))}
			</Flex>

			<Heading align='center'>{file.name}</Heading>
			<Editor
				path={file.name}
				language={file.language}
				value={file.value}
				theme='vs-dark'
				height='80%'
			/>
		</Box>
	)
}

export default App
