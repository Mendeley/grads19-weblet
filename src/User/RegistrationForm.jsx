import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import { createNewUser, getUserList } from "../api";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

const RegistrationForm = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    managerId: "",
    username: "",
    password: ""
  });
  const [managers, setManagers] = useState([]);

  const fetchData = async () => {
    try {
      const userList = await getUserList();
      setManagers(userList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <label>Manager: </label>
          <select onChange={handleChange} name="managerId" defaultValue="">
            <option value="">---- select ----</option>
            {managers.map(manager => (
              <option key={manager.id} value={manager.id}>
                {manager.firstName} {manager.lastName}
              </option>
            ))}
          </select>
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
      </StyledCard>
    </StyledForm>
  );
};

export default RegistrationForm;
