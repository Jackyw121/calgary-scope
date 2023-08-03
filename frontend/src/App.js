// Import React
import React from "react";
import { Box } from "@mui/material";
import { palette } from "@mui/system";

// Import Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import navbar
import Navbar from "./Components/Navbar";
//import home
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import RabboniFormProfile from "./Pages/RaboboniFormProfile";
import { useAuthContext } from "./Hooks/useAuthContext";

// App Component
const App = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route exact path="/about-us" element={<AboutUs />}></Route>
          <Route
            exact
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/" />}
          ></Route>
          <Route
            exact
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          ></Route>
          <Route
            exact
            path="/rabboniform"
            element={<RabboniFormProfile />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Box sx={{ color: "error.main" }}></Box>
    </div>
  );
};

export default App;
