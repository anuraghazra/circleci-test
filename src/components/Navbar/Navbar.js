import React from 'react';
import logo from '../../images/logo.svg'

import NavWrapper from './Navbar.style';

function Navbar() {
  return (
    <NavWrapper>
      <div className="nav__content">
        <img className="logo" src={logo} alt="" />

        <ul>
          <li>home</li>
          <li>about me</li>
          <li>projects</li>
          <li>creative coding</li>
          <li>concepts</li>
          <li>contact</li>
        </ul>
      </div>
    </NavWrapper>
  );
}
export default Navbar;