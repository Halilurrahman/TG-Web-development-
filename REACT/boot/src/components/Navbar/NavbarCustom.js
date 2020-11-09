import React from "react";
import "./NavbarCustom.css";
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import brainImgLogo from "../images/brain.jpeg";


function NavbarCustom() {
  return (
  
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"><img className="navbarImgLogo" src={brainImgLogo} /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#works">Works</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>

        </Nav>
        
      </Navbar>
   
  );
}

export default NavbarCustom;
