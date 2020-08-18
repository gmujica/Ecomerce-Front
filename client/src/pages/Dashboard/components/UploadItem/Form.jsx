import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { Typography } from '@material-ui/core'
//import Grid from '@material-ui/core/Grid';
//import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    padding: '0.5em'
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div className={classes.title}>
          <Typography variant="h5">
            Create New Item
          </Typography>
        </div>
        <div>
          <TextField
            label="Title"
            id="outlined-margin-none"
            //defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            label="$"
            id="outlined-margin-none"
            //defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
            //startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          <TextField
            id="outlined-full-width"
            label="Description"
            style={{ margin: 8 }}
            //placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form