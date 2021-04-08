import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
// import styles from 'react-h5-audio-Header/lib/styles.css';

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <Link className={styles.navLink} to="/">
          <h1>sonic bloom</h1>
        </Link>
        <Link className={styles.navLink} to="/about">
            _ABOUT
        </Link>
        <Link className={styles.navLink} to="/upload">
            _UPLOAD
        </Link>

      </header>
    </>
  );
};

export default Header;
