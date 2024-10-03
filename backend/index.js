const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.json({ message: " server is started" })
})
app.listen(PORT, () => console.log(`localhost started at ${PORT}`))