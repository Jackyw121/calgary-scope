import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';
import ClientLoginForm from '../Components/ClientLoginForm';


  const theme = createTheme({
    status: {
      danger: red[200],
    },
  });
 
function HomePage (){
    return (
        <ThemeProvider theme={theme}>
        <Box backgroundColor={theme.status.danger} height={1000}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Box>
      </ThemeProvider>
    )
}
 
export default HomePage;