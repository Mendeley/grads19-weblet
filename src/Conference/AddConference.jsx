import React from "react";
import Form from "./AddConferenceForm";
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
        <Form />
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
