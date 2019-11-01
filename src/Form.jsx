import React, { useState } from "react";
import Input from "./Input";
import { createNewConference } from "./api";

const Form = () => {
  const date = new Date();

  const [state, setState] = useState({
    name: "",
    dateTime: date, // fix format of this to match BE
    city: "",
    description: "",
    topic: ""
  });

  const handleChange = event => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const submitForm = async () => {
    console.log(state);
    const newState = {
      ...state,
      dateTime: "2020-06-02T21:34:33.616Z"
    };
    try {
      const status = await createNewConference(newState);
      // navigate to home page 😃
      console.log(status);
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
        value={state.name}
        onChange={handleChange}
      />
      <Input
        label="Date and Time: "
        type="datetime-local"
        name="dateTime"
        value={state.dateTime}
        onChange={handleChange}
      />
      <Input
        label="City: "
        type="text"
        name="city"
        value={state.city}
        onChange={handleChange}
      />
      <Input
        label="Description: "
        type="text"
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <Input
        label="Topic: "
        type="text"
        name="topic"
        value={state.topic}
        onChange={handleChange}
      />
      <Input type="submit" value="submit" />
    </form>
  );
};
export default Form;
