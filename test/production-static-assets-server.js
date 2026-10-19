const { join } = require('node:path')
const express = require('express')
const app = express()

const { PORT = 8080 } = process.env

app.use('/', express.static(join(__dirname, '..', 'examples')))
app.use('/dist/', express.static(join(__dirname, '..', 'dist')))

app.listen(PORT, () => {
  console.info(`Serving production examples at http://localhost:${PORT}`)
})
