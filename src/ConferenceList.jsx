import React from "react";
import ConferenceItem from "./ConferenceItem";
import styled from "styled-components";

const StyledConferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConferenceList = ({ conferences }) => (
  <StyledConferenceList>
    {conferences.map(conference => (
      <ConferenceItem key={conference.id} conference={conference} />
    ))}
  </StyledConferenceList>
);

export default ConferenceList;
