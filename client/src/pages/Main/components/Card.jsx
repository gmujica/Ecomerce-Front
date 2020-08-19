import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    //display: 'flex',
    padding: '2.5em'
  },
  media: {
    height: 140,
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    
  },
  card: {
    height: '100%',
    display: 'flex',
    width: '1000px',
    flexDirection: 'column',
  },
}));

const MediaCard = () => {

  const BASE_URL = 'http://localhost:7500'

  const [items, setItems] = useState([])

  useEffect(() => {
    axios({
      url:`${BASE_URL}/items`,
      method:'GET',
      //data: payload
    })
    .then(res =>{
      console.log('Data has been GET from the server', res)
      setItems(res.data)
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const classes = useStyles();

  return (
        <div className={classes.cardGrid}>
          {items.map(item => (
            <Card key={item._id} className={classes.card}>
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
                    {item.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton size="small" color="secondary">
                  <AddShoppingCartIcon />
                </IconButton>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                <Typography gutterBottom variant="h5">{item.phone}$</Typography>
              </CardActions>
            </Card>
          ))}
        </div>
  );
}

export default MediaCard