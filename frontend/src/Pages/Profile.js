import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AdminTest from './AdminTest';

  const theme = createTheme({
    status: {
      danger: red[200],
    },
  });
 
function Profile (){
    return (
        <ThemeProvider theme={theme}>
            <Link to ='/rabboniform'>
            <Button variant='contained'>Rabboni Form</Button>
            </Link>
            <AdminTest/>
      </ThemeProvider>
    )
}
 
export default Profile;