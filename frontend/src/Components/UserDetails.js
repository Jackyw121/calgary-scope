import format from "date-fns/format"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useUserProfileContext } from "../Hooks/useUserProfileContext"

const UserDetails = ({ userProfile }) => {
    const { dispatch } = useUserProfileContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/user/' + userProfile._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERPROFILE', payload: json})
        }

    }


    return (
        <div className="client-details">
        <h4>{userProfile.details}</h4>
        <p><strong>Name: </strong>{userProfile.firstName}</p>
        <p><strong>Email: </strong>{userProfile.email}</p>
        <p><strong>Phone: </strong>{userProfile.phone}</p>
        <p><strong>Account created: </strong>{format(new Date(userProfile.createdAt), 'yyyy-MM-dd')}</p>
        <p><strong>Client Forms:</strong><button>View forms</button></p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
    )
}
export default UserDetails