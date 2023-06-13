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
//import home
import HomePage from "./Pages/Home/HomePage";
import AboutUs from "./Pages/Home/AboutUs"
import Services from "./Pages/Home/Services"

// App Component
const App = () => {
    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="" element={< HomePage />}></Route>
                <Route exact path="/about-us" element={< AboutUs />}></Route>
                <Route exact path="/services" element={< Services />}></Route>
            </Routes>
        </Router>
        </>
    );
}
 
export default App;
