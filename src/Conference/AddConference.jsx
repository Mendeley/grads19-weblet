import React from "react";
import CookieAddConferenceForm from "./AddConferenceForm";
import CookiesWebscrapePage from "../Webscrape/WebscrapePage";
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
        <CookiesWebscrapePage/>
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
