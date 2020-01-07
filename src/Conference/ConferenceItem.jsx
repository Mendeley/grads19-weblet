import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getTimestring, getDatestring } from "../utils";

const StyledCardHeading = styled.div`
  background: #dbd8db;
  width: 315px;
  height: 55px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 0 0 25px 25px;
  background: #f7f4f1;
  width: 315px;
  height: 250px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
`;

const StyledConferenceItem = styled.li`
  width: 300px;
  margin: 24px;
`;

const StyledLink = styled(Link)`
  color: #7a517d;
`;

const ConferenceItem = ({ conference }) => {
  const { id, name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);
  return (
    <StyledConferenceItem>
      <StyledCard>
        <StyledCardHeading role="header">{name}</StyledCardHeading>
        <p data-testid="topic">{topic}</p>
        <p>{getDatestring(date)}</p>
        <p>{getTimestring(date)}</p>
        <p data-testid="city">{city}</p>
        <StyledLink to={`/${id}`}>More details...</StyledLink>
      </StyledCard>
    </StyledConferenceItem>
  );
};
export default ConferenceItem;
