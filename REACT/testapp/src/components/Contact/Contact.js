import React, { Component } from "react";
import  "./Contact.css";
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { ImWhatsapp } from 'react-icons/im';


class Contact extends Component {
  constructor() {
    super();
  }

  clickContact() {
    return (document.getElementById("contact").innerHTML = "ET phone home?");
  }

  render() {
    return (
      <div className={Contact}>
        <button class="btn-menu" onClick={this.clickContact} id="contact">
          Contact me!
        </button>
        <div className="contact-box">
        <p className="about-text">
          I'm glad to see you've reached this part of the site! 
        There are several ways to contact me. <br /> 
        Via LinkedIn: <a href="https://www.linkedin.com/in/halil-bagci-36a0901b0/"><GrLinkedin /></a>
<br />
         Via email: <a href = "mailto: halilbagci75@hotmail.com"><HiOutlineMail /></a>
         <br />
         Via Whatsapp: <a href="https://wa.me/0031640779949" ><ImWhatsapp /></a>
        </p>
      </div>
      </div>
    );
  }
}
{
  /* <script src="three.r119.min.js"></script>
<script src="vanta.net.min.js"></script>
<script>
VANTA.NET({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xf96394,
  backgroundColor: 0x2a0081,
  points: 14.00,
  maxDistance: 33.00,
  spacing: 1
2.00
})
</script> */
}

export default Contact;
