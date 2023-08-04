import { useFormContext } from "../Hooks/useFormContext"
import { useAuthContext } from "../Hooks/useAuthContext"
import ToggleVisibility from "./ToggleVisibility";

const CompleteFormDetail = ({ form }) => {
    const { dispatch } = useFormContext()
    const { admin } = useAuthContext()

    const handleClick = async () =>{
        if (!admin) {
            return
        }
        const response = await fetch('/api/form/' + form._id, {
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
            <p><strong>Cell Phone: </strong>{form.cellPhoneNumber}</p>
            <p><strong>Email: </strong>{form.email}</p>
            <p><strong>Street Address: </strong>{form.streetAddress}</p>
        </div>
    )
}

export default CompleteFormDetail 