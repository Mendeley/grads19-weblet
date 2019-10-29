import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ConferenceItem from "./ConferenceItem";
import { getConferenceList } from "../api";

const StyledConferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConferenceList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conferences, setConferences] = useState([]);
  const [errorCaught, setErrorCaught] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const conferences = await getConferenceList();
        setConferences(conferences);
      } catch (error) {
        setErrorCaught(true);
      }

      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <StyledConferenceList>
        {isLoading ? (
          <p>Loading...</p>
        ) : (      
          conferences.map(conference => (
            <ConferenceItem
              key={conference.id}
              conference={conference}
            />
          ))
          )}
          {errorCaught && <p>An error has occurred...</p>}
        </StyledConferenceList>
  );
};

export default ConferenceList;
