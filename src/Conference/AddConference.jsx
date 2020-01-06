import React from "react";
import CookieAddConferenceForm from "./AddConferenceForm";
import WebscrapePage from "../Webscrape/WebscrapePage";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard,
  StyledCardText
} from "../StyledFormComponents";

const AddConference = () => {
  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Add a new conference</StyledCardHeading>
        <WebscrapePage />
        <StyledCardText>Or:</StyledCardText>
        <CookieAddConferenceForm />
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
