import React from 'react';

import styles from './Portfolio.module.css';

const Portfolio = () => (
  <div className={styles.Portfolio}>
 <button id="portfolio" class="btn-menu">Portfolio</button> 
 <div className="about-box">
        <p className="about-text">
          Here is a link to my github hosted site where I place all my finished projects for the Techgrounds Academy.
          <br/>
          <a href="https://halilurrahman.github.io/">https://halilurrahman.github.io/</a>
        </p>
      </div>
  </div>
);

export default Portfolio;
