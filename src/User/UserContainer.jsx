import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { getUserById, getFavouritedConferenceById } from "../api.js";

const UserContainer = ({ token }) => {
  const [user, setUser] = useState(null);
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchData = async (userId, conferenceId) => {
    setIsLoading(true);

    try {
      const favouriteConferences = await getFavouritedConferenceById(
        conferenceId,
        token
      );
      setFavouriteConferences(favouriteConferences);
      const user = await getUserById(userId, token);
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
        <ProfilePage
          user={user}
          favouriteConferences={favouriteConferences}
          isLoading={isLoading}
          error={error}
        />
      </Route>
    </Switch>
  );
};

export default UserContainer;
