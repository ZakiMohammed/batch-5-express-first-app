const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>Hello from Express</h1>`)
})
app.post('/', (req, res) => {
    res.send(`<h1>Hello from Express (POST)</h1>`)
})
app.put('/', (req, res) => {
    res.send(`<h1>Hello from Express (PUT)</h1>`)
})
app.delete('/', (req, res) => {
    res.send(`<h1>Hello from Express (DELETE)</h1>`)
})

app.listen(PORT, () => console.log(`Server started running on ${PORT}`))