import React from "react";
// import Button from "./Button.jsx";
import styled from "styled-components";
import { getTimestring, getDatestring } from "./utils";

const StyledConferenceDetails = styled.div`
  width: 100%;
  height: 400px;
  color: white;
  background: darkslategray;
`;

const ConferenceDetails = ({ conference, setConferenceDetailsOpen }) => {
  const { name, topic, dateTime, city, description } = conference;
  const date = new Date(dateTime);

  return (
    <StyledConferenceDetails>
      <h3>{name}</h3>
      <p>{topic}</p>
      <p>{getDatestring(date)}</p>
      <p>{getTimestring(date)}</p>
      <p>{city}</p>
      <p>{description}</p>
      <button onClick={() => setConferenceDetailsOpen(false)}>Back</button>
    </StyledConferenceDetails>
  );
};
export default ConferenceDetails;
