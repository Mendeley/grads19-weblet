import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTimestring, getDatestring } from "../utils";
import { Link, useParams } from "react-router-dom";
import { getConferenceById } from "../api.js";

const StyledConferenceDetails = styled.div`
  height: 400px;
  padding: 20px;
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
  background: #dbd8db;
  width: 65%;
  height: 370px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: #7a517d;
`;

const ConferenceDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [conference, setConference] = useState(null);
  const [errorCaught, setErrorCaught] = useState(false);
  const { id } = useParams();

  const fetchData = async conferenceId => {
    setIsLoading(true);

    try {
      const conference = await getConferenceById(conferenceId);
      setConference(conference);
    } catch (error) {
      setErrorCaught(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorCaught) {
    return <p>An error has occurred...</p>;
  }

  const { name, topic, dateTime, city, description } = conference || {};
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
        <StyledLink to={`/${id}/edit`}>Edit Conference</StyledLink>
      </StyledDetailsCard>
    </StyledConferenceDetails>
  );
};
export default ConferenceDetails;
