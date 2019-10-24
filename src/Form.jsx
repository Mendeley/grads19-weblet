import React, { useState } from 'react';
import Input from './Input';


const Form = () => {
  const [state, setState] = useState({ conferenceName: "", city: "", description: "", topic: "" })

  const handleChange = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }


  return (
    <form>
      <Input label="Conference Name: " type="text" name="conferenceName" value={state.conferenceName} onChange={handleChange} />
      <Input label="City: " type="text" name="city" value={state.city} onChange={handleChange} />
      <Input label="Description: " type="text" name="description" value={state.description} onChange={handleChange} />
      <Input label="Topic: " type="text" name="topic" value={state.topic} onChange={handleChange} />

      {/* <Input label="date and time" type="datetime-local" />
      <Input type="submit" /> */}
    </form>
  );
};
export default Form;
