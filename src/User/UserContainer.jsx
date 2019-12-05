import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { getUserById } from "../api.js";
import ProfilePage from "./ProfilePage";
import UpdateProfile from "./UpdateProfile";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [managerName, setManagerName] = useState("");
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);

  const checkIfCurrentUser = (fetchedId, currentUserId) => {
    if (fetchedId == currentUserId) {
      setIsCurrentUser(true);
    }
  };

  const getManagerName = async managerId => {
    if (managerId) {
      try {
        const manager = await getUserById(
          managerId,
          cookies.sessionToken.token
        );
        setManagerName(`${manager.firstName} ${manager.lastName}`);
      } catch (error) {
        setError(true);
      }
    }
  };

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      const user = await getUserById(userId, cookies.sessionToken.token);
      setUser(user);
      checkIfCurrentUser(userId, cookies.sessionToken.userId);
      getManagerName(user.managerId);
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
      <Route path="/users/:id/edit">
        <UpdateProfile />
      </Route>
      <Route path="/users/:id">
        <ProfilePage
          user={user}
          isLoading={isLoading}
          error={error}
          isCurrentUser={isCurrentUser}
          setIsCurrentUser={setIsCurrentUser}
          managerName={managerName}
        />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
