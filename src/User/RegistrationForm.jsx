import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import { createNewUser } from "../api";

const StyledUserForm = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 65%;
  height: 370px;
  transition: 0.3s;
  vertical-align: middle;
  margin: 0 auto;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const RegistrationForm = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
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
      await createNewUser(newUser);
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
    <StyledUserForm>
      <StyledCard>
        <StyledCardHeading>add a new user:</StyledCardHeading>
        <form onSubmit={onSubmit}>
          <Input
            label="First Name: "
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
            maxLength="100"
          />
          <Input
            label="Surname: "
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
            maxLength="100"
          />
          <Input
            label="Email Address: "
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            maxLength="100"
          />
          <Input
            label="Occupation: "
            type="text"
            name="occupation"
            value={user.occupation}
            onChange={handleChange}
            required
            maxLength="100"
          />
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
          <Input type="submit" value="submit" />
        </form>
      </StyledCard>
    </StyledUserForm>
  );
};

export default RegistrationForm;
