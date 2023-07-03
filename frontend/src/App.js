// Import React
import React from "react";
import { Box } from "@mui/material";
import { palette } from '@mui/system';

// Import Bootstrap
import {Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter, Routes,
	Route, Navigate} from "react-router-dom";
//import navbar
import Navbar from "./Components/Navbar";
//import home
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useAuthContext } from "./Hooks/useAuthContext";


// App Component
const App = () => {
const {user} = useAuthContext()
    return (
        <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route 
                path="/" 
                element={user ? < HomePage /> : <Navigate to ="/login"/>}>
                </Route>
                <Route 
                path="/about-us" 
                element={< AboutUs />}>
                </Route>
                <Route 
                path="/services" 
                element={< Services />}>
                </Route>
                <Route 
                path="/admin" 
                element={user ? <Admin/> : <Navigate to ="/"/>}>
                </Route>
                <Route 
                path="/login"
                element={!user ? < Login/> : <Navigate to ="/"/>}>
                </Route>
                <Route 
                path="/signup" 
                element={!user ? < Signup/> : <Navigate to ="/"/>}>
                </Route>
            </Routes>
        </BrowserRouter>
        <Box sx={{color: 'error.main'}}>
        </Box>
        </div>
        
    );
}
 
export default App;
