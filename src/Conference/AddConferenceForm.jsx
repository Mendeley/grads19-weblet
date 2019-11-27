import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
import Input from "../Input";
import { createNewConference } from "../api";

const AddConferenceForm = ({ allCookies = {} }) => {
  let history = useHistory();
  const [conference, setConference] = useState({
    name: "",
    dateTime: "",
    city: "",
    description: "",
    topic: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setConference({ ...conference, [name]: value });
  };

  const submitForm = async () => {
    const newConference = {
      ...conference,
      dateTime: conference.dateTime + ":00Z"
    };
    try {
      await createNewConference(newConference, allCookies.sessionToken.token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        submitForm();
      }}
    >
      <Input
        label="Conference Name: "
        type="text"
        name="name"
        value={conference.name}
        onChange={handleChange}
        required
        maxLength="80"
      />
      <Input
        label="Date and Time: "
        type="datetime-local"
        name="dateTime"
        value={conference.dateTime}
        onChange={handleChange}
        required
      />
      <Input
        label="City: "
        type="text"
        name="city"
        value={conference.city}
        onChange={handleChange}
        required
        maxLength="50"
      />
      <Input
        label="Description: "
        type="text"
        name="description"
        value={conference.description}
        onChange={handleChange}
        required
        maxLength="1000"
      />
      <Input
        label="Topic: "
        type="text"
        name="topic"
        value={conference.topic}
        onChange={handleChange}
        required
        maxLength="20"
      />
      <Input type="submit" value="Submit" />
    </form>
  );
};
export default withCookies(AddConferenceForm);
export { AddConferenceForm as WrappedAddConferenceForm };