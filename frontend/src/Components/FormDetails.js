import { useFormContext } from "../Hooks/useFormContext";
import { useAuthContext } from "../Hooks/useAuthContext";
import ToggleVisibility from "./ToggleVisibility";
import Divider from "@mui/material/Divider";

const FormDetails = ({ form }) => {
  const { dispatch } = useFormContext();
  const { admin } = useAuthContext();
  const url = "https://calgary-scope.onrender.com";

  const handleClick = async () => {
    if (!admin) {
      return;
    }
    const response = await fetch(url + "/api/form/" + form._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${admin.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_FORM", payload: json });
    }
  };

  return (
    <div className="container rounded-3">
        <div className="client-details">
      <h1>
        {form.pFirstName} {form.pLastName}
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
      </h1>
      

      <ToggleVisibility>
        <div className="container bg-light p-5 rounded-5">
          <h3>Client Information</h3>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>{form.pFirstName}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian Last Name</h6>
              <p>{form.pLastName}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Child First Name</h6>
              <p>{form.childFirstName}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Child Last Name</h6>
              <p>{form.childLastName}</p>
              <hr />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Home Phone</h6>
              <p>{form.homeNumber}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Cellphone Number</h6>
              <p>{form.cellPhoneNumber}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Email Address</h6>
              <p>{form.email}</p>
              <hr />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Home status (Y/N)</h6>
              <p>{form.livesAtHome}</p>
              <hr />
            </div>
          </div>
          <h3></h3>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>City</h6>
              <p>{form.city}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Province</h6>
              <p>{form.province}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Postal Code</h6>
              <p>{form.postalCode}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Child First Name</h6>
              <p>{form.childFirstName}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Child Last Name</h6>
              <p>{form.childLastName}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Child ID</h6>
              <p>{form.childID}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Gender</h6>
              <p>{form.gender}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Birth Date</h6>
              <p>{form.birthDate}</p>
              <hr/>
            </div>
          </div>
                    <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Type of Service</h6>
              <p>{form.typeOfService}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Alberta Health Card Number</h6>
              <p>{form.albertaHealthCardNumber}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Diagnosis</h6>
              <p>{form.diagnoses}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Eating </h6>
              <p>{form.eating}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Dressing </h6>
              <p>{form.dressing}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Toileting</h6>
              <p>{form.toileting}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Activites</h6>
              <p>{form.activities}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Speech and Hearing</h6>
              <p>{form.speechAndHearing}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Vision</h6>
              <p>{form.vision}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Mobility</h6>
              <p>{form.mobility}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Special Instructions</h6>
              <p>{form.specialInstructions}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Primary Doctor</h6>
              <p>{form.primaryDoctor}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Clinic</h6>
              <p>{form.clinic}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Clinic Address</h6>
              <p>{form.clinicAddress}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Clinic Phone</h6>
              <p>{form.clinicPhone}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Emergency Transport</h6>
              <p>{form.emergencyTransport}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Emergency Option</h6>
              <p>{form.emergencyOption}</p>
              <hr/>
            </div>
            </div>
            <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Medications</h6>
              <p>{form.medications}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Dosage</h6>
              <p>{form.dosage}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Number of Times</h6>
              <p>{form.numOfTimes}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Prescribed For</h6>
              <p>{form.prescribedFor}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Medications 2</h6>
              <p>{form.medications2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Dosage 2</h6>
              <p>{form.dosage2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Number of Times 2</h6>
              <p>{form.numOfTimes2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Prescribed For 2</h6>
              <p>{form.prescribedFor2}</p>
              <hr/>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Medications 3</h6>
              <p>{form.medications2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Dosage 3</h6>
              <p>{form.dosage2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Number of Times 3</h6>
              <p>{form.numOfTimes2}</p>
              <hr/>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Prescribed For 3</h6>
              <p>{form.prescribedFor2}</p>
              <hr/>
          </div>
          </div>
            
        </div>
        
      </ToggleVisibility>
      </div>
    </div>
  );
};

export default FormDetails;
