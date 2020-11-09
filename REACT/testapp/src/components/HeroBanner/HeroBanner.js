import React from "react";
import "./HeroBanner.css";
import profilePic from "../../images/profile2.png";


function HeroBanner() {
    return (
      <div className="App">
        {/* <NavbarTest /> */}
        <h1 className="name-top" id="home">Halilurrahman Bagci</h1>
        <div className="HeroBanner">
          <div className="btn-menu-container">
            <button className="btn-menu">Home</button>
            <br />
            <a href="#about"><button className="btn-menu">About me..</button></a>
            <br />
            <a href="#portfolio"><button className="btn-menu">Portfolio</button></a>
            <br />
            <a href="#art"><button className="btn-menu">Art & Calligraphy</button></a>
            <br />
            <a href="#contact"><button className="btn-menu">Contact me!</button></a>
            <br />
           
          </div>
          <img className="profile-pic" src={profilePic} alt="me" />
        </div>
        
    
      </div>
    );
  }
  
  export default HeroBanner;