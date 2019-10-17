import React from "react";
import styled from "styled-components";
import { getTimestring, getDatestring } from "../utils";
import { Link, useParams } from "react-router-dom";

const StyledConferenceDetails = styled.div`
  width: 100%;
  height: 400px;
  color: white;
  background: darkslategray;
`;

const ConferenceDetails = ({ conferences }) => {
  let { id } = useParams();
  let conference = {};
  conferences.forEach(singleConference => {
    if (Number(singleConference.id) === Number(id)) {
      conference = singleConference;
    }
  });
  const { name, topic, dateTime, city, description } = conference;
  const date = new Date(dateTime);

  return (
    <StyledConferenceDetails>
      <h3>{name}</h3>
      <p>{topic}</p>
      <p>{getDatestring(date)}</p>
      <p>{getTimestring(date)}</p>
      <p>{city}</p>
      <p>{description}</p>
      <Link to="/">Back</Link>
    </StyledConferenceDetails>
  );
};
export default ConferenceDetails;
