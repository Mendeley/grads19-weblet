import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import { getTimestring, getDatestring } from "../utils";
import { deleteConferenceById } from "../api.js";
import { withCookies, useCookies } from "react-cookie";
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

const ConferenceDetails = ({ conference, id, isLoading, error }) => {
  const history = useHistory();
  const [cookies] = useCookies([cookieName]);

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
      await deleteConferenceById(id, cookies.sessionToken.token);
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
        {cookies.sessionToken && (
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
        {cookies.sessionToken && (
          <Button className="deleteButton" onClick={deleteThisConference}>
            Delete Conference
          </Button>
        )}
      </StyledCard>
    </StyledForm>
  );
};
export default withCookies(ConferenceDetails);
export { ConferenceDetails as WrappedComponent };
