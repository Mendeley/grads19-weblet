import React from "react";
import styled from "styled-components";
import { getTimestring, getDatestring } from "../utils";
import { Link, useParams } from "react-router-dom";

const StyledConferenceDetails = styled.div`
  width: 100%;
  height: 400px;

`;

const StyledDetailsCardHeading = styled.h3`
background: #dbd8db;
width: 100%;
height: 55px;
font-size: 30px;
font-weight: bold;
text-align: center;
vertical-align: middle;


`;

const StyledDetailsCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: ${props => props.background || "#dbd8db"};
  width: 60%;
  height: 370px;
  transition: 0.3s;
  :hover {box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);}
  vertical-align: middle;
  margin:0 auto;

`;

export const StyledLink = styled(Link)`
  color: #7a517d;
  `;

const ConferenceDetails = ({ conferences }) => {
  let { id } = useParams();
  let conference = conferences.find(conference => parseInt(conference.id) === parseInt(id)) || {};
  const { name, topic, dateTime, city, description } = conference;
  const date = new Date(dateTime);

  return (
    <StyledConferenceDetails>
      <StyledDetailsCard>
        <StyledDetailsCardHeading>{name}</StyledDetailsCardHeading>
        <p>{topic}</p>
        <p>{getDatestring(date)}</p>
        <p>{getTimestring(date)}</p>
        <p>{city}</p>
        <p>{description}</p>
        <StyledLink to="/">Back</StyledLink>
      </StyledDetailsCard>
    </StyledConferenceDetails>
  );
};
export default ConferenceDetails;
