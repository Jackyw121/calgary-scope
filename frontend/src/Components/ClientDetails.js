import { useClientContext } from "../Hooks/useClientContext"
import { useAuthContext } from "../Hooks/useAuthContext"

//date fns
import { format } from 'date-fns'

const ClientDetails = ({ client }) => {
    const { dispatch } = useClientContext()
    const { admin } = useAuthContext()

    const handleClick = async () =>{
        if (!admin) {
            return
        }
        const response = await fetch('/api/client/' + client._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${admin.token}` 
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CLIENT', payload: json})
        }
    }

    return (
        <div className="client-details">
            <h4>{client.details}</h4>
            <p><strong>Name: </strong>{client.name}</p>
            <p><strong>Email: </strong>{client.email}</p>
            <p><strong>Phone: </strong>{client.phone}</p>
            <p><strong>Account created: </strong>{format(new Date(client.createdAt), 'yyyy-MM-dd')}</p>
            <p><strong>Client Forms:</strong><button>View forms</button></p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default ClientDetails