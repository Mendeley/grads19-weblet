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
  StyledCard
} from "../StyledFormComponents";

export const StyledLink = styled(Link)`
  color: #7a517d;
  padding: 10px;
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
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = ev => {
    ev.preventDefault();
    submitForm();
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Login here:</StyledCardHeading>
        <StyledLink to={`/users/register`}>Register New User</StyledLink>
        <form onSubmit={onSubmit}>
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
          <Input type="submit" value="Submit" />
        </form>
      </StyledCard>
    </StyledForm>
  );
};

export default LoginForm;
