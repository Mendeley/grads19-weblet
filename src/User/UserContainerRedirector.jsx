import React from "react";
import { useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { Redirect } from "react-router-dom";
import UserContainer from "./UserContainer";

const UserContainerRedirector = () => {
  const [cookies] = useCookies([cookieName]);

  return (
    <>
      {cookies.sessionToken ? (
        <UserContainer />
      ) : (
        <Redirect to="/users/login" />
      )}
    </>
  );
};

export default UserContainerRedirector;
