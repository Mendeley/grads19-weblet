import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ConferenceDetails from "./Conference/ConferenceDetails";
import ConferenceList from "./Conference/ConferenceList";
import AddConference from "./Conference/AddConference";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import UpdateConference from "./UpdateConference";

const StyledApp = styled.div`
  text-align: center;
  background: #ccb7bb;
  width: auto;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ConferenceList />
          </Route>
          <Route path="/add">
            <AddConference />
          </Route>
          <Route path="/edit/:id">
            <UpdateConference/>
          </Route>
          <Route path="/:id">
            <ConferenceDetails />
          </Route>
        </Switch>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
