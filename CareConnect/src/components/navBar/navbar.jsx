// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavbarContainer,
  NavLinks,
  NavLinkItem,
  NavigationLink,
  HamburgerIcon,
  MobileMenu,
  DesktopMenu,
} from './navBarStyles';
import GlobalStyles from '../../styles/Global.styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <GlobalStyles />
      <HamburgerIcon onClick={toggleMenu}>
        &#9776;
      </HamburgerIcon>
      <DesktopMenu>
        <NavLinks>
          <NavLinkItem>
            <NavigationLink to="/overview" activeclassname="active">Overview</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/families" activeclassname="active">Families</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/donation" activeclassname="active">Donations</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/volunteer" activeclassname="active">Volunteer</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/hostel" activeclassname="active">Hostel</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/homeless" activeclassname="active">Homeless</NavigationLink>
          </NavLinkItem>
        </NavLinks>
      </DesktopMenu>
      <MobileMenu isOpen={isOpen}>
        <NavLinks>
          <NavLinkItem>
            <NavigationLink to="/overview" activeclassname="active">Overview</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/families" activeclassname="active">Families</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/donation" activeclassname="active">Donations</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/volunteer" activeclassname="active">Volunteer</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/hostel" activeclassname="active">Hostel</NavigationLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavigationLink to="/homeless" activeclassname="active">Homeless</NavigationLink>
          </NavLinkItem>
        </NavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
}

export default Navbar;
