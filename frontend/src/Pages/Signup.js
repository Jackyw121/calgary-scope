import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import { useClientContext } from '../Hooks/useClientContext';
import { useSignup } from "../Hooks/useSignup";
import { Typography } from "@mui/material";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return(
        <Box
        sx={{
            '& .MuiTextField-root': { mx: 1, width: '25ch', marginTop: 2, marginBottom: 3},
          }}
          noValidate
          autoComplete="off"
        >
            <h3 style={{marginTop: 50, textAlign: 'center'} }><u>Create an Account</u></h3>
            <form style={{marginTop: 20}}className='create' onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className='buttonHolder'>
                <Button disabled={isLoading} type='submit' variant='contained' color = 'secondary'>Sign up</Button>
            </div>
            {error && <div className="error">{error}</div>}
            </form>
            </Box>
    )
}

export default Signup