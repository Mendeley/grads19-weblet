import React from "react";
import { useCookies } from "react-cookie";
import { cookieName } from "./Constants/Cookies";
import { Redirect } from "react-router-dom";

const AuthRedirect = ({ redirectPath, children }) => {
  const [cookies] = useCookies([cookieName]);

  return cookies.sessionToken ? children : <Redirect to={redirectPath} />;
};

export default AuthRedirect;
