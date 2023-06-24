import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

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
        <form className='create' onSubmit={handleSubmit}>
            <h3>Create an account</h3>


            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Phone:</label>
            <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
            />

            <label>Email:</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            
            <button>Add Client Info</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default ClientCreateAccount