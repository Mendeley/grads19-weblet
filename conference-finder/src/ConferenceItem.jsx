import React from "react";

const ConferenceItem = ({ conference }) => {
  const {
    conferenceName,
    conferenceTopic,
    conferenceDateTime,
    city
  } = conference;
  return (
    <li>
      <div className="card">
        <h3>{conferenceName}</h3>
        <p>{conferenceTopic}</p>
        <p>{conferenceDateTime}</p>
        <p>{city}</p>
      </div>
    </li>
  );
};
export default ConferenceItem;
