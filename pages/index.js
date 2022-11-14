import { Heading, Box, Flex, Button } from '@chakra-ui/react'
import Editor from '@monaco-editor/react'
import { useState } from 'react'

import files from '../utils/files'

function App() {
	const [currentFile, setCurrentFile] = useState(files[0])

	const handleChange = (val, event) => {
		console.log(val)
	}

	return (
		<Box sx={{ height: '100vh' }}>
			<Flex justifyContent='space-evenly'>
				{files.map(({ name }, index) => (
					<Button
						disabled={name === currentFile.name}
						onClick={() => setCurrentFile(files[index])}
						key={name}
					>
						{name}
					</Button>
				))}
			</Flex>

			<Heading align='center'>{currentFile.name}</Heading>
			<Editor
				path={currentFile.name}
				language={currentFile.language}
				value={currentFile.value}
				theme='vs-dark'
				height='80%'
				onChange={handleChange}
			/>
		</Box>
	)
}

export default App
