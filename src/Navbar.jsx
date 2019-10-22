import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  background: #ccb7bb;
  width: 100%;
  height: 30px;
  `;

export const StyledLink = styled(Link)`
  color: black;
  `;

const Navbar = () => {
  return (
    <StyledNavbar>
      <a><StyledLink to="/">Home</StyledLink></a>
    </StyledNavbar>

  );
};

export default Navbar;