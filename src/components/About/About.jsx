import React from 'react';
import { aboutPage } from '../../utils/data';
import styles from './About.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <section className={styles.About}>
        <h1>About</h1>
        <p>{aboutPage.description}</p>
      </section>
    </section>
  );
};

export default About;
