// import logo from './logo.svg';
import "./App.css";
import NavbarTest from "./components/NavbarTest.js";
import profilePic from './images/profile2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarTest />
      
       <div className="HeroBanner">
      {/* <HeaderPortfolio /> */}
     <div>
<button class="btn-menu">Home</button>
<br />
<button class="btn-menu">About me..</button>
<br />
<button class="btn-menu">Portfolio</button>
<br />
<button class="btn-menu">Art & Calligraphy</button>
<br />
<button class="btn-menu">Contact me!</button>
     </div>
      <img className="profile-pic" src={profilePic} alt="me" />
      </div> 
    </div>
  );
}

export default App;
