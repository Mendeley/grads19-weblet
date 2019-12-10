import React from "react";
import Input from "../Input";
import { useHistory } from "react-router-dom";
import { updateConferenceById } from "../api";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";

const UpdateForm = ({
  updatedConference,
  id,
  setConference,
  setUpdatedConference,
  isLoading,
  error
}) => {
  const history = useHistory();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdatedConference({ ...updatedConference, [name]: value });
  };

  const submitForm = async () => {
    const newConference = {
      ...updatedConference,
      dateTime: `${updatedConference.dateTime}:00Z`
    };
    try {
      await updateConferenceById(id, newConference);
      setConference(newConference);
      history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm>
      <Card>
        <StyledCardHeading>Edit a conference:</StyledCardHeading>
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
            value={updatedConference.name}
            onChange={handleChange}
            required
            maxLength="80"
          />
          <Input
            label="Date and Time: "
            type="datetime-local"
            name="dateTime"
            value={updatedConference.dateTime}
            onChange={handleChange}
            required
          />
          <Input
            label="City: "
            type="text"
            name="city"
            value={updatedConference.city}
            onChange={handleChange}
            required
            maxLength="50"
          />
          <Input
            label="Description: "
            type="text"
            name="description"
            value={updatedConference.description}
            onChange={handleChange}
            required
            maxLength="1000"
          />
          <Input
            label="Topic: "
            type="text"
            name="topic"
            value={updatedConference.topic}
            onChange={handleChange}
            required
            maxLength="20"
          />
          <Input type="submit" value="save" />
        </form>
      </Card>
    </StyledForm>
  );
};
export default UpdateForm;
