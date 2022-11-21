const express = require('express')
const generateURL = require('../../utils/generateURL')
const router = express.Router()
const URL = require('../../models/url')

router.get('/', (req, res) => {
  res.render('input')
})

router.post('/', (req, res) => {
  const urlBefore = req.body.urlBefore
  const urlAfter = generateURL()

  if (!urlBefore) { return res.redirect('/') }

  URL.findOne({ urlBefore })
    .then((data) => {
      return data || URL.create({ urlBefore, urlAfter })
    })
    .then((data) => {
      const { urlBefore, urlAfter } = data
      const root = req.headers.origin
      return res.render('result', { urlBefore, urlAfter, root })
    })
    .catch((err) => {
      res.render('error', { err })
      console.log(err)
    })
})

router.get('/:urlAfter', (req, res) => {
  const urlAfter = req.params.urlAfter
  URL.findOne({ urlAfter })
    .then(data => { return res.redirect(data.urlBefore) })
    .catch((err) => {
      res.render('error', { err })
      console.log(err)
    })
})

module.exports = router