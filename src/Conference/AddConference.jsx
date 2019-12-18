import React from "react";
import AddConferenceForm from "./AddConferenceForm";
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
        <AddConferenceForm />
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
