import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DropzoneArea from './DropzoneArea'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const UploadItem = () => { 
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <DropzoneArea />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <DropzoneArea 
                                disabled={true}
                            />
                        </Paper>
                    </Grid>   
                </Grid>
            </div>
        )
}

export default UploadItem
