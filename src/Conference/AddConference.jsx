import React from "react";
import Form from "../Form";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

const AddConference = sessionToken => {
  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
        <Form sessionToken={sessionToken} />
      </StyledCard>
    </StyledForm>
  );
};

export default AddConference;
