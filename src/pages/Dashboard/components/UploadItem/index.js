import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import DropzoneArea from './DropzoneArea'
import Form from './Form'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
      width: '80%'
    },
  }));

const UploadItem = () => { 
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <DropzoneArea />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper >
                            <Form />
                        </Paper>
                    </Grid>   
                </Grid>
            </div>
        )
}

export default UploadItem
