import { Heading, Box } from '@chakra-ui/react'
import Editor from '@monaco-editor/react'

function App() {
	const handleChange = (val, event) => {
		console.log(val)
	}

	const value = `console.log('hello world')`

	return (
		<Box sx={{ height: '100vh' }}>
			<Heading align='center'>Monaco Editor</Heading>
			<Editor
				language='javascript'
				theme='vs-dark'
				height='80%'
				onChange={handleChange}
				value={value}
			/>
		</Box>
	)
}

export default App
