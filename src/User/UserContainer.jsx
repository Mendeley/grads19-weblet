import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import UpdateProfile from "./UpdateProfile";
import { getUserById } from "../api.js";

const UserContainer = ({ sessionToken }) => {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      const user = await getUserById(userId, sessionToken.token);
      setUser(user);
      setUpdatedUser({
        ...user
      });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <Switch>
      <Route path="/users/:id/edit">
        <UpdateProfile
          user={user}
          updatedUser={updatedUser}
          id={id}
          setUser={setUser}
          setUpdatedUser={setUpdatedUser}
          isLoading={isLoading}
          error={error}
          sessionToken={sessionToken}
        />
      </Route>
      <Route path="/users/:id">
        <ProfilePage
          user={user}
          isLoading={isLoading}
          error={error}
        />
      </Route>
    </Switch>
  );
};

export default UserContainer;
