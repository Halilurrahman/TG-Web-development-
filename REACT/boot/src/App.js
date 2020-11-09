import logo from './logo.svg';
import './App.css';
import NavbarCustom from './components/Navbar/NavbarCustom';
import Herobanner from './components/Herobanner/Herobanner';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <NavbarCustom />
      <Herobanner />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
