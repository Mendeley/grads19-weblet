import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
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

const LoginForm = ({ cookies, setCookie, removeCookie }) => {
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
    const newUser = {
      ...user
    };

    try {
      //console.log(cookies.sessionToken);
      const token = await loginUser(newUser);
      console.log(token);
      setCookie("sessionToken", token, { path: "/" });
      //console.log(cookies.sessionToken);
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
