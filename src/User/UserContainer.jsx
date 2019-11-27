import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { getUserById } from "../api.js";
import ProfilePage from "./ProfilePage";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      const user = await getUserById(userId, cookies.sessionToken.token);
      setUser(user);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Switch>
      <Route path="/users/:id">
        <ProfilePage user={user} isLoading={isLoading} error={error} />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
