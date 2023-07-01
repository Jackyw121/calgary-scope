import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Login from '../Pages/Login';
import { useState } from "react"
import { useLogin } from '../Hooks/useLogin'
import { Typography } from '@material-ui/core';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Typography align='center' variant='h4' color='secondary'>Log in</Typography>
      <Login handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;