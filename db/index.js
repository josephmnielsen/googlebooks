module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebook_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
