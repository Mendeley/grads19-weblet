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
      <div >
        <NavLink to="/">Home</NavLink>
      </div>
    </StyledNavbar>

  );
};

export default Navbar;