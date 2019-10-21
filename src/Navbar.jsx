import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  text-align: center;
  background: papayawhip;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
    </StyledNavbar>

  );
};

export default Navbar;