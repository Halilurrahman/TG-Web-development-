import React from 'react';
import './Contact.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Button } from "react-bootstrap";
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { ImWhatsapp } from 'react-icons/im';

function Contact() {
  return (
    <Jumbotron id="contact" className="contactBackground">
    <Container>
    <h1>Contact</h1>
    <p >
          I'm glad to see you've reached this part of the site! 
        There are several ways to contact me. <br /> 
        Via LinkedIn: <a href="https://www.linkedin.com/in/halil-bagci-36a0901b0/"><GrLinkedin /></a>
<br />
         Via email: <a href = "mailto: halilbagci75@hotmail.com"><HiOutlineMail /></a>
         <br />
         Via Whatsapp: <a href="https://wa.me/0031640779949" ><ImWhatsapp /></a>
        </p>
      </Container>
     
    </Jumbotron>
  );
}

export default Contact;
