import React from "react";
import { Nav, NavbarContainer, MobileMenu, NavMenu, NavLogo, NavItem, NavLinks, UserArea } from './Navbar.elements';
import Logo from '../../Assets/images/logo.svg'
import Cart from '../../Assets/Cart/Cart'
import Avatar from '../../Assets/Avatar/Avatar'
import Menu from '../../Assets/images/icon-menu.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
        
        <NavMenu>
        <NavLogo to='/'>
          <img src={Logo} alt='Company logo' />
          </NavLogo>
        <MobileMenu>
          <img src={Menu} alt='' />
        </MobileMenu>

          <NavItem>
            <NavLinks>Collections</NavLinks>
          </NavItem>

          <NavItem>
          <NavLinks>Men</NavLinks>
          </NavItem>
            
          <NavItem>
          <NavLinks>Women</NavLinks>
          </NavItem>

          <NavItem>
          <NavLinks>About</NavLinks>
          </NavItem>

          <NavItem>
          <NavLinks>Contact</NavLinks>
          </NavItem>
        </NavMenu>

        <UserArea>
        <Cart />
        <Avatar />
        </UserArea>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar























// const Navbar = () => {

//   const [click, setClick] = useState(false);
//   const closeMobileMenu = () => setClick(false);
//   const handleClick = () => setClick(!click);


//   return (
//     <>
//         <Nav>
//             <NavbarContainer>
//                 <NavLogo to ='/' onClick={closeMobileMenu}>
//                   {/* <NavIcon /> */}
//                     ANNI
//                 </NavLogo>
//                 <HamburgerIcon onClick = {handleClick}>
//                   {click ? <FaTimes /> : <FaBars />}
//                 </HamburgerIcon>
//                 <NavMenu onClick='handleClick' click={click}>
                
//                 <NavItem>
//                   <NavLinks to ='/Articles'>Articles</NavLinks>
//                 </NavItem>
                
//                 <NavItem>
//                   <NavLinks to ='/Projects'>Projects</NavLinks>
//                 </NavItem>
                
//                 <NavItem>
//                   <NavLinks to ='/Workspace'>Workspace</NavLinks>
//                 </NavItem>

//                 <NavItem>
//                   <NavLinks to ='/About'>About</NavLinks>
//                 </NavItem>

//                 <NavItem>
//                   <NavLinks to ='/'>Contact</NavLinks>
//                 </NavItem>
               
//                 </NavMenu>
//             </NavbarContainer>
//         </Nav> 
//     </>
//   )
// }

// export default Navbar