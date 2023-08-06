import React from 'react';
import { useEffect} from 'react'
import { useClientContext } from '../Hooks/useClientContext';
import { useAuthContext } from '../Hooks/useAuthContext';

//components
import ClientDetails from '../Components/ClientDetails'
const url = "https://calgary-scope.onrender.com"

 
const AdminTest = () => {
    const {clients, dispatch} = useClientContext()
    const {admin} = useAuthContext()

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch(url + '/api/client', {
                headers: {
                    'Authorization': `Bearer ${admin.token}` 
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CLIENTS', payload: json})
            }
        }
        if (admin) {
        fetchClients()
        }
    }, [dispatch, admin])

    // useEffect(() => {
    //     const fetchForms = async () => {
    //         const response = await fetch('http://localhost:4000/api/forms', {
    //             headers: {
    //                 'Authorization': `Bearer ${admin.token}` 
    //             }
    //         })
    //         const json = await response.json()

    //         if (response.ok) {
    //             dispatch({type: 'SET_FORMS', payload: json})
    //         }
    //     }
    //     if (admin) {
    //     fetchForms()
    //     }
    // }, [dispatch, admin])

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
 
export default AdminTest;