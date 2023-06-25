import React from 'react';
import { useEffect} from 'react'
import { useClientContext } from '../Hooks/useClientContext';

//components
import ClientDetails from '../Components/ClientDetails'
import ClientLoginForm from '../Components/ClientLoginForm'
import ClientCreateAccount from './CreateAccout';
 
const Admin = () => {
    const {clients, dispatch} = useClientContext()

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/login')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CLIENTS', payload: json})
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
    <ClientLoginForm/>
 </div>
)
}
 
export default Admin;