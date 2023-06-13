import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
      color: theme.status.danger,
    },
  }));

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