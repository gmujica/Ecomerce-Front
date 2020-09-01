import React from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSnackbar } from 'notistack'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



export default function DeleteButton(props) {
  const [open, setOpen] = React.useState(false)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  //const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const handleDelete = () => {
        axios({
            url:`http://localhost:7500/items/${props.item._id}`,
            method:'DELETE'
        })
        .then(function (response) {
            if(response.status === 200) {
              enqueueSnackbar('Data has been delete from the server', {variant: 'success'});
            }
        })
        .catch(() => {
            console.log('Internal server error')
        })
        setOpen(false)
    }

  return (
    <div>
      <Button 
        variant="contained"
        color="secondary"
        size="small"
        //className={classes.button}
        //value={item._id}
        //onClick={handleDelete}
        startIcon={<DeleteIcon />} onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Are you sure you want to delete this item? 
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Name: {props.item.name}
          </Typography>
          <Typography gutterBottom>
            Description: {props.item.description}
          </Typography>
          <Typography gutterBottom>
           Stock: {props.item.quantity}
          </Typography>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose} color="secondary">
                Cancel
            </Button>
            <Button autoFocus onClick={handleDelete} color="primary">
                ok
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
