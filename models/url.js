const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  urlBefore: {
    type: String,
    required: true
  },
  urlAfter: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)
