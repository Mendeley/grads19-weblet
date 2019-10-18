import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import ConferenceDetails from "./Conference/ConferenceDetails";
import ConferenceList from "./Conference/ConferenceList";
import { getConferenceList } from "./api";

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
          <Switch>
            <Redirect to="/" />
            <Route exact path="/">

              <ConferenceList conferences={conferences} />
            </Route>
            <Route path="/:id">
              <ConferenceDetails conferences={conferences} />
            </Route>
          </Switch>
        )}
      {errorCaught ? <p>An error has occurred...</p> : ""}
    </StyledApp>
  );
};

export default App;
