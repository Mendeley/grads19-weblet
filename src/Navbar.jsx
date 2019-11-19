import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  background: #322d38;
  width: auto;
  height: 4vh;
  text-align: left;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  display: inline-block;
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  color: white;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/add">Add Conference</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/users/register">Register</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/users/login">Login</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
