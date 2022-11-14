const jscodeExample = `import express from 'express'

const app = express()

app.get('/hello', (req, res) => res.send('hello world from cules coding'))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(\`Server is running on \${port}\`))
`

const tsCodeExample = `const text:string = '12'
console.log(text)
`

const cssCodeExample = `* {
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

const htmlCodeExample = `<div class="flip-box">
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

export { cssCodeExample, jscodeExample, tsCodeExample, htmlCodeExample }
