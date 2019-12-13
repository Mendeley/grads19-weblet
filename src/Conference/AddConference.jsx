import React from "react";
import CookieAddConferenceForm from "./AddConferenceForm";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";

const AddConference = () => {
  return (
    <StyledForm>
      <Card>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
        <CookieAddConferenceForm />
      </Card>
    </StyledForm>
  );
};

export default AddConference;
