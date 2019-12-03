import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { noManager } from "../Constants/Constants";
import ProfilePage from "./ProfilePage";
import UpdateProfile from "./UpdateProfile";
import { getUserById, getFavouritedConferencesByUserId } from "../api.js";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [managerName, setManagerName] = useState("");
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);
  const userId = user ? user.id : null;

  const isCurrentUser = () => {
    return Number(id) === cookies.sessionToken.userId;
  };

  const getManagerName = async user => {
    if (user) {
      if (user.managerId) {
        try {
          const manager = await getUserById(
            user.managerId,
            cookies.sessionToken.token
          );
          setManagerName(`${manager.firstName} ${manager.lastName}`);
        } catch (error) {
          setError(true);
        }
      } else {
        setManagerName(noManager);
      }
    }
  };

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
>>>>>>> GP19-104/5: fixed bug with tokens in userContainer
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

  useEffect(() => {
    if (isCurrentUser()) {
      getManagerName(user);
    } else {
      setManagerName("");
    }
  }, [isCurrentUser(), userId]);

  return (
    <Switch>
      <Route path="/users/:id/edit">
        {isCurrentUser() ? (
          <UpdateProfile
            user={user}
            id={id}
            setUser={setUser}
            isLoading={isLoading}
            error={error}
            sessionToken={cookies.sessionToken}
          />
        ) : (
          <Redirect to={`/users/${cookies.sessionToken.userId}`} />
        )}
      </Route>
      <Route path="/users/:id">
        <ProfilePage
          user={user}
          isLoading={isLoading}
          error={error}
          isCurrentUser={isCurrentUser()}
          managerName={managerName}
          favouriteConferences={favouriteConferences}
        />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
