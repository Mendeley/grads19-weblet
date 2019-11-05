import React from "react";
import Input from "./Input";
import styled from "styled-components";

const StyledConferenceForm = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 65%;
  height: 370px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 0 auto;
`;

const UpdateConference = () => {
  return (
    <StyledConferenceForm>
    <StyledCard>
      <StyledCardHeading>Edit a conference:</StyledCardHeading>
      <form> <Input
      label="Conference Name: "
      type="text"
      name="name"
      required
      maxLength="80"
    />
    <br />
    <Input
      label="Date and Time: "
      type="datetime-local"
      name="dateTime"
      required
    />
    <br />
    <Input
      label="City: "
      type="text"
      name="city"
      required
      maxLength="50"
    />
    <br />
    <Input
      label="Description: "
      type="text"
      name="description"
      required
      maxLength="1000"
    />
    <br />
    <Input
      label="Topic: "
      type="text"
      name="topic"
      required
      maxLength="20"
    />
    <br />
          <Input type="submit" value="submit" />
    </form>
    </StyledCard>
    </StyledConferenceForm>  
  );
};
export default UpdateConference;