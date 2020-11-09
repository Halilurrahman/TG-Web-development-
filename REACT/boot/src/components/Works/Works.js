import React from 'react';
import './Works.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Button } from "react-bootstrap";

function Works() {
  return (
    <Jumbotron id="works" className="worksBackground">
    <Container>
        <h1>Assorted Works</h1>
      <p>
       Click on the button to below to see my advancements in HTML, CSS, Javascript, React etc..
      </p> 
      <p>
    <Button size="lg" variant="outline-light">Github Portfolio</Button>
  </p>
      </Container>
     
    </Jumbotron>
  );
}

export default Works;
