import React, { Component } from "react";
import styles from "./Contact.module.css";

class Contact extends Component {
  constructor() {
    super();
  }

  clickContact() {
    return (document.getElementById("contact").innerHTML = "ET phone home?");
  }

  render() {
    return (
      <div className={styles.Contact}>
        <button class="btn-menu" onClick={this.clickContact} id="contact">
          Contact me!
        </button>
        Contact Component
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
