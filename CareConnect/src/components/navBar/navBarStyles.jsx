import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Estilos para a barra de navegação
export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

// Estilos para os links de navegação
export const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

// Estilos para cada link de navegação
export const NavLinkItem = styled.li`
  margin-right: 20px;
`;

export const NavigationLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;
