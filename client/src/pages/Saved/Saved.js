import { useEffect, useState } from 'react'
import Books from '../../utils/Books.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 1000,
    margin: 10
  },
  media: {
    height: 500,
  },
});

const Saved = () => {
  const classes = useStyles();
  const [savedState, setSavedState] = useState({
    books: []
  })

  useEffect(() => {
    Books.getBooks()
      .then(({ data: books }) => {
        console.log(books)
        setSavedState({ ...savedState, books })
      })
      .catch(err => {
        console.error(err)

      })
  }, [])

  const handleDelete = id => {
    Books.deleteBook(id)
      .then(() => {
        const books = savedState.books.filter(book => book._id !== id)
        setSavedState({ ...savedState, books })
      })
  }

  return (
    <>
      <div>
        {savedState.books.length ? savedState.books.map(book => (
          <>
    
            <Card className={classes.root} style={{ display: 'inline-block' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book.image}
                  title={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <h3>
                    {book.author}
                  </h3>
                  <div style={{ overflow: 'scroll', height: 200 }}>

                    <Typography variant="body2" color="textSecondary" component="p" >
                      {book.description}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button size="small" color="primary" onClick={() => handleDelete(book._id)}>
                  Delete
        </Button>
              </CardActions>
            </Card>
          </>
        )) : null}
      </div>
    </>

  )
}

export default Saved