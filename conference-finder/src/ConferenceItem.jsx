import React from "react";

const ConferenceItem = ({ conference }) => {
  const { name, topic, dateTime, city } = conference;
  return (
    <li>
      <div className="card">
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>{dateTime}</p>
        <p>{city}</p>
      </div>
    </li>
  );
};
export default ConferenceItem;
