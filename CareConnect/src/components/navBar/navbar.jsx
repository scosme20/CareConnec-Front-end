// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
import { NavbarContainer, NavLinks, NavLinkItem, NavigationLink } from './navBarStyles';

function Navbar() {
  return (
    <NavbarContainer>
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
    </NavbarContainer>
  );
}

export default Navbar;



