import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'
//import saveItem from '../../../../services/index'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1,
      padding: '2.5em',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
      width: '90%'
    },
    
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      //display: 'flex',
      
    },
    media: {
      height: 140,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }))
  

  export default function Items() { 
    const classes = useStyles()

    const BASE_URL = 'http://localhost:7500'

      const [items, setItems] = useState([])

      useEffect(() => {
        axios({
          url:`${BASE_URL}/items`,
          method:'GET',
        })
        .then(res =>{
          console.log('Data has been GET from the server', res)
          setItems(res.data)
          
        })
        .catch(err => {
          console.log(err);
        })
      }, [])

      /*saveItem = () => {
        axios({
          url:`${BASE_URL}/items`,
          method:'GET',
        })
        .then(res =>{
          console.log('Data has been GET from the server', res)
          setItems(res.data)
          
        })
        .catch(err => {
          console.log(err);
        })
      }*/

        return (
            <>
                <Grid container spacing={3} className={classes.root}>
                    <Container className={classes.cardGrid} maxWidth="md">
                      <Grid container spacing={2}>
                        {items.reverse().map((item) => (
                          <Grid item key={item._id} xs={12} sm={6}>
                            <Card key={item._id}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://source.unsplash.com/random"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    {item.description}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <IconButton size="small" color="secondary">
                                  <AddShoppingCartIcon />
                                </IconButton>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  size="small"
                                  className={classes.button}
                                  //onClick={handleSubmit}
                                  startIcon={<DeleteIcon />}
                                >
                                  Delete
                                </Button>
                                <Typography gutterBottom variant="h5">{item.price}$</Typography>
                              </CardActions>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Container>
                </Grid>
                <Copyright />
            </>
        )
}

