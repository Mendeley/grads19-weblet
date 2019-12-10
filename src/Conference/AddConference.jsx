import React from "react";
<<<<<<< HEAD
import CookieAddConferenceForm from "./AddConferenceForm";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";
=======
import Form from "../Form";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";
>>>>>>> GP19-15: WIP CSS changes, implementing reusable card

const AddConference = () => {
  return (
    <StyledForm>
      <Card>
        <StyledCardHeading>Add a new conference:</StyledCardHeading>
<<<<<<< HEAD
        <CookieAddConferenceForm />
      </StyledCard>
=======
        <Form />
      </Card>
>>>>>>> GP19-15: WIP CSS changes, implementing reusable card
    </StyledForm>
  );
};

export default AddConference;
