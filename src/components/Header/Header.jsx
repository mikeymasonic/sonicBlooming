import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.css';
import Playlist from './../Playlist/Playlist';
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
          <h1>sonic blooming</h1>
        </Link>
      </div>
      <Player />
      <Playlist />
      <div className={styles.headerRight}>
        <a id='about' className='nav-link' href='/about'>About</a>
      </div>
      <div className={styles.backContainer}>
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
