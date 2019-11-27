import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import { logoutUser } from "./api";
import { withCookies, useCookies } from "react-cookie";
import { cookieOptions, cookieName } from "./Constants/Cookies";

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
  const history = useHistory();
  const logout = async () => {
    try {
      await logoutUser(cookies.sessionToken.token);
      deleteSessionToken();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const deleteSessionToken = () => {
    removeCookie(cookieName, cookieOptions);
  };

  return (
    <StyledNavbar>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        {cookies.sessionToken ? (
          <>
            <StyledListItem>
              <StyledLink className="addConference" to="/add">
                Add Conference
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                className="profilePage"
                to={`/users/${cookies.sessionToken.userId}`}
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
      </StyledList>
    </StyledNavbar>
  );
};

export default withCookies(Navbar);
