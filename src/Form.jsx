import React, { useState } from "react";
import Input from "./Input";
import { createNewConference } from "./api";

const Form = () => {
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
    try {
      const status = await createNewConference(state);
      console.log(status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
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
      <Input type="submit" onClick={() => submitForm()} />
    </form>
  );
};
export default Form;
