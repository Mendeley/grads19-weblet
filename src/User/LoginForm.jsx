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
  height: 15%;
  width: 10%;
  color: black;
  text-decoration: none;
  background-color: #1F73B2;
  color: white;
  font-weight: bold;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  top: 6%;
  right: 2%;

  @media only screen and (min-width: 600px) and (max-width:1100px){
    display: block;
    height: 13%;
    width: 20%;
    color: black;
    text-decoration: none;
    background-color: #1F73B2;
    color: white;
    font-weight: bold;
    line-height: 40px;
    border-radius: 11px;
    position: absolute;
    top: 3%;
    right: 4%;
  }

    @media only screen and (max-width:600px){
    display: block;
    height: 15%;
    width: 35%;
    color: black;
    text-decoration: none;
    background-color: #1F73B2;
    color: white;
    font-weight: bold;
    line-height: 40px;
    border-radius: 11px;
    position: absolute;
    top: 1%;
    right: 5%;
  }
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
    } catch (error) { }
  };

  const onSubmit = ev => {
    ev.preventDefault();
    submitForm();
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledLink to={`/users/register`}>Register</StyledLink>
        <br></br>
        <br></br>
        <StyledCardHeading>Login here:</StyledCardHeading>
        <form onSubmit={onSubmit}>
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <StyledSubmit type="submit" value="Submit" />
        </form>
      </StyledCard>
    </StyledForm>
  );
};

export default LoginForm;
