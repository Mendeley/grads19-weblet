import React, { useState } from "react";
import Input from "./Input";
import { createNewConference } from "./api";
import { useHistory } from 'react-router-dom';

const Form = () => {
  
  let history = useHistory();
  const [state, setState] = useState({
    name: "",
    dateTime: "", // fix format of this to match BE
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
      dateTime: state.dateTime + ":00.000Z"
    };
    try {
      const status = await createNewConference(newState);
      history.push("/"); // navigate to home page 😃
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
        required
      />
      <Input
        label="Date and Time: "
        type="datetime-local"
        name="dateTime"
        value={state.dateTime}
        onChange={handleChange}
        required
      />
      <Input
        label="City: "
        type="text"
        name="city"
        value={state.city}
        onChange={handleChange}
        required
      />
      <Input
        label="Description: "
        type="text"
        name="description"
        value={state.description}
        onChange={handleChange}
        required
      />
      <Input
        label="Topic: "
        type="text"
        name="topic"
        value={state.topic}
        onChange={handleChange}
        required
      />
      <Input type="submit" value="submit" />
    </form>
  );
};
export default Form;
