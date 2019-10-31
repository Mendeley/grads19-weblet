import React, { useState } from "react";
import Input from "./Input";
import { createNewConference } from "./api";
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();
  const [state, setState] = useState({
    name: "",
    dateTime: "",
    city: "",
    description: "",
    topic: ""
  });

  const handleChange = event => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const submitForm = async () => {
    const newState = {
      ...state,
      dateTime: state.dateTime + ":00Z"
    };
    try {
      await createNewConference(newState);
      history.push("/"); // navigate to home page 😃
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
        id="name"
        label="Conference Name: "
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
        maxLength="80"
      />
      <br />
      <Input
        label="Date and Time: "
        type="datetime-local"
        name="dateTime"
        value={state.dateTime}
        onChange={handleChange}
        required
      />
      <br />
      <Input
        label="City: "
        type="text"
        name="city"
        value={state.city}
        onChange={handleChange}
        required
        maxLength="50"
      />
      <br />
      <Input
        label="Description: "
        type="text"
        name="description"
        value={state.description}
        onChange={handleChange}
        required
        maxLength="1000"
      />
      <br />
      <Input
        label="Topic: "
        type="text"
        name="topic"
        value={state.topic}
        onChange={handleChange}
        required
        maxLength="20"
      />
      <br />
      <Input type="submit" value="submit" id="test" />
    </form>
  );
};
export default Form;
