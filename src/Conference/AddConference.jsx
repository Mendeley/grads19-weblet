import React from "react";
import CookieAddConferenceForm from "./AddConferenceForm";
import WebscrapePage from "../Webscrape/WebscrapePage";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

const AddConference = () => {
  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
        <CookieAddConferenceForm />
      </StyledCard>
      <StyledCard>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
        <WebscrapePage />
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
