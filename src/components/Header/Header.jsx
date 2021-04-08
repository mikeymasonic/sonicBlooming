import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
// import styles from 'react-h5-audio-Header/lib/styles.css';

const Header = () => {
  return (
    <>
      <section className={styles}>
        <Link className={styles.navLink} to="/">
          <h1>sonic bloom</h1>
        </Link>
        
        <Link className={styles.navLink} to="/about">
            _ABOUT
        </Link>

      </section>
    </>
  );
};

export default Header;
