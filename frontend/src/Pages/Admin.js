import React from 'react';
import { useEffect, useState} from 'react';
import { useFormContext } from '../Hooks/useFormContext';
import { useAuthContext } from '../Hooks/useAuthContext';

//components
import FormDetails from '../Components/FormDetails';


const Admin = () => {
    const {forms, dispatch} = useFormContext()
    const {admin} = useAuthContext()
    const [query, setQuery] = useState("")
    const url = "https://calgary-scope.onrender.com"

    
    useEffect(() => {
        const fetchForms = async () => {
            const response = await fetch(url + '/api/form', {
                headers: {
                    'Authorization': `Bearer ${admin.token}` 
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_FORMS', payload: json})
            }
        }
        if (admin) {
        fetchForms()
        }
    }, [dispatch, admin])

    return (
        <div>
            <div className='formProfile'>
            <input type ="text" placeholder="Search..." className="search" onChange={e=> setQuery(e.target.value)}></input>
            
                {forms && forms.filter(form=>form.pFirstName.toLowerCase().includes(query)).map((form) => (
                    <FormDetails key={form._id} form={form}/>
                ))}
            </div>
        </div>
    )
}

export default Admin