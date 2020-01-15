import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ConferenceItem from "./ConferenceItem";
import { getConferenceList } from "../api";

const StyledConferenceList = styled.ul`
  list-style-type: none;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    list-style-type: none;
    margin: 0;
    width: 80%;
    display: flex;
    justify-content: center;
  }
`;

const ConferenceList = ({ conferences, setConferences }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const conferenceList = await getConferenceList();
        setConferences(conferenceList);
      } catch (error) {
        setError(true);
      }

      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <StyledConferenceList>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        conferences.length > 0 &&
        conferences.map(conference => (
          <ConferenceItem key={conference.id} conference={conference} />
        ))}
      {error && <p>An error has occurred...</p>}
    </StyledConferenceList>
  );
};

export default ConferenceList;
