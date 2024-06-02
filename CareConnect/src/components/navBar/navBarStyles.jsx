// navBarStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavbarContainer = styled.nav`
  background-color: #F5CB5C;
  padding: 10px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// Estilos para o ícone do hambúrguer
export const HamburgerIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estilos para o menu desktop
export const DesktopMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// Estilos para o menu móvel
export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #F5CB5C;
    z-index: 1;
  }
`;


export const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const NavLinkItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: #333533;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;
