import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: var(--gray-700);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Marvel App</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
