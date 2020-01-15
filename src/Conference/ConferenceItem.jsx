import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getTimestring, getDatestring } from "../utils";

const StyledCardHeading = styled.div`
  background: #1F73B2;
  width: 100%;
  height: 55px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white; 
`;

const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 0 0 25px 25px;
  background: white;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  padding-bottom: 2%;
`;

const StyledConferenceItem = styled.li`
  width: 300px;
  margin: 24px;
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 15%;
  width: 25%;
  text-decoration: none;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  margin: auto;
  font-weight: bold;
`;

const ConferenceItem = ({ conference }) => {
  const { id, name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);
  return (
    <StyledConferenceItem>
      <StyledCard>
        <StyledCardHeading role="heading">{name}</StyledCardHeading>
        <p data-testid="topic">{topic}</p>
        <p data-testid="date">{getDatestring(date)}</p>
        <p>{getTimestring(date)}</p>
        <p data-testid="city">{city}</p>
        <StyledLink to={`/${id}`}>Details</StyledLink>
      </StyledCard>
    </StyledConferenceItem>
  );
};
export default ConferenceItem;
