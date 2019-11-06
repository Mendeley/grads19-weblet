import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { updateConferenceById, getConferenceById } from "./api";

//styling 
const StyledConferenceForm = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

const StyledCard = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 65%;
  height: 370px;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 0 auto;
`;

//update form component
const UpdateForm = () => {
  let history = useHistory();
  const { id } = useParams();
// attempted using getName to populate form with conference details feeding in id
// problem is calling the axios request multiple times when its already been called in conference details
//need to get conference data from conference details to keep code running efficiently 
  const [conference, setConference] = useState({
    name: getConferenceById(id).getName,
    dateTime: getConferenceById(id).getdateTime,
    city: getConferenceById(id).getCity,
    description: getConferenceById(id).getDescription,
    topic: getConferenceById(id).getTopic
  });
// handle change might function but needs to be checked
  const handleChange = event => {
    const value = event.target.value;
    setConference({ ...conference, [event.target.name]: value });
  };
  //submit form button does not function
  const submitForm = async () => {
    const newConference = {
      ...conference,
      dateTime: conference.dateTime + ":00Z"
    };
    try {
      await updateConferenceById(newConference);
      history.push(`/${id}`); //to take user back to conference details page
    } catch (error) {
      console.log(error);
    }
  };
  //form technicallly functions however does not pre-populate with conference details
  return (
    <StyledConferenceForm>
    <StyledCard>
      <StyledCardHeading>Edit a conference:</StyledCardHeading>
        <form
          onSubmit={ ev => {
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
    <br />
    <Input
      label="Date and Time: "
      type="datetime-local"
            name="dateTime"
            value={conference.dateTime}
        onChange={handleChange}
      required
    />
    <br />
    <Input
      label="City: "
      type="text"
            name="city"
            value={conference.city}
            onChange={handleChange}
      required
      maxLength="50"
    />
    <br />
    <Input
      label="Description: "
      type="text"
            name="description"
            value={conference.description}
            onChange={handleChange}
      required
      maxLength="1000"
    />
    <br />
    <Input
      label="Topic: "
      type="text"
            name="topic"
            value={conference.topic}
            onChange={handleChange}
      required
      maxLength="20"
    />
    <br />
          <Input type="submit" value="submit" />
    </form>
    </StyledCard>
    </StyledConferenceForm>  
  );
};
export default UpdateForm;