import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ConferenceDetails from "./Conference/ConferenceDetails";
import ConferenceList from "./Conference/ConferenceList";
import { getConferenceList } from "./api";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <StyledApp>
        <Navbar />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <Switch>
              <Route exact path="/">
                <ConferenceList conferences={conferences} />
              </Route>
              <Route path="/:id">
                <ConferenceDetails conferences={conferences} />
              </Route>
            </Switch>
          )}
        {errorCaught && <p>An error has occurred...</p>}
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
