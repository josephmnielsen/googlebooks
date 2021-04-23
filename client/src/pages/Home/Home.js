import {useState} from 'react'
import Book from '../../utils/Books.js'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

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
    Book.getBook(bookState.search)
      .then(({ data: books }) => {
        console.log(books)
        setBookState({ ...bookState, books })
      })
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
          value={bookState.search}
          onChange={handleInputChange}
        />
      </form>
      <Button
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  )
}

export default Home