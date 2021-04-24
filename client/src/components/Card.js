import React from 'react';
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

const MediaCard = (props) => {
  const classes = useStyles();
  const {
    bookImage,
    bookTitle,
    bookDesc,
    bookAuthor,
    handleSave

  } = props

  return (
    <Card className={classes.root} style={{display: 'inline-block'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bookImage}
          title={bookTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {bookTitle}
          </Typography>
          <h3>
            {bookAuthor}
          </h3>
          <div style={{overflow: 'scroll', height: 200}}>

          <Typography variant="body2" color="textSecondary" component="p" >
            {bookDesc}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" onClick={()=>handleSave()}>
          Save
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard