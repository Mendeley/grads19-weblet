import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import styled from "styled-components";
import Input from "../Input";
import { updateConferenceById } from "../api";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard,
  StyledSaveSubmit,
  StyledAddForm,
} from "../StyledFormComponents";

const UpdateForm = ({
  updatedConference,
  id,
  setConference,
  setUpdatedConference,
  isLoading,
  error
}) => {
  const history = useHistory();
  const [cookies] = useCookies([cookieName]);
  const token = cookies.sessionToken.token;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdatedConference({ ...updatedConference, [name]: value });
  };

  const submitForm = async () => {
    const newConference = {
      ...updatedConference,
      dateTime: `${updatedConference.dateTime}:00Z`
    };
    try {
      await updateConferenceById(id, newConference, token);
      setConference(newConference);
      history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const StyledPadding = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width:1100px){
  padding-bottom: 10px;
  }
 `
  return (
    <StyledForm>
      <StyledCard>

        <StyledCardHeading>Edit a conference</StyledCardHeading>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            submitForm();
          }}
        >
          <StyledAddForm>
            <Input
              label="Conference Name: "
              type="text"
              name="name"
              value={updatedConference.name}
              onChange={handleChange}
              required
              maxLength="80"
            />
            <Input
              label="Date and Time: "
              type="datetime-local"
              name="dateTime"
              value={updatedConference.dateTime}
              onChange={handleChange}
              required
            />
            <Input
              label="City: "
              type="text"
              name="city"
              value={updatedConference.city}
              onChange={handleChange}
              required
              maxLength="50"
            />
            <Input
              label="Description: "
              type="text"
              name="description"
              value={updatedConference.description}
              onChange={handleChange}
              required
              maxLength="1000"
            />
            <Input
              label="Topic: "
              type="text"
              name="topic"
              value={updatedConference.topic}
              onChange={handleChange}
              required
              maxLength="20"
            />
          </StyledAddForm>
          <StyledPadding></StyledPadding>
          <StyledSaveSubmit type="submit" value="Save" />
        </form>

      </StyledCard>
    </StyledForm>
  );
};
export default UpdateForm;
