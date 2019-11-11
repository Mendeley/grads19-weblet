import React from "react";
import Form from "../Form";
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
