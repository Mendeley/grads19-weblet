import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ConferenceContainer from "./Conference/ConferenceContainer";
import ConferenceList from "./Conference/ConferenceList";
import AddConference from "./Conference/AddConference";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "./User/RegistrationForm";

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
          <Route path="/users">
            <RegistrationForm />
          </Route>
          <Route path="/:id">
            <ConferenceContainer />
          </Route>
        </Switch>
      </StyledApp>
      <ToastContainer position="bottom-right" autoClose={5000} pauseOnHover />
    </BrowserRouter>
  );
}

export default App;
