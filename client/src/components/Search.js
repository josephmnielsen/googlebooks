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

const Search = ({
  search,
  handleInputChange,
  handleSearch
}) => {
  const classes = useStyles();

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
          value={search}
          onChange={handleInputChange}
        />
      </form>
      <Button
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
}
export default Search