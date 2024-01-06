// ./src/components/Navbar.js

import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav_logo'>
        <img src='/static/Img/ieeeLogo.png' alt="" className='ieee__logo' />
      </div>

      <ul className='navbar__options'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>EVENTS</li>
        <li>TEAM</li>
        <li>MEMBERSHIP</li>
        <li>JOIN US</li>
      </ul>
    </nav>
  );
};

export default Navbar;
