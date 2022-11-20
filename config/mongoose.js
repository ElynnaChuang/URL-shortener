const mongoose = require('mongoose')
const db = mongoose.connection

if (process.env.NODE_ENV !== 'product') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
db.once('open', () => console.log('mongodb connecting!'))
db.on('err', () => console.log('mongodb error!'))

module.exports = db