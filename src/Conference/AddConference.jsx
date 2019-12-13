import React from "react";
import CookieAddConferenceForm from "./AddConferenceForm";
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
    </StyledForm>
  );
};

export default AddConference;
