import React from "react";
import styled from "styled-components";
<<<<<<< HEAD:src/Conference/ConferenceItem.jsx
import { getTimestring, getDatestring, getBackgroundColor } from "../utils";
import { Link } from "react-router-dom";
=======
import { getTimestring, getDatestring, getBackgroundColor } from "./utils";
import Button from "./Button.jsx";
>>>>>>> master:src/ConferenceItem.jsx

const StyledCard = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: ${props => props.background || "papayawhip"};

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledConferenceItem = styled.li`
  width: 300px;
  margin: 24px;
`;

const ConferenceItem = ({ conference }) => {
  const { id, name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);

  return (
    <StyledConferenceItem>
      <StyledCard background={getBackgroundColor(date)}>
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>{getDatestring(date)}</p>
        <p>{getTimestring(date)}</p>
        <p>{city}</p>
        <Link to={`/${id}`}>
          Description
        </Link>
      </StyledCard>
    </StyledConferenceItem>
  );
};
export default ConferenceItem;
