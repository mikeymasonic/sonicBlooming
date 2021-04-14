import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.css';
import Player from '../Player/Player';

const Header = (props) => {
  const [back, setBack] = useState(false);
  const pathname = props.location.pathname;

  useEffect(() => {
    if (pathname != '/') {
      setBack(true);
    } else {
      setBack(false);
    }
  });

  return (
    <header className={styles.Header}>
      <div className={styles.headerLeft}>
        <Link className={styles.navLink} to="/">
          <h1>sonic bloom</h1>
        </Link>
      </div>
      <Player />
      <div className={styles.nav}>
        <Link className={styles.navLink} to="/about">
            _ABOUT
        </Link>
        <Link className={styles.navLink} to="/upload">
            _UPLOAD
        </Link>
        {back && <h4><Link className={styles.navLink} to="/">
            back
        </Link></h4>}  
      </div>     
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
