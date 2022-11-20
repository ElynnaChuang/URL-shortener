const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true })) // body-parser
app.use(routes)

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})
