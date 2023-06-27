// Import React
import React from "react";
import { Box } from "@mui/material";
import { palette } from '@mui/system';

// Import Bootstrap
import {Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route} from "react-router-dom";
//import navbar
import Navbar from "./Components/Navbar";
//import sign in form
import Form from "./Components/Form";
//import home
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"
import CreateAccount from "./Pages/CreateAccout";
import Admin from "./Pages/Admin"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
                <Route exact path="/create-account" element={< CreateAccount/>}></Route>
                <Route exact path="/admin" element={< Admin/>}></Route>
                <Route exact path="/login" element={< Login/>}></Route>
                <Route exact path="/signup" element={< Signup/>}></Route>
            </Routes>
        </Router>
        <Box sx={{color: 'error.main'}}>
        </Box>
        </>
        
    );
}
 
export default App;
