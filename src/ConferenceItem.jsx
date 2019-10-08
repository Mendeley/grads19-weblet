import React from "react";
import moment from "moment";

const ConferenceItem = ({ conference }) => {
  const { name, topic, dateTime, city } = conference;
  const date = moment(dateTime).format("DD/MM/YYYY");
  const time = moment(dateTime).format("HH:mm");
  return (
    <li>
      <div className="card">
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{city}</p>
      </div>
    </li>
  );
};
export default ConferenceItem;
