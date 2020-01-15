import React from "react";
import styled from "styled-components";
import { withCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import { cookieOptions, cookieName } from "./Constants/Cookies";
import Button from "./Button";
import { logoutUser } from "./api";

export const StyledNavbar = styled.nav`
  background: #322d38;
  width: auto;
  height: 100%;
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

export const Navbar = ({
  conferences,
  setConferences,
  cookies,
  allCookies = {}
}) => {
  const history = useHistory();
  const sessionToken = allCookies.sessionToken;
  const logout = async () => {
    try {
      await logoutUser(sessionToken.token);
      history.push("/");
      deleteSessionToken();
    } catch (error) { }
  };

  const deleteSessionToken = () => {
    cookies.remove(cookieName, cookieOptions);
  };

  return (
    <StyledNavbar>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        {sessionToken ? (
          <>
            <StyledListItem>
              <StyledLink className="addConference" to="/add">
                Add Conference
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                className="profilePage"
                to={`/users/${sessionToken.userId}`}
              >
                Profile
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <Button className="logout" navLink onClick={logout}>
                Logout
              </Button>
            </StyledListItem>
          </>
        ) : (
            <>
              <StyledListItem>
                <StyledLink className="register" to="/users/register">
                  Register
              </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink className="login" to="/users/login">
                  Login
              </StyledLink>
              </StyledListItem>
            </>
          )}
        <StyledListItem>
          <StyledLink className="search" to="/search">
            Search
              </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default withCookies(Navbar);
