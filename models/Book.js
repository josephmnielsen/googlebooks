const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: String,
  cover: String,
  authors: String,
  description: String,
})

module.exports = model('Book', Book)