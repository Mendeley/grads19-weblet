import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useCookies, CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConferenceContainer from "./Conference/ConferenceContainer";
import ConferenceList from "./Conference/ConferenceList";
import Navbar from "./Navbar";
import RegistrationForm from "./User/RegistrationForm";
import LoginForm from "./User/LoginForm";
import AuthRedirect from "./AuthRedirect";
import AddConference from "./Conference/AddConference";
import UserContainer from "./User/UserContainer";
import SearchResult from "./Conference/SearchResult";

const StyledApp = styled.div`
  text-align: center;
  background: #FAFAFA;
  width: auto;
  min-height: 100vh;
`;
function App() {
  const cookieName = "sessionToken";
  const cookieOptions = { path: "/" };

  const [, setCookie] = useCookies([cookieName]);

  const setSessionToken = sessionTokenData => {
    setCookie(cookieName, sessionTokenData, cookieOptions);
  };

  const [conferences, setConferences] = useState([]);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <StyledApp>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ConferenceList
                conferences={conferences}
                setConferences={setConferences}
              />
            </Route>
            <Route path="/search">
              <SearchResult
                conferences={conferences}
                setConferences={setConferences} />
            </Route>
            <Route path="/add">
              <AuthRedirect redirectPath="/users/login">
                <AddConference />
              </AuthRedirect>
            </Route>
            <Route path="/users/register">
              <RegistrationForm />
            </Route>
            <Route path="/users/login">
              <LoginForm setSessionToken={setSessionToken} />
            </Route>
            <Route path="/users/:id">
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
