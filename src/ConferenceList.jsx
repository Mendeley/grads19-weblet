import React from "react";
import ConferenceItem from "./ConferenceItem";

const ConferenceList = ({ conferences }) => (
  <ul className="conferenceList">
    {conferences.map(conference => (
      <ConferenceItem key={conference.id} conference={conference} />
    ))}
  </ul>
);

export default ConferenceList;
