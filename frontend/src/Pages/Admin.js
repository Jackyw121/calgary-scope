import React from 'react';
import { useEffect} from 'react'
import { useClientContext } from '../Hooks/useClientContext';
import { useAuthContext } from '../Hooks/useAuthContext';

//components
import ClientDetails from '../Components/ClientDetails'
import ClientLoginForm from '../Components/ClientLoginForm';
 
const Admin = () => {
    const {clients, dispatch} = useClientContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('/api/client', {
                headers: {
                    'Authorization': `Bearer ${user.token}` 
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CLIENTS', payload: json})
            }
        }
        if (user) {
        fetchClients()
        }
    }, [dispatch, user])

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