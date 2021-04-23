import axios from 'axios'

const Books = {
  getBook: search => axios.get(`/api/book/${search}`),
  getBooks: () => axios.get('/api/books'),
  addBook: book => axios.post('/api/books', book),
  deleteBook: id => axios.delete(`/api/books/${id}`)
}

export default Books