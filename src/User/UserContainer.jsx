import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { getUserById } from "../api.js";

const UserContainer = ({ sessionToken }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      const user = await getUserById(userId, sessionToken.token);
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
  }, [id]);

  return (
    <Switch>
      <Route path="/users/:id">
        <ProfilePage user={user} isLoading={isLoading} error={error} />
      </Route>
    </Switch>
  );
};

export default UserContainer;
