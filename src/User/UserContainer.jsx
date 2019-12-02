import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import ProfilePage from "./ProfilePage";
import UpdateProfile from "./UpdateProfile";
import { getUserById, getFavouritedConferenceById } from "../api.js";

const UserContainer = ({ sessionToken }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);

  const fetchData = async (userId, conferenceId) => {
    setIsLoading(true);

    try {
      const favouriteConferences = await getFavouritedConferenceById(
        conferenceId,
        token
      );
      setFavouriteConferences(favouriteConferences);
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
  }, [id]);

  return (
    <Switch>
      <Route path="/users/:id/edit">
        <UpdateProfile
          user={user}
          id={id}
          setUser={setUser}
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
          favouriteConferences={favouriteConferences}
        />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
