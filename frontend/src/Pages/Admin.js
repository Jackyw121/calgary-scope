import React from 'react';
import { useEffect, useState} from 'react'

//components
import ClientDetails from '../Components/ClientDetails'
import ClientLoginForm from '../Components/ClientLoginForm'
import ClientCreateAccount from './CreateAccout';
 
const Admin = () => {
    const [clients, setClients] = useState(null)

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/login')
            const json = await response.json()

            if (response.ok) {
                setClients(json)
            }
        }

        fetchClients()
    }, [])

 return    (
 <div className="admin">
    <div className='clients'>
        {clients && clients.map((client) => (
            <ClientDetails key = {client._id} client={client}/>
        ))}
    </div>
 </div>
)
}
 
export default Admin;