const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: String,
  image: String,
  author: String,
  description: String,
})

module.exports = model('Book', Book)