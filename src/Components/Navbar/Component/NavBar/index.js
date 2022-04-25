import React from 'react';
import {Nav, NavIcon, NavLink, Bars} from './NavBarElement';

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'><bold>Pizza</bold></NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    
    </div>
  );
};

export default NavBar;