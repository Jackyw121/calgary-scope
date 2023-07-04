import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Assets/logo.png';
import './NavbarComp.css';

const NavbarComp = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" fluid/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                style={{color: '#e7492e'}}
                >Home</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: '#e7492e'}}>Services</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light" style={{backgroundColor: '#e7492e'}}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default NavbarComp;