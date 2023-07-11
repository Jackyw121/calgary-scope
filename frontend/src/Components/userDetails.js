import { useClientContext } from "../Hooks/useClientContext"
import { useAuthContext } from "../Hooks/useAuthContext"

//date fns
import { format } from 'date-fns'

const UserDetails = ({ user }) => {
    const { dispatch } = useClientContext()
    const { user } = useAuthContext()

    const handleClick = async () =>{
        if (!user) {
            return
        }
        const response = await fetch('/api/user/' + user._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}` 
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USER', payload: json})
        }
    }

    return (
        <div className="client-details">
            <h4>{client.details}</h4>
            <p><strong>Name: </strong>{user.firstName}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Account created: </strong>{format(new Date(client.createdAt), 'yyyy-MM-dd')}</p>
            <p><strong>Client Forms:</strong><button>View forms</button></p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default UserDetails