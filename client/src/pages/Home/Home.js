import {useState} from 'react'
import Books from '../../utils/Books.js'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Card from '../../components/Card.js'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginTop: 100
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [bookState, setBookState] = useState({
    search: '',
    books: []
  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  const handleSearch = event => {
    event.preventDefault()
    Books.getBook(bookState.search)
      .then(({ data: books }) => {
        setBookState({ ...bookState, books })
      })
      .catch(err => console.error(err))
  }

  const handleSave = book => {

    Books.addBook(book)
    
      .then(({ data: book }) => {})
      .catch(err => console.error(err))
  }

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        <TextField
          id="outlined-basic"
          label="Search title"
          variant="outlined"
          name="search"
          value={bookState.search}
          onChange={handleInputChange}
        />
      </form>
      <Button
        onClick={handleSearch}
      >
        Search
      </Button>

      <div>
        { bookState.books.length? bookState.books.map(book => (
          
       <Card
       key={book.id}
       bookTitle={book.volumeInfo.title && book.volumeInfo.title}
       bookImage={book.volumeInfo.imageLinks.smallThumbnail}
       bookDesc={book.volumeInfo.description}
       bookAuthor={book.volumeInfo.authors}
       handleSave={() => handleSave({
              title: book.volumeInfo.title,
              image: book.volumeInfo.imageLinks.smallThumbnail,
              author: book.volumeInfo.authors[0],
              description: book.volumeInfo.description,
              id: book.id
            })}
        />
        )) : null }
      </div>
    </>
  )
}

export default Home