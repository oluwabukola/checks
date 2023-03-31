import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter, Link  } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { companyLogout } from '../../store/External/Actions/Authentication';
import { useHistory } from 'react-router';


import { Form, FormInput } from './Home.elements';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
    
  let iconSide = [
    { name: <Link to='/external/dashboard'>Dashboard</Link>, icon: "fas fa-igloo" },
    { name: <Link to='/external/verification'>Verification</Link>, icon: "fas fa-user-check" },
    { name: <Link to='/external/payment'>Payment</Link>, icon: "fab fa-cc-amazon-pay" },
    { name: <Link to='/external/status'>Verification status</Link>, icon:"fas fa-fan" },
    {name: <Link to='/external/transaction'>Transaction</Link>, icon:"fas fa-money-bill-wave"},
   
  ]

  let subMenu = [
   
    { name:<Link to='/report'>Report</Link>, icon:"fas fa-sticky-note"},
  ]
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  
  const [openSetting, setOpenSetting] = React.useState(false);
  const [payload, setPayload] = React.useState("");
  const [type, setType] = React.useState("");

  function handleClick() {
    setOpen(!open)
  }

  function handleSecondClick() {
    setOpenSetting(!openSetting)
  }

  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(companyLogout())
      .then(data => {
        localStorage.clear();
        //  window.location.reload();
        history.push('/')
      })
      
  
  }
  const drawer = (
      
      <div className="left">
      <div className={classes.toolbar} />
      <Divider />
      <List >
        {iconSide.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{[<i className={text.icon} key={index}></i>]}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
        
        <ListItem button onClick={handleClick} >
        <ListItemIcon className={classes.menuItem}>
            <i class="fas fa-cogs"></i>
        </ListItemIcon>
          <ListItemText primary={"Settings"} />
        {open ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
          <List component="div" disablePadding>
          {subMenu.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{[<i className={text.icon} key={index}></i>]}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
          </List>
        </Collapse>
        
          <ListItem button  >
            <ListItemIcon className={classes.menuItemIcon} >
            <i className="fas fa-sign-out-alt "></i>
          </ListItemIcon>
            <ListItemText primary={"Signout"} onClick={handleSubmit} />
          </ListItem>

      </List>
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
     
      
        <Toolbar>
       
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
           
          </IconButton>
     
          <Typography variant="h6" noWrap>
          </Typography>
          
          <Typography  variant="h6" noWrap>
          <i class="far fa-bell"></i>
            {/* <i className="fas fa-user-circle"></i> */}
            
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
           
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
           
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      
      </main>
          </div>
        
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
