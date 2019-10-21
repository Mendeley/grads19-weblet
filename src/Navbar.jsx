import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  text-align: center;
  background: papayawhip;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">Home</NavLink>
    </StyledNavbar>

  );
};

export default Navbar;