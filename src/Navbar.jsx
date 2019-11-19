import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import { logoutUser } from "./api";

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

const Navbar = ({ token, deleteToken }) => {
  const history = useHistory();
  const logout = async () => {
    try {
      await logoutUser(token);
      deleteToken();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeLoginStatus = () => {
    if (token) {
      return (
        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      );
    } else {
      return <StyledLink to="/users/login">Login</StyledLink>;
    }
  };

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
        <StyledListItem>{changeLoginStatus()}</StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
