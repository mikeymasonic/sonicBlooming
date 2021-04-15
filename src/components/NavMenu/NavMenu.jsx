import React, { useState } from 'react';
import Menu from 'react-burger-menu/lib/menus/stack';
import styles from './styles/NavMenu.css';
import { menuStyle } from './styles/menuStyles';

export const NavMenu = () => {
//   const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <Menu 
        className={styles.NavMenu}
        styles={menuStyle}
        right={true}>
        <a id='home' className='nav-link' href='/'>Home</a>
        <a id='about' className='nav-link' href='/about'>About</a>
        <a id='upload' className='nav-link' href='/upload'>Upload</a>
      </Menu>
    </>
  );
};
