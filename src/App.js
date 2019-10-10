import React, { useState, useEffect } from "react";
import ConferenceList from "./ConferenceList";
import { getConferenceList } from "./api";
import styled from "styled-components";

const StyledApp = styled.div`
  text-align: center;
  background: lightgrey;
`;

function App() {
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
    <StyledApp>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ConferenceList conferences={conferences} />
      )}
      {errorCaught ? <p>An error has occurred...</p> : ""}
    </StyledApp>
  );
}

export default App;
