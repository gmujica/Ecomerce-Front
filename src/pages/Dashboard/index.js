import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CreateIcon from '@material-ui/icons/Create'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import HistoryIcon from '@material-ui/icons/History'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// Components
import Checkout from './components/Checkout'
import Main from './components/Main'
import UploadItem from './components/UploadItem'
import Orders from '../Dashboard/components/Main/Orders'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Statistics" icon={<ShowChartIcon />} {...a11yProps(0)} />
          <Tab label="Checkout" icon={<CreateIcon />} {...a11yProps(1)} />
          <Tab label="Profile" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Upload Item" icon={<CloudUploadIcon />} {...a11yProps(3)} />
          <Tab label="Car" icon={<ShoppingCartIcon />} {...a11yProps(4)} />
          <Tab label="History" icon={<HistoryIcon />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Main />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Checkout />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UploadItem />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Orders />
            </Paper>
        </Grid>  
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

export default Dashboard
