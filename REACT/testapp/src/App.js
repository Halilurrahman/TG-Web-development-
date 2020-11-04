// import logo from './logo.svg';
import "./App.css";
// import NavbarTest from "./components/NavbarTest.js";
import profilePic from "./images/profile2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Art from "./components/Art/Art"
import Contact from "./components/Contact/Contact"
// import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavbarTest /> */}
      <h1 className="name-top" id="home">Halilurrahman Bagci</h1>
      <div className="HeroBanner">
        <div className="btn-menu-container">
          <button class="btn-menu">Home</button>
          <br />
          <a href="#about"><button class="btn-menu">About me..</button></a>
          <br />
          <a href="#portfolio"><button class="btn-menu">Portfolio</button></a>
          <br />
          <a href="#art"><button class="btn-menu">Art & Calligraphy</button></a>
          <br />
          <a href="#contact"><button class="btn-menu">Contact me!</button></a>
          <br />
          {/* <button class="button">I'm A Button!</button> */}
        </div>
        <img className="profile-pic" src={profilePic} alt="me" />
      </div>
      
      <hr />
      <About />
      <Portfolio />
      <Art />
      <Contact />
    </div>
  );
}

export default App;
