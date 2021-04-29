import React, { useEffect } from 'react';
import { useHandleOnAbout } from '../../hooks/DataProvider';
import { aboutPage } from '../../utils/data';
import PropTypes from 'prop-types';
import styles from './About.css';

const About = (props) => {
  const handleOnAbout = useHandleOnAbout();
  const pathname = props.location.pathname;

  useEffect(() => {
    if (pathname === '/about') {
      handleOnAbout(true);
    }
  }, [pathname]);

  return (
    <section className={styles.aboutContainer}>
      <section className={styles.About}>
        <h1>About</h1>
        <p>{aboutPage.description}</p>
      </section>
    </section>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
