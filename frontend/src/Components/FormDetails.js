import { useFormContext } from "../Hooks/useFormContext"
import { useAuthContext } from "../Hooks/useAuthContext"
import ToggleVisibility from "./ToggleVisibility";


const FormDetails = ({ form }) => {
    const { dispatch } = useFormContext()
    const { admin } = useAuthContext()
    const url = "https://calgary-scope.onrender.com"

    const handleClick = async () =>{
        if (!admin) {
            return
        }
        const response = await fetch(url + '/api/form/' + form._id, {
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
            <ToggleVisibility>
            <p><strong>Cell Phone: </strong>{form.cellPhoneNumber}</p>
            <p><strong>Email: </strong>{form.email}</p>
            <p><strong>Street Address: </strong>{form.streetAddress}</p>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            <p><strong>First Name: </strong>{form.pFirstName}</p>
            <p><strong>Last Name: </strong>{form.pLastName}</p>
            <p><strong>Home Phone: </strong>{form.homeNumber}</p>
            </ToggleVisibility>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default FormDetails 