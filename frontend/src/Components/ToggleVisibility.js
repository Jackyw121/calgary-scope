import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }

  var buttonText = show ? "Hide Rabonni Form" : "Show Rabonni Form";

  return (
    <div className="component-container">
      {show && children}
      <button className="btn btn-danger m-2" onClick={toggleShow}>
        {buttonText}
      </button>
    </div>
  );
}
