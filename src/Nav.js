import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { withStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
// import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



import {
  BrowserRouter as Router,
  withRouter,
  useHistory
  
} from "react-router-dom";
import Login from './login';

import { connect } from 'react-redux';

import { loginUser, updatedLogin } from './store/actions/loginActions';
 const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
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

function Navi(props) {
  let iconSide = [
    { name:<Link to='/internal/home'>Home</Link>, icon:"fas fa-house-user"},
    { name:<Link to='/internal/createEmployee'>Create Employee</Link>, icon:"fas fa-certificate"},
    { name: <Link to='/internal/verification'>Verification</Link>, icon:"fas fa-check-double" },
   { name: <Link to='/internal/client'>Client</Link>, icon: "fas fa-layer-group" },
    { name: <Link to='/internal/verified'>Verified</Link>, icon: "fas fa-user-check" },
  ]
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector(state => state.login.login);
  


  const [open, setOpen] = React.useState(false);
  
  const [payload, setPayload] = React.useState("");
  const [type, setType] = React.useState("");

  function handleClick() {
    setOpen(!open)
  }

  function handleSubmit() {
        const token = localStorage.getItem('token');
        const response = fetch('http://hotelanywhere.ng/background/api/auth/logout', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
                  
        })
          .then(response => {
            
            return response.json();
          })
          .then(data => {
            console.log(data);
            localStorage.clear();
            dispatch({ type: 'ADD_LOGIN', payload: null })
            history.push('/');
            window.location.reload();
           
          })
          .catch((error) => {
            console.error('Error:', error);
          });
  }
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
        <ListItemIcon className={classes.menuItemIcon}>
            <i class="fas fa-cogs"></i>
        </ListItemIcon>
          <ListItemText primary={"Settings"} />
        {open ? <IconExpandLess /> : <IconExpandMore />}
          </ListItem>
        
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
          <List component="div" disablePadding>
            <Link to='/getConditions'>
          <ListItem button className={classes.menuItem}>
             
            <ListItemText inset primary={" Conditions"} />
            </ListItem>
            </Link>
            <Link to='/users'>
          <ListItem button className={classes.menuItem}>
              <ListItemText inset primary={"Users"} />
            </ListItem>
            </Link>
            <Link to='/roles'>
            <ListItem button className={classes.menuItem}>
            <ListItemText inset primary={"Roles"} />
            </ListItem>
                </Link>
        </List>
        </Collapse>
          <ListItem button onClick={handleSubmit}>
            <ListItemIcon className={classes.menuItemIcon}>
            <i className="fas fa-sign-out-alt "></i>
          </ListItemIcon>
            <ListItemText primary={"Signout"} />
           
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
            <i className="fas fa-user-circle"></i>
            {user !== null || user.user!== null && user.user.name}
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

const mapStateToProps = (state) => {
 
  return {
      login: state.login.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginUser: (login) => dispatch(loginUser(login)),
      updatedLogin: (data) => dispatch(updatedLogin(data)),
      
  }
  
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navi));