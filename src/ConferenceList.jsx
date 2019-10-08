import React from "react";
import ConferenceItem from "./ConferenceItem";
import conferences from "./conferenceDataMock.json";
import styled from "styled-components";

const StyledUList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConferenceList = () => (
  <StyledUList>
    {conferences.map(conference => (
      <ConferenceItem key={conference.id} conference={conference} />
    ))}
  </StyledUList>
);

export default ConferenceList;
