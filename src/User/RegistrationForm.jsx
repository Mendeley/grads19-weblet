import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import { createNewUser } from "../api";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";

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
    <StyledForm>
      <Card>
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
            type="email"
            name="email"
            pattern="[a-zA-Z0-9\.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[\.A-Za-z]{1,10}"
            title="Enter a valid email address such as example@email.com."
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
            pattern="[a-zA-Z0-9]*"
            title="Must not contain any spaces or special characters."
            value={user.username}
            onChange={handleChange}
            required
            maxLength="100"
          />
          <Input
            label="Password: "
            type="password"
            name="password"
            pattern="((?=.*[a-z])(?=.*[0-9])(?=.*[!?\\#@^&£$*+;:~])(?=.*[A-Z]).{8,16})"
            title="Must contain at least one number, one uppercase and lowercase letter, one special character and have between 8 and 16 characters."
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

export default RegistrationForm;
