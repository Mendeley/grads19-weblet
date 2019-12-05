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
  const { id } = useParams();
  const [cookies] = useCookies([cookieName]);

  const fetchData = async userId => {
    setIsLoading(true);

    try {
      console.log(`trying to get user with id of ${id}`);
      console.log(cookies.sessionToken.token);
      const user = await getUserById(userId, cookies.sessionToken.token);
      console.log(`found user with id of ${id}`);
      setUser(user);
      console.log(`user with id of ${id} has details of ${user}`);
    } catch (error) {
      console.log(
        `request for user with id of ${id} failed for the following reason:`
      );
      console.log(error.message);
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("start");
    //if (id) {
    console.log("fetching");
    fetchData(id);
    console.log("fetched");
    //}
    console.log("end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Switch>
      <Route path="/users/:id/edit">
        <UpdateProfile />
      </Route>
      <Route path="/users/:id">
        <ProfilePage user={user} isLoading={isLoading} error={error} />
      </Route>
    </Switch>
  );
};

export default withCookies(UserContainer);
