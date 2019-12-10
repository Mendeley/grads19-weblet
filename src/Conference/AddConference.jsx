import React from "react";
import Form from "../Form";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";

const AddConference = () => {
  return (
    <StyledForm>
      <Card>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
        <Form />
      </Card>
    </StyledForm>
  );
};

export default AddConference;
