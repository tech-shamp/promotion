const express = require('express')
const path = require('path')

const app = express()
const renderPath = path.join(__dirname, 'public')
const port = process.env.PORT || 999

app.set('view engine', 'ejs')
app.use(express.static(renderPath))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`"""""""""""""""""""`)
  console.log(`"""""""${port}""""""`)
  console.log(`"🚀App listening on ${port}"`)
})