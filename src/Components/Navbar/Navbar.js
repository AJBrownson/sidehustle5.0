import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
    <IconContext.Provider value={{ color: '#000067' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/' onClick={closeMobileMenu}>
                  <NavIcon />
                    CHOPS
                </NavLogo>
                <HamburgerIcon onClick = {handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </HamburgerIcon>
                <NavMenu onClick='handleClick' click={click}>

                <NavItem>
                  <NavLinks to ='/Products'>Products</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/About'>About</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/Contact'>Contact</NavLinks>
                </NavItem>
               
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>  
    </>
  )
}

export default Navbar