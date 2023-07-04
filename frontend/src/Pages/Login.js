import { useState } from "react"
import { useLogin } from '../Hooks/useLogin'
import React from "react";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@mui/material/Link';
import { Box } from "@mui/material";

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));


const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    

    return(
        <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h3"> Log in </Typography>
        <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <Box onSubmit={handleSubmit}>
        <Button type='Submit' variant="contained" disabled={isLoading}>
                Log in
        </Button>
            {error && <div className="error">{error}</div>}
        </Box>
        <div>
        <Link href='/signup'>Create an Account</Link>
        </div>
        <div>
        <Link href='/forgot-password'>Forgot Password?</Link>
        </div>
        <div>
        <Link href='/employee-login'>Are you an Employee?</Link>
        </div>
        </form>
    )
}

export default Login