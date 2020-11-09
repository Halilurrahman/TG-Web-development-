import React from "react";
import "./About.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Button } from "react-bootstrap";
function About() {
  return (
    <Jumbotron id="about" className="aboutBackground">
    <Container>
        <h1>Hello, world!</h1>
      <p>
        Halilurrahman is a dynamic new developer in the process of becoming a
        full stack developer at the Techgrounds Academy in Amsterdam, born in
        the same city in 1986 he was effected by the Chernobyl reactor meltdown
        which has lead to his uncanny insight and problem solving skills, this
        has helped him develop at an impressive rate( according to his coaches
        at the academy). <br />
        He enjoys the challenges that coding presents and the rewarding feeling
        when solving Javascript problems or getting a particular design idea to
        come across with HTML and CSS. With a broad spectrum of interests, from
        movies to martial arts to a bit of calligraphy in his spare time,
        nicknamed the King of Kanban, Scrum Master Halil and rockstar team
        player by his peers, he is sure to be an addition to any team!
      </p> 
      </Container>
     
    </Jumbotron>
  );
}

export default About;
