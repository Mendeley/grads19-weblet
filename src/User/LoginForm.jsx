import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import Input from "../Input";
import { loginUser } from "../api";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";

export const StyledLink = styled(Link)`
  color: #7a517d;
  padding: 10px;
`;

const LoginForm = ({ setSessionToken }) => {
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
      <Card>
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
      </Card>
    </StyledForm>
  );
};

export default LoginForm;
