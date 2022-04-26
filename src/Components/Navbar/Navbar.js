import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
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
                  <NavLinks to ='/Home'>Home</NavLinks>
                </NavItem>

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
    </>
  )
}

export default Navbar