import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.Contact}>
    <button class="btn-menu" onClick="clickContact()" id="contact">Contact me!</button>
    Contact Component
  </div>
);

function clickContact(){
return document.getElementById("contact").innerHTML= "ET phone home?";
}
export default Contact;
