import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import ProfilePage from "./ProfilePage";
<<<<<<< HEAD
import UpdateProfile from "./UpdateProfile";
=======
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
import { getUserById, getFavouritedConferencesByUserId } from "../api.js";

const UserContainer = ({ sessionToken }) => {
  const [user, setUser] = useState(null);
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      const favouriteConferences = await getFavouritedConferencesByUserId(
        userId,
        sessionToken.token
      );
      setFavouriteConferences(favouriteConferences);
<<<<<<< HEAD
      const user = await getUserById(userId, cookies.sessionToken.token);
=======
      const user = await getUserById(userId, sessionToken.token);
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
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
<<<<<<< HEAD
          isLoading={isLoading}
          error={error}
          favouriteConferences={favouriteConferences}
=======
          favouriteConferences={favouriteConferences}
          isLoading={isLoading}
          error={error}
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
        />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
