import React from "react";
import { useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { Redirect } from "react-router-dom";
import AddConference from "./AddConference";

const AddConferenceRedirector = () => {
  const [cookies] = useCookies([cookieName]);

  return (
    <>
      {cookies.sessionToken ? (
        <AddConference />
      ) : (
        <Redirect to="/users/login" />
      )}
    </>
  );
};

export default AddConferenceRedirector;
