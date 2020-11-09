import React from "react";
import "./Herobanner.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
 Container
} from "react-bootstrap";
function Herobanner() {
  return (
    <Jumbotron className="jumbotron" fluid>
      <Container>
        <h1>The developer of tomorrow today.</h1>
        <p>
          Halil Bagci
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Herobanner;
