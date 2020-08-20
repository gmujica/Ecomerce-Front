import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Accordion  from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import DropzoneArea from './DropzoneArea'
import Form from './Form'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //height: '100%',
    width: '90%'
  },  
}));

export default function AccordionContent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} variant="h4">ADD NEW ITEM</Typography>
          <Typography className={classes.secondaryHeading}>Display the form</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
