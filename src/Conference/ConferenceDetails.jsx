import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTimestring, getDatestring } from "../utils";
import { Link, useParams } from "react-router-dom";
import { getConferenceById } from '../api.js';

const StyledConferenceDetails = styled.div`
  width: 100%;
  height: 400px;
  color: white;
  background: darkslategray;
`;

const ConferenceDetails = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [conference, setConference] = useState(null);
  const [errorCaught, setErrorCaught] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const conference = await getConferenceById(id);
        setConference(conference);
      } catch (error) {
        setErrorCaught(true);
      }

      setIsLoading(false);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorCaught) {
    return <p>An error has occurred...</p>;
  }

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
