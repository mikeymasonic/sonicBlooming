import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHandleOnAbout, useHandleVisualizerDisplay } from '../../hooks/DataProvider';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = (props) => {
  const [back, setBack] = useState(false);
  const handleOnAbout = useHandleOnAbout();
  const handleVisualizerDisplay = useHandleVisualizerDisplay();
  const pathname = props.location.pathname;

  useEffect(() => {
    if (pathname === '/') {
      handleOnAbout(false);
      setBack(false);
    } else if (pathname === '/about') {
      handleOnAbout(true);
      setBack(true);
      handleVisualizerDisplay(false);
    }
  }, [pathname]);

  return (
    <header className={styles.Header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img src='./images/rose-shape.png' />
        </Link>
      </div>

      <div className={styles.headerCenter}>
        <Link className={styles.navLink} to="/">
          <h1>SONIC BLOOMING</h1>
        </Link>
      </div>

      <div 
        className={styles.headerRight} 
        style={{ visibility: !back ? 'visible' : 'hidden' }}>
        <Link id='about' className={styles.navLink} to='/about'>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="rgba(40,4,78,1)"
            height="3em"
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" >
            </path>
          </svg>
        </Link>
      </div>

      <div className={styles.backContainer} >
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
