import React from 'react';
import { useEffect} from 'react';
import { useFormContext } from '../Hooks/useFormContext';
import { useAuthContext } from '../Hooks/useAuthContext';

//components
import FormDetails from '../Components/FormDetails';


const Admin = () => {
    const {forms, dispatch} = useFormContext()
    const {admin} = useAuthContext()

    useEffect(() => {
        const fetchForms = async () => {
            const response = await fetch('http://localhost:4000/api/form', {
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
            <div className='userProfile'>
                {forms && forms.map((form) => (
                    <FormDetails key={form._id} form={form}/>
                ))}
            </div>
        </div>
    )
}

export default Admin