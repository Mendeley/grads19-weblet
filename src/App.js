import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ConferenceContainer from "./Conference/ConferenceContainer";
import ConferenceList from "./Conference/ConferenceList";
import AddConference from "./Conference/AddConference";
import CookieNavbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "./User/RegistrationForm";
import LoginForm from "./User/LoginForm";
import UserContainer from "./User/UserContainer";

const StyledApp = styled.div`
  text-align: center;
  background: #85bbe3;
  width: auto;
  min-height: 100vh;
`;

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <StyledApp>
          <CookieNavbar />
          <Switch>
            <Route exact path="/">
              <ConferenceList />
            </Route>
            <Route path="/add">
              <AddConference />
            </Route>
            <Route path="/users/register">
              <RegistrationForm />
            </Route>
            <Route path="/users/login">
              <LoginForm />
            </Route>
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/:id">
              <ConferenceContainer />
            </Route>
          </Switch>
        </StyledApp>
        <ToastContainer position="bottom-right" autoClose={5000} pauseOnHover />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
