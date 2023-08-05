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
            <p><strong>City: </strong>{form.city}</p>
            <p><strong>Province: </strong>{form.province}</p>
            <p><strong>Postal Code: </strong>{form.postalcode}</p>
            <p><strong>Child Fisrtname: </strong>{form.childFirstName}</p>
            <p><strong>Child Lastname: </strong>{form.childLastName}</p>
            <p><strong>Child ID: </strong>{form.childID}</p>
            <p><strong>Gender: </strong>{form.gender}</p>
            <p><strong>Birth Date: </strong>{form.birthDate}</p>
            <p><strong>Lives at Home: </strong>{form.livesAtHome}</p>
            <p><strong>Type Of Service: </strong>{form.typeOfService}</p>
            <p><strong>Alberta Health Card Number: </strong>{form.albertaHealthCardNumber}</p>
            <p><strong>Diagnoses: </strong>{form.diagnoses}</p>
            <p><strong>Eating: </strong>{form.eating}</p>
            <p><strong>Dressing: </strong>{form.dressing}</p>
            <p><strong>Toileting: </strong>{form.toileting}</p>
            <p><strong>Activities: </strong>{form.activities}</p>
            <p><strong>Speech and Hearing: </strong>{form.speechAndHearing}</p>
            <p><strong>Vision: </strong>{form.vision}</p>
            <p><strong>Mobility: </strong>{form.mobility}</p>
            <p><strong>Special Instructions: </strong>{form.specialInstructions}</p>
            <p><strong>Primary Doctor: </strong>{form.primaryDoctor}</p>
            <p><strong>Clinic: </strong>{form.clinic}</p>
            <p><strong>Clinic Address: </strong>{form.clinicAddress}</p>
            <p><strong>Clinic Phone: </strong>{form.clinicPhone}</p>
            <p><strong>Emergency Transport: </strong>{form.emergencyTransport}</p>
            <p><strong>Emergency Option: </strong>{form.emergencyOption}</p>
            <p><strong>Medications: </strong>{form.medications}</p>
            <p><strong>Dosage: </strong>{form.dosage}</p>
            <p><strong>Number of Times : </strong>{form.numOfTimes}</p>
            <p><strong>Prescribed For: </strong>{form.prescribedFor}</p>
            <p><strong>Medications 2: </strong>{form.medications2}</p>
            <p><strong>Dosage 2: </strong>{form.dosage2}</p>
            <p><strong>Number of Times 2: </strong>{form.numOfTimes2}</p>
            <p><strong>Prescribe For 2: </strong>{form.prescribedFor2}</p>
            <p><strong>Medications 3: </strong>{form.medications3}</p>
            <p><strong>Dosage 3: </strong>{form.dosage3}</p>
            <p><strong>Number of Times 3: </strong>{form.numOfTimes3}</p>
            <p><strong>Prescribe For 3: </strong>{form.prescribedFor3}</p>
            </ToggleVisibility>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default FormDetails 