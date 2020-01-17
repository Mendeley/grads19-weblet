import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { cookieOptions, cookieName } from "../Constants/Cookies";
import Input from "../Input";
import { loginUser } from "../api";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard,
  StyledSubmit,
  StyledAddForm
} from "../StyledFormComponents";

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: #1f73b2;
  color: white;
  border-radius: 11px;
  padding: 8px 24px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin: 6px 4px;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 60px;

  @media only screen and (min-width: 600px) and (max-width: 1100px) {
    display: block;
    text-decoration: none;
    background-color: #1f73b2;
    color: white;
    border-radius: 11px;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    margin: auto;
    display: flex;
    justify-content: center;
    width: 45px;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    text-decoration: none;
    background-color: #1f73b2;
    color: white;
    border-radius: 11px;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin: 6px 4px;
    margin: auto;
    display: flex;
    justify-content: center;
    width: 35px;
  }
`;

const StyledPadding = styled.div`
   padding-bottom: 100px;
  @media only screen and (max-width: 1100px) {
    padding-top: 10px;
    padding-bottom: 150px;
  }
`;

const StyledSpace = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LoginForm = () => {
  const [, setCookie] = useCookies([cookieName]);
  const setSessionToken = sessionTokenData => {
    setCookie(cookieName, sessionTokenData, cookieOptions);
  };

  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async () => {
    try {
      const sessionTokenData = await loginUser(user);
      setSessionToken(sessionTokenData);
      history.push("/");
    } catch (error) {}
  };

  const onSubmit = ev => {
    ev.preventDefault();
    submitForm();
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Login</StyledCardHeading>
        <form onSubmit={onSubmit}>
          <StyledPadding>
            <StyledAddForm>
              <Input
                label="Username: "
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
                maxLength="100"
              />
              <Input
                label="Password: "
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                maxLength="16"
              />
            </StyledAddForm>
          </StyledPadding>
          <StyledSpace>
            <StyledSubmit type="submit" value="Submit" />
          </StyledSpace>
          <StyledLink to={`/users/register`}>Register</StyledLink>
        </form>
      </StyledCard>
    </StyledForm>
  );
};

export default LoginForm;
