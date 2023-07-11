import React from 'react';
import { useEffect, useState } from 'react';
import UserDetails from '../Components/UserDetails';

const AdminTest = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }
        fetchUsers()
    },[])

    return (
        <div>
            <div className='userProfile'>
                {users && users.map((userProfile) => (
                    <UserDetails key={userProfile._id} userProfile={userProfile}/>
                ))}
            </div>
        </div>
    )
}

export default AdminTest