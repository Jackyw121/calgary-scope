import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const ClientCreateAccount = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const client = {name, phone, email}

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setPhone('')
            setEmail('')
            setError(null)
            console.log('New Client Added', json)
        }
    }

    return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { mx: 1, width: '25ch', marginTop: 2, marginBottom: 3},
      }}
      noValidate
      autoComplete="off"
    >

        <form className='create' onSubmit={handleSubmit}>
        <h3>Create an account</h3>
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <TextField
          required
          id="outlined-required"
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className='buttonHolder'>
            <Button variant='contained' color = 'secondary' >Sign up</Button>
        </div>
            {error && <div className='error'>{error}</div>}
        </form>
        </Box>
    )
}

export default ClientCreateAccount