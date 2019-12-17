import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
import Button from "../Button";
import { getTimestring, getDatestring } from "../utils";
import { deleteConferenceById, addFavouriteConference } from "../api.js";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";
import { cookieName } from "../Constants/Cookies";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

export const StyledLink = styled(Link)`
  color: #7a517d;
`;

export const StyledDescription = styled.p`
  padding: 0 100px 50px 100px;
`;

export const ConferenceDetails = ({
  conference,
  id,
  isLoading,
  error,
  allCookies = {}
}) => {
  const history = useHistory();

  const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
  const userId = allCookies.sessionToken
    ? allCookies.sessionToken.userId
    : null;

  const conferenceId = parseInt(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { name, topic, dateTime, city, description } = conference || {};
  const date = new Date(dateTime);

  const deleteConference = async id => {
    try {
      await deleteConferenceById(id, token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteThisConference = () => {
    deleteConference(id);
  };

  const expressInterest = () => {
    addFavouriteConference(userId, conferenceId, token);
  };

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading className="name">{name}</StyledCardHeading>
        {token && (
          <StyledLink className="editLink" to={`/${id}/edit`}>
            Edit Conference
          </StyledLink>
        )}
        <p className="topic">{topic}</p>
        <p className="date">{getDatestring(date)}</p>
        <p className="time">{getTimestring(date)}</p>
        <p className="city">{city}</p>
        <StyledDescription className="description">
          {description}
        </StyledDescription>
        {token && (
          <>
            <Button className="deleteButton" onClick={deleteThisConference}>
              Delete Conference
            </Button>
            <Button onClick={expressInterest}>Express Interest</Button>
          </>
        )}
      </StyledCard>
    </StyledForm>
  );
};

export default withCookies(ConferenceDetails);
