import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.css';

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
      <Link className={styles.navLink} to="/">
        <h1>sonic bloom</h1>
      </Link>
      <Link className={styles.navLink} to="/about">
            _ABOUT
      </Link>
      <Link className={styles.navLink} to="/upload">
            _UPLOAD
      </Link>
      {back && <h4><Link className={styles.navLink} to="/">
            back
      </Link></h4>}       
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
