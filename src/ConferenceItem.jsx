import React from "react";
import moment from "moment";

const ConferenceItem = ({ conference }) => {
  const { name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);
  return (
    <li>
      <div className="card">
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </p>
        <p>
          {date.getHours()}:{date.getMinutes()}
        </p>
        <p>{city}</p>
      </div>
    </li>
  );
};
export default ConferenceItem;
