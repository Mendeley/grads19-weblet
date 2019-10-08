import React from "react";
import ConferenceItem from "./ConferenceItem";
import conferences from "./conferenceDataMock.json";

const ConferenceList = () => {
  return (
    <div className="conference list">
      <ul>
        {conferences.map(conference => (
          <ConferenceItem key={conference.id} conference={conference} />
        ))}
      </ul>
    </div>
  );
};

export default ConferenceList;
