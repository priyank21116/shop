import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { deepOrange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
import shoplogo from '../images/shoplogo.png'
import { useSelector } from 'react-redux';

import './style.css'
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
      grow: {
            flexGrow: 1,
      },
      menuButton: {
            marginRight: theme.spacing(2),
      },
      title: {
            display:"none",
            [theme.breakpoints.up('sm')]: {
                  display: 'block',
            },
      },
      search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.9),
            '&:hover': {
                  backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(0),
            marginLeft: '150',
            width: '700px',
            [theme.breakpoints.up('sm')]: {
                  marginLeft: theme.spacing(4),
                  width: 'auto',
            },
      },
      searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color:'grey',
      },
      inputRoot: {
            color:'grey',

      },
      inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                  width: '20ch',
            },
      },
      sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                  display: 'flex',
            },
      },
      sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                  display: 'none',
            },
      },
  
}));

export default function Navbar() {
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
      const[menuopen,setMenuopen]=React.useState(false);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


     const sidebarfunction =()=>{
           setMenuopen(!menuopen)
             if(menuopen===true){
                   <Sidebar />
                   alert('opened')
             }
           
     }


      const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleMobileMenuClose = () => {
            setMobileMoreAnchorEl(null);
      };

      const handleMenuClose = () => {
            setAnchorEl(null);
            handleMobileMenuClose();
      };

      const handleMobileMenuOpen = (event) => {
            setMobileMoreAnchorEl(event.currentTarget);
      };

      const menuId = 'primary-search-account-menu';
      const renderMenu = (
            <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
            >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
      );

      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
            <Menu
                  anchorEl={mobileMoreAnchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={mobileMenuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={isMobileMenuOpen}
                  onClose={handleMobileMenuClose}
            >
                  <MenuItem>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                              <Badge badgeContent={4} color="secondary">
                              <ShoppingCartIcon />
                              </Badge>
                        </IconButton>
                        <p>Messages</p>
                  </MenuItem>
                  <MenuItem>
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                              <Badge badgeContent={11} color="secondary">
                                    <NotificationsIcon />
                              </Badge>
                        </IconButton>
                        <p>Notifications</p>
                  </MenuItem>
                  <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                              aria-label="account of current user"
                              aria-controls="primary-search-account-menu"
                              aria-haspopup="true"
                              color="inherit"
                        >
                              <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                  </MenuItem>
            </Menu>
      );
      const{Tquantity} = useSelector(state => state.addInClientCart)
      console.log("NABAR quantity",Tquantity)
      return (
           
            <div className="navbar1" id="nav1">
            <div className={classes.grow}>
                  <AppBar position="static" style={{ background: '#2E3B55' }}>
                  
                        <Toolbar>

                        <Button onClick={sidebarfunction}>
                  <MenuIcon  style={{color:'white'}}/>
                  </Button>
                        
                        <img src={shoplogo} alt="logo" id="emartlogo"></img>
                              {/* <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    Wrap
                                    aria-label="open drawer"      
                              >
                                       <ShoppingBasketIcon style={{ color: deepOrange[700], fontSize: 30, marginRight:'0px',marginLeft:'20px',padding:0,}} />
                              </IconButton> */}
                              {/* <Typography className={classes.title} variant="h6" noWrap style={{marginLeft:'3px',marginRight:'0px', padding:0,}}>
                                    E-Mart
                              </Typography> */}
                              <div className={classes.search} id="nav-search">
                                    <div className={classes.searchIcon}>
                                          <SearchIcon />
                                    </div>
                                    <InputBase
                                          placeholder="Try Searching something...."
                                          classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                          }}
                                          inputProps={{ 'aria-label': 'search' }}
                                    />
                              </div>
                              <Button id="nav-search-button" variant="contained">Search</Button>
                              <div className={classes.grow} />
                              <div className={classes.sectionDesktop}>
                              <Link to="/cart" style={{ color: '#FFF' }}>
                                    <IconButton aria-label="show 4 new mails" color="inherit" id="nav-iconC">
                                          <Badge badgeContent={Tquantity} color="secondary">
                                                <ShoppingCartIcon />
                                          </Badge>
                                    </IconButton>
                                    </Link>
                              <Link to="/history" style={{ color: '#FFF' }}>
                                    <IconButton aria-label="show 4 new mails" color="inherit" id="nav-iconH">
                                          <Badge  color="secondary" style={{marginLeft:'1px',marginRight:'-8px'}}>
                                                <PlaylistAddCheckIcon />
                                          </Badge>
                                    </IconButton>
                                    </Link>
                                    <Link to="/login" style={{ color: '#FFF' }}>
                                    <IconButton aria-label="show 17 new notifications" color="inherit" id="nav-iconH">
                                          <Badge badgeContent={17} color="secondary">
                                                <NotificationsIcon />
                                          </Badge>
                                    </IconButton>
                                    </Link>
                                    <Link to="/register" style={{ color: '#FFF' }}>
                                    <IconButton
                                          edge="end"
                                          aria-label="account of current user"
                                          aria-controls={menuId}
                                          aria-haspopup="true"
                                          onClick={handleProfileMenuOpen}
                                          color="inherit"
                                          id ="nav-iconP"
                                    >
                                          <AccountCircle />
                                    </IconButton>
                                    </Link>
                              </div>
                              <div className={classes.sectionMobile}>
                                    <IconButton
                                          aria-label="show more"
                                          aria-controls={mobileMenuId}
                                          aria-haspopup="true"
                                          onClick={handleMobileMenuOpen}
                                          color="inherit"
                                    >
                                          <MoreIcon />
                                    </IconButton>
                              </div>
                        </Toolbar>
                        
                  </AppBar>
                  {renderMobileMenu}
                  {renderMenu}
            </div>
            </div>
      );
}

