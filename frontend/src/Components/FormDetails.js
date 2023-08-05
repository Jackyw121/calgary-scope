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
        Authorization: `Bearer ${admin.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CLIENT", payload: json });
    }
  };

  return (
    <div className="container rounded-3">
      <h1>
        {form.pFirstName} {form.pLastName}
        <span className="material-symbols-outlined mx-3" onClick={handleClick}>
          Delete
        </span>
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
          </div>
          <h3></h3>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian Last Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian Last Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h6>Parent/Guardian First Name</h6>
              <p>Madeline</p>
            </div>
          </div>
        </div>
      </ToggleVisibility>
    </div>
  );
};

export default FormDetails;
