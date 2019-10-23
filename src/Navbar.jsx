import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  background: #322d38;
  width: 100vw;
  height: 4vh;
  `;

export const StyledLink = styled(Link)`
  color: white;
  margin: 10px;
  float: left;
  `;

const Navbar = () => {
  return (
    <StyledNavbar>
      <a><StyledLink to="/">Home</StyledLink></a>
    </StyledNavbar>

  );
};

export default Navbar;