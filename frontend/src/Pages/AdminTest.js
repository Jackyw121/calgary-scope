import React from 'react';
import { useEffect, useState } from 'react';

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
                    <p key={userProfile._id}>{userProfile.firstName}</p>
                ))}
            </div>
        </div>
    )
}

export default AdminTest