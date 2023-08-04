import { useFormContext } from "../Hooks/useFormContext"
import { useAuthContext } from "../Hooks/useAuthContext"
import ToggleVisibility from "./ToggleVisibility";
import CompleteFormDetail from "./CompleteFormDetail";

const FormDetails = ({ form }) => {
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
            <h4>{form.details}</h4>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            <ToggleVisibility><CompleteFormDetail/></ToggleVisibility>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default FormDetails 