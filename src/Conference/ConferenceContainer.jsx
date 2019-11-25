import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ConferenceDetails from "./ConferenceDetails";
import UpdateConference from "./UpdateConference";
import { getConferenceById } from "../api.js";

const ConferenceContainer = sessionToken => {
  const [conference, setConference] = useState(null);
  const [updatedConference, setUpdatedConference] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchData = async conferenceId => {
    setIsLoading(true);

    try {
      const conference = await getConferenceById(conferenceId);
      setConference(conference);
      setUpdatedConference({
        name: conference.name,
        dateTime: conference.dateTime.substring(
          0,
          conference.dateTime.length - 4
        ),
        city: conference.city,
        description: conference.description,
        topic: conference.topic
      });
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
      <Route exact path="/:id/edit">
        <UpdateConference
          updatedConference={updatedConference}
          id={id}
          setConference={setConference}
          setUpdatedConference={setUpdatedConference}
          isLoading={isLoading}
          error={error}
          sessionToken={sessionToken}
        />
      </Route>
      <Route path="/:id">
        <ConferenceDetails
          conference={conference}
          id={id}
          isLoading={isLoading}
          error={error}
          sessionToken={sessionToken}
        />
      </Route>
    </Switch>
  );
};

export default ConferenceContainer;
