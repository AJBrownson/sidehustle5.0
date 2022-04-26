import React from 'react';
import { NavIcon, NavLogo } from './Footer.elements';
import { Foooter, FooterContainer, FooterMenu, FooterHeader, FooterItem, FooterLink, FooterBottom } from './Footer.elements';


const Footer = () => {
  return (
    <>
      <Foooter>
          <FooterContainer>
              <NavLogo to='/'>
                  <NavIcon />
                  CHOPS
              </NavLogo>

              <FooterMenu>
                <FooterHeader> Customer Service </FooterHeader>
                <FooterItem>
                    <FooterLink to='/contact'>Contact Us</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/reviews'>Customer Reviews</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/faqs'>FAQs</FooterLink>
                </FooterItem>
                </FooterMenu>

                <FooterMenu>
                <FooterHeader> Information </FooterHeader>
                <FooterItem>
                    <FooterLink to='/about'>About Us</FooterLink>
                </FooterItem>
                </FooterMenu>
                
          </FooterContainer>
          <FooterBottom>
                    &copy; CHOPS. All Rights Reserved.
                </FooterBottom>
      </Foooter>
    </>
  )
}

export default Footer