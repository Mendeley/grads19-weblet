import React from "react";
import styled from "styled-components";
import ConferenceItem from "./ConferenceItem";

const StyledConferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConferenceList = ({ conferences }) => {
  return (
        <StyledConferenceList>
          {conferences.map(conference => (
            <ConferenceItem
              key={conference.id}
              conference={conference}
            />
          ))}
        </StyledConferenceList>
  );
};

export default ConferenceList;
