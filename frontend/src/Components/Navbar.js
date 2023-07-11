import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ModalDialog from "./modalDialog";
import {
  BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useLogout } from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = () => {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)

  const { user } = useAuthContext()

  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();


  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
      <Link to="/">
      <IconButton>
        <img src={require("./Assets/scopeLogo.webp")} alt="Calgary Scope Logo" style={{width: 200, height: 50 }}/>
      </IconButton>
      </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <Link to="/">
              <Button color='secondary'>
              {t('home')}
              </Button>
              </Link>
              <Link to="/about-us">
              <Button color='secondary'>
              {t('about_us_title')}
              </Button>
              </Link>
              {user && (
              <Link to="/admin">
              <Button color='secondary'>
              Admin
              </Button>
              </Link>              
              )}
          </Box>
        {user && (
          <div>
          <Link to='/profile'>
          <Button color='secondary'>{user.email}</Button>
          </Link>
          <Link href='/'>
        <Button onClick={handleClick} color="secondary">
          Log out
        </Button>
        </Link>
          </div>
        )}
        {!user && (
        <div>
        <Link to="/login">
        <Button color="secondary" onClick={handleOpen}>
          Log in
        </Button>
        </Link>
        <Link to="/signup"> 
        <Button color="secondary">
        Sign up
        </Button>
        </Link>
        </div>
        )}
        <LanguageSelect/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;