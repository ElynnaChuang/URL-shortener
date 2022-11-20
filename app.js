const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')
const URL = require('./models/url')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true })) // body-parser

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})
