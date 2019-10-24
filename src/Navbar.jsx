import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  background: #322d38;
  width: 100vw;
  height: 4vh;
  `;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  
`;

export const StyledLink = styled(Link)`
  color: white;
  margin: 10px;
  float: left;
  `;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/add">Add Conference</StyledLink>
        </li>
      </StyledList>

    </StyledNavbar>

  );
};

export default Navbar;