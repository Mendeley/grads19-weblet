import React from "react";
import ConferenceItem from "./ConferenceItem";
import conferences from "./conferenceDataMock.json";

const ConferenceList = () => (
  <ul className="conferenceList">
    {conferences.map(conference => (
      <ConferenceItem key={conference.id} conference={conference} />
    ))}
  </ul>
);

export default ConferenceList;
