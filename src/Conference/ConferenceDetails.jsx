import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { getTimestring, getDatestring } from "../utils";
import { deleteConferenceById } from "../api.js";
import Button from "../Button";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

export const StyledLink = styled(Link)`
  color: #7a517d;
`;

const ConferenceDetails = ({ conference, id, isLoading, errorCaught }) => {
  const history = useHistory();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorCaught) {
    return <p>An error has occurred...</p>;
  }

  const { name, topic, dateTime, city, description } = conference || {};
  const date = new Date(dateTime);

  const deleteConference = async id => {
    try {
      await deleteConferenceById(id);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteThisConference = () => {
    deleteConference(id);
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading className="name">{name}</StyledCardHeading>
        <p className="topic">{topic}</p>
        <p className="date">{getDatestring(date)}</p>
        <p className="time">{getTimestring(date)}</p>
        <p className="city">{city}</p>
        <p className="description">{description}</p>
        <StyledLink to={`/${id}/edit`}>Edit Conference</StyledLink>
        <br />
        <Button onClick={deleteThisConference}>Delete Conference</Button>
      </StyledCard>
    </StyledForm>
  );
};
export default ConferenceDetails;
