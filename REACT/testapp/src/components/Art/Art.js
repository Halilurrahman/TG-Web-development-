import React from "react";
import Carousel from "react-bootstrap/Carousel";
import calligraphy1 from "./images/calligraphy1.jpg";
import calligraphy2 from "./images/calligraphy2.jpg";
import calligraphy3 from "./images/calligraphy3.jpg";
import calligraphy4 from "./images/calligraphy4.jpg";
import calligraphy5 from "./images/calligraphy5.jpg";
import calligraphy6 from "./images/calligraphy6.jpg";
import calligraphy7 from "./images/calligraphy7.jpg";
import calligraphy8 from "./images/calligraphy8.jpg";
import calligraphy9 from "./images/calligraphy9.jpg";
import calligraphy10 from "./images/calligraphy10.jpg";
import calligraphy11 from "./images/calligraphy11.jpg";
import calligraphy12 from "./images/calligraphy12.jpg";
import lotr_quote from "./images/lotr_quote.jpg";
import newarabicrune from "./images/newarabicrune.png";
import practice from "./images/practice.jpg";
import witch_king from "./images/witch_king.jpg";
import wolf from "./images/wolf.jpg";

import "./Art.css";
import { Container, Row, Col } from "react-bootstrap";
// import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function Art() {
  return (
    <div>
      <button id="art" class="btn-menu">
        Art & Calligraphy
      </button>
      <div className="art-box">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block carousel carousel-img "
              src={calligraphy1}
              alt="First slide"
            />
            <h3>Experiment on the Kalima</h3>
            <p>A style I was experimenting with, almost reaching final form.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel carousel-img "
              src={calligraphy2}
              alt="Second slide"
            />
            <h3>Khabib Nurmagomedov(MMA fighter) </h3>
            <p>
              Written in a mixture of thuluth and freeform, and a little bit of
              blockletters.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img"
              src={calligraphy3}
              alt="Third slide"
            />
            <h3>Ramadan Mubarak</h3>
            <p>
              Happy holidays(Ramadan in this case) in a more vertical and blocky
              form.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy4}
              alt="4 slide"
            />
            <h3>First part of the Kalima final form</h3>
            <p>
              I finally found a pleasing coherent look, trying out different
              colors and deciding to add or leave out the grammatical notations.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy5}
              alt="5 slide"
            />
            <h3>Names on books in original style</h3>
            <p>
              A gift to the graduated girls of the Iqra foundation, it has the
              name of each girl on it and the name of the foundation.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy6}
              alt="5 slide"
            />
            <h3>Final form of the Kalima in my own style</h3>
            <p>
              The second part of the creed proved a lot more difficult to shape
              in a coherent style, but was pleased with the final result aside
              frome spacing issues.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy7}
              alt="5 slide"
            />
            <h3>Duran and Ayse</h3>
            <p>The names of my sister and her late husband.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy8}
              alt="5 slide"
            />
            <h3>Umar</h3>
            <p>Idea of a friend, the name Umar in the shape of a sword.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy9}
              alt="5 slide"
            />
            <h3>Moumna</h3>
            <p>
              A commission for a friend, his and his wives name, experimenting
              with loose arabic letters, more emphasis on overall form.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy10}
              alt="5 slide"
            />
            <h3>Othman</h3>
            <p>
              The husbands name is also made up of loose letters in an almost
              kanji like style.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy11}
              alt="5 slide"
            />
            <h3>My mothers name</h3>
            <p>
              Ink on black paper, a more blocky style with exaggerated elements,
              reminiscent of old arabic styles.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={calligraphy12}
              alt="5 slide"
            />
            <h3>
              All that (exists) upon it (i.e., the earth) is vanishing. And
              there (still) remains (forever) The Face of your Lord, The Owner
              of Majesty and Munificence.{" "}
            </h3>
            <p>Two verses from surah ArRahmaan, written for a friend.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={wolf}
              alt="5 slide"
            />
            <h3>Mount Erciyes in the silhouette of a wolf</h3>
            <p>
              A combination of my(sorta, kinda) ancestral home and some ancient
              Turkic mythology.{" "}
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={witch_king}
              alt="5 slide"
            />
            <h3>The Witch-King of Angmar</h3>
            <p>
              I love the Lord of the Rings, this is an interpretation of one of
              the main antagonists.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={newarabicrune}
              alt="5 slide"
            />
            <h3>Experimenting with quicker/simpler arabic font</h3>
            <p>
              I like to see works in progress, an idea of an almost rune-like
              arabic font.{" "}
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={practice}
              alt="5 slide"
            />
            <h3>Practice</h3>
            <p>
              A page of mixed items and ideas and styles, which has its own
              pleasing aesthetic.
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  carousel carousel-img "
              src={lotr_quote}
              alt="5 slide"
            />
            <h3>LotR quote from Faramir</h3>
            <p>
              A quote from Faramir, captain of Gondor, practicing latin font,
              suddenly hitting all the cliché problems for a lefty scribe.
            </p>
          </Carousel.Item>
        </Carousel>

        {/* <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={calligraphy1} rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src={calligraphy2} roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Row>
</Container> */}
      </div>
    </div>
  );
}
export default Art;
