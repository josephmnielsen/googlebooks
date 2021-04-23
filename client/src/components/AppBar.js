import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: 'none',
    color: 'white'
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Google Books App
          </Typography>
            <Button color="inherit"><Link to="/saved" className={classes.links}>Saved</Link></Button>
            <Button color="inherit"><Link to="/" className={classes.links}>Home</Link></Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}
export default Nav