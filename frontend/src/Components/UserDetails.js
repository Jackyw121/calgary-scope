import format from "date-fns/format"
import { useAuthContext } from '../Context/AuthContext'



const UserDetails = ({users}) => {


    return (
        <div className="client-details">
        <h4>{users.details}</h4>
        <p><strong>Name: </strong>{users.firstName}</p>
        <p><strong>Email: </strong>{users.email}</p>
        <p><strong>Phone: </strong>{users.phone}</p>
        <p><strong>Account created: </strong>{format(new Date(users.createdAt), 'yyyy-MM-dd')}</p>
        <p><strong>Client Forms:</strong><button>View forms</button></p>
    </div>
    )
}

export default UserDetails