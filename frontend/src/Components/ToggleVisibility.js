import React, { useState } from "react";

export default function ToggleVisibility({ children }) {

    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }

    var buttonText = show ? "Hide Componenet" : "Show Componenet";

    return (
        <div className="componenet-container">
            {show && children}
            <button onClick={toggleShow}>{buttonText}</button>
        </div>
    )
}