import React, { useState } from "react";
import styled from "styled-components";
import ConferenceItem from "./ConferenceItem";
import ConferenceDetails from "./ConferenceDetails";

const StyledConferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConferenceList = ({ conferences }) => {
  const [selectedConference, setSelectedConference] = useState({});
  const [conferenceDetailsOpen, setConferenceDetailsOpen] = useState(false);
  const openConferenceDetails = ({ conference }) => {
    setSelectedConference(conference);
    setConferenceDetailsOpen(true);
  };
  return (
    <div>
      {conferenceDetailsOpen ? (
        <ConferenceDetails
          conference={selectedConference}
          setConferenceDetailsOpen={setConferenceDetailsOpen}
        />
      ) : (
        <StyledConferenceList>
          {conferences.map(conference => (
            <ConferenceItem
              key={conference.id}
              conference={conference}
              openConferenceDetails={openConferenceDetails}
            />
          ))}
        </StyledConferenceList>
      )}
    </div>
  );
};

export default ConferenceList;
