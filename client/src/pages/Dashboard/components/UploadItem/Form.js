import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { Typography } from '@material-ui/core'
import { useSnackbar } from 'notistack'

//import { useForm } from 'react-hook-form'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '25ch',
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    padding: '0.5em'
  }
}));

function Form () {
  const classes = useStyles();
  const [formData, setFormData] = useState({ 
    name: '', 
    description: '', 
    price: '',
    quantity: ''
  })

  React.useEffect(() => {
     
  })

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7500/items', formData)
      .then(function (response) {
          if(response.status === 200) {
            setFormData({
              ...formData, 
              name: '', 
              description: '', 
              price: '',
              quantity: ''
            })
            enqueueSnackbar('Success', {variant: 'success'});
          }
      })
      .catch(function (error) {
          //console.log(error)
          enqueueSnackbar('Error:', error, {variant: 'error'});
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    
    })
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <div className={classes.title}>
          <Typography variant="h5">
            Create New Item
          </Typography>
        </div>
        <div>
          <TextField
            required
            //error={true}
            label="Name"
            name="name"
            value={formData.name} 
            onChange={handleChange}
            id="outlined-margin-none"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            //error={true}
            label="$"
            name="price"
            value={formData.price} 
            onChange={handleChange}
            id="outlined-margin-none"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            //error={true}
            name="quantity"
            value={formData.quantity} 
            onChange={handleChange}
            id="outlined-number"
            label="quantity"
            type="number"
            className={classes.textField} 
            variant="outlined"
          />
          <TextField
            required
            //error={true}
            name="description"
            value={formData.description} 
            onChange={handleChange} 
            id="outlined-full-width"
            label="Description"
            style={{ margin: 8 }}
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
            onClick={handleSubmit}
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