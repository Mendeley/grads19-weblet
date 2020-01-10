import React from "react";
import styled from "styled-components";
import { withCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import { cookieOptions, cookieName } from "./Constants/Cookies";
import Button from "./Button";
import { logoutUser } from "./api";
import ResizeImage from 'react-resize-image';
import Logo from './ConFoundLogo.png';

export const StyledNavbar = styled.nav`
  background: #1F73B2;
  width: 100%;
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
  background: #1F73B2;
  font-size: 180%;
`;

export const StyledButton = styled(Button)`
  color: white;
  background: #1F73B2;
  border: none;
  font-size: 180%;

`;

export const Navbar = ({ cookies, allCookies = {} }) => {
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
              <StyledLink
                className="profilePage"
                to={`/users/${sessionToken.userId}`}
              >
                Profile
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink className="addConference" to="/add">
                Add Conference
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledButton className="logout" navLink onClick={logout}>
                Logout
              </StyledButton>
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
        <ResizeImage
          src={Logo}
          alt="ConFound Logo"
          options={{ width: 100, height: 10 }}
        />
      </StyledList>
    </StyledNavbar>
  );
};

export default withCookies(Navbar);
