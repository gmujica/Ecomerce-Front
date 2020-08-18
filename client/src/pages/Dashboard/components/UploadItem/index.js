import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import DropzoneArea from './DropzoneArea'
import Form from './Form'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
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
      width: '100%'
    },
  }));

const UploadItem = () => { 
    const classes = useStyles();
        return (
            <div>
                <Typography variant="h4">
                   Upload Item 
                </Typography>
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
                </Grid>
                <Copyright />
            </div>
        )
}

export default UploadItem
