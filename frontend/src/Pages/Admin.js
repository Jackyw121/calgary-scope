import React from "react";
import { useEffect, useState } from "react";
import { useFormContext } from "../Hooks/useFormContext";
import { useAuthContext } from "../Hooks/useAuthContext";

//components
import FormDetails from "../Components/FormDetails";

const Admin = () => {
  const { forms, dispatch } = useFormContext();
  const { admin } = useAuthContext();
  const [query, setQuery] = useState("");
  const url = "https://calgary-scope.onrender.com";

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch(url + "/api/form", {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_FORMS", payload: json });
      }
    };
    if (admin) {
      fetchForms();
    }
  }, [dispatch, admin]);

  return (
    <div className="container-desktop px-4">
      <div className="row g-5 d-flex justify-content-center">
        <div className="col-xl-0 col-6 text-center">
        </div>
        <div className="col-xl-8">
          <div
            className="profile border bg-light align-middle rounded-4"
            style={{
              marginTop: 5 + "rem",
            }}
          >
            <div className="container text-center mt-5">
              <input
                type="search"
                placeholder="Search by First Name..."
                className="search border-1 border-dark rounded-4 p-2 form-control text-center"
                onChange={(e) => setQuery(e.target.value)}
              ></input>
            </div>

            {forms &&
              forms
                .filter((form) => form.pFirstName.toLowerCase().includes(query))
                .map((form) => <FormDetails key={form._id} form={form} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
