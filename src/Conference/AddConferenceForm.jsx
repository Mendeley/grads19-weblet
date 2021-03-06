import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
import Input from "../Input";
import { createNewConference } from "../api";
import WebscrapePage from "../Webscrape/WebscrapePage";
import { StyledCardText, StyledSubmit, StyledAddForm } from "../StyledFormComponents";
import styled from "styled-components";

export const AddConferenceForm = ({ allCookies = {} }) => {
  let history = useHistory();
  const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
  const [conference, setConference] = useState({
    name: "",
    dateTime: "",
    city: "",
    description: "",
    topic: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setConference({ ...conference, [name]: value });
  };

  const submitForm = async () => {
    const newConference = {
      ...conference,
      dateTime: conference.dateTime + ":00Z"
    };
    try {
      await createNewConference(newConference, token);
      history.push("/");
    } catch (error) { }
  };

  const StyledPadding = styled.div`
    padding-bottom: 40px;
  @media only screen and (max-width:1100px){
  padding-bottom: 50px;
  }
 `

  return (
    <>
      <WebscrapePage setConference={setConference} />
      <StyledCardText>Or:</StyledCardText>
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
            value={conference.name}
            onChange={handleChange}
            required
            maxLength="80"
          />
          <Input
            label="Date and Time: "
            type="datetime-local"
            name="dateTime"
            value={conference.dateTime}
            onChange={handleChange}
            required
          />
          <Input
            label="City: "
            type="text"
            name="city"
            value={conference.city}
            onChange={handleChange}
            required
            maxLength="50"
          />
          <Input
            label="Description: "
            type="text"
            name="description"
            value={conference.description}
            onChange={handleChange}
            required
            maxLength="1000"
          />
          <Input
            label="Topic: "
            type="text"
            name="topic"
            value={conference.topic}
            onChange={handleChange}
            required
            maxLength="20"
          />
        </StyledAddForm>
        <StyledPadding></StyledPadding>
        <StyledSubmit type="submit" value="Submit" />
      </form>
    </>
  );
};
export default withCookies(AddConferenceForm);
