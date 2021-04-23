const router = require('express').Router()
const { Book } = require('../models')
const axios = require('axios')

router.get('/books/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data: { items: books } }) => {
    })
    .catch(err => console.log(err))
})

module.exports = router