const express = require('express')
const router = express.Router()
// const URL = require('../../models/url')

router.get('/', (req, res) => {
  // res.render('input')
  res.render('input')
})

module.exports = router