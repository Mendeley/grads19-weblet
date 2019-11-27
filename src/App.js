import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ConferenceContainer from "./Conference/ConferenceContainer";
import ConferenceList from "./Conference/ConferenceList";
import AddConference from "./Conference/AddConference";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CookiesProvider, useCookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "./User/RegistrationForm";
import LoginForm from "./User/LoginForm";
import UserContainer from "./User/UserContainer";

const StyledApp = styled.div`
  text-align: center;
  background: #ccb7bb;
  width: auto;
  min-height: 100vh;
`;

function App() {
  const cookieName = "sessionToken";
  const cookieOptions = { path: "/" };
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const setSessionToken = sessionTokenData => {
    setCookie(cookieName, sessionTokenData, cookieOptions);
  };
  const deleteSessionToken = () => {
    removeCookie(cookieName, cookieOptions);
  };

  return (
    <CookiesProvider>
      <BrowserRouter>
        <StyledApp>
          <Navbar
            sessionToken={cookies.sessionToken}
            deleteSessionToken={deleteSessionToken}
          />
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
              <LoginForm setSessionToken={setSessionToken} />
            </Route>
            <Route path="/users">
              <UserContainer sessionToken={cookies.sessionToken} />
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
