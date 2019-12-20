import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { cookieName } from "../Constants/Cookies";
import { noManager } from "../Constants/Constants";
import ProfilePage from "./ProfilePage";
import UpdateProfile from "./UpdateProfile";
import {
  getUserById,
  getEmployeeList,
  getFavouritedConferencesByUserId
} from "../api.js";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [favouriteConferences, setFavouriteConferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [managerName, setManagerName] = useState("");
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);
  const userId = user ? user.id : null;
  const [employees, setEmployees] = useState([]);

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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const favouriteConferences = await getFavouritedConferencesByUserId(
        userId,
        cookies.sessionToken.token
      );
      setFavouriteConferences(favouriteConferences);
      const user = await getUserById(userId, cookies.sessionToken.token);
      setUser(user);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const getEmployees = async () => {
    try {
      const employees = await getEmployeeList(id, cookies.sessionToken.token);
      setEmployees(employees);
    } finally {
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (isCurrentUser()) {
      getManagerName(user);
      getEmployees();
    } else {
      setManagerName("");
      setEmployees([]);
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
          employees={employees}
          favouriteConferences={favouriteConferences}
        />
      </Route>
    </Switch>
  );
};

export default UserContainer;
