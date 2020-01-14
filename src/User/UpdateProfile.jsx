import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../Input";
import {
  StyledForm,
  StyledAddForm,
  StyledCard,
  StyledCardHeading,
  StyledCancelSubmit,
  StyledSaveSubmit
} from "../StyledFormComponents";
import { updateUserById } from "../api";

const UpdateProfile = ({
  setUser,
  id,
  isLoading,
  error,
  sessionToken,
  user
}) => {
  const [updatedUser, setUpdatedUser] = useState({});
  const history = useHistory();
  const cancelUserUpate = () => {
    history.push(`/users/${id}`);

    toast.info("Profile details have not been changed");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const submitForm = async () => {
    if (Object.keys(updatedUser).length > 0) {
      try {
        await updateUserById(id, updatedUser, sessionToken.token);
        history.push(`/users/${id}`);
        setUser({ ...user, ...updatedUser });
      } catch (error) { }
    } else cancelUserUpate();
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Edit Profile</StyledCardHeading>

        <form
          onSubmit={ev => {
            ev.preventDefault();
            submitForm();
          }}
        >
          <StyledAddForm>
            <Input
              label="First Name: "
              type="text"
              name="firstName"
              value={updatedUser.firstName || user.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name: "
              type="text"
              name="lastName"
              value={updatedUser.lastName || user.lastName}
              onChange={handleChange}
              required
            />
            <Input
              label="Occupation: "
              type="text"
              name="occupation"
              value={updatedUser.occupation || user.occupation}
              onChange={handleChange}
              required
            />
          </StyledAddForm>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <StyledSaveSubmit type="submit" value="Save" />
          <StyledCancelSubmit type="button" value="Cancel" onClick={cancelUserUpate} />
        </form>
      </StyledCard>
    </StyledForm>
  );
};

export default UpdateProfile;
