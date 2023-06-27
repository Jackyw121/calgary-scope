import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormLogin from './FormLogin';
import { Typography } from '@material-ui/core';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Typography  align='center' variant='h5' color='secondary'>Log in</Typography>
      <FormLogin handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;