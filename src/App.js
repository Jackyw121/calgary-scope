// Import React
import React from "react";

// Import Bootstrap
import {Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";
//import navbar
import Navbar from "./Components/Navbar";
//import sign in form
import Form from "./Components/Form";


// App Component
const App = () => {
    return (
        <>
            <Navbar/>
        </>
    );
}
 
export default App;
