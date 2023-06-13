import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';
import { Typography } from '@material-ui/core';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Typography align='center' variant='h5' color='secondary'>Sign Up</Typography>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;