import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import DropzoneArea from './DropzoneArea'
import Form from './Form'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Card from '../../../Main/components/Card'
//import {Copyright} from '../../../../utils/Utils'

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
      flexGrow: 1,
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
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
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

  const cards = [1, 2, 3, 4, 5, 6];

const UploadItem = () => { 
    const classes = useStyles()

        return (
            <div>
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                          <DropzoneArea />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>
                          <Form />  
                      </Paper>
                    </Grid>
                    <Grid container spacing={3} className={classes.root}>
                      <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={1}>
                          {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                              <Card />
                            </Grid>
                          ))}
                        </Grid>
                      </Container>
                    </Grid>
                </Grid>
                <Copyright />
            </div>
        )
}

export default UploadItem
