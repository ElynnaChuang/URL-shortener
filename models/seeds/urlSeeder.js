const URL = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  URL.create({
    url: 'https://www.google.com.tw/?hl=zh_TW'
  })
  console.log('done');
})
