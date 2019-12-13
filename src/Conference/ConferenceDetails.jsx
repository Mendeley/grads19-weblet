import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import Button from "../Button";
import { getTimestring, getDatestring } from "../utils";
import { deleteConferenceById, addFavouriteConference } from "../api.js";
import { StyledCardHeading, StyledForm, Card } from "../StyledFormComponents";
<<<<<<< HEAD
import { cookieName } from "../Constants/Cookies";
=======
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a

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
  //const sessionToken = allCookies.sessionToken;
  const [cookies] = useCookies([cookieName]);
  const token = cookies.sessionToken.token;
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

<<<<<<< HEAD
  const expressInterest = async () => {
    await addFavouriteConference(conference, token);
=======
  const expressInterest = async ({ sessionToken }) => {
    await addFavouriteConference(conference, sessionToken.token);
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
  };

  return (
    <StyledForm>
      <Card>
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
<<<<<<< HEAD
        {token && (
          <>
            <Button className="deleteButton" onClick={deleteThisConference}>
              Delete Conference
            </Button>
            <Button onClick={expressInterest}>Express Interest</Button>
          </>
        )}
=======
        <Button onClick={deleteThisConference}>Delete Conference</Button>
        <Button onClick={expressInterest}>Express Interest</Button>
>>>>>>> 20f73c37538327db1122e69d0465e597dcca719a
      </Card>
    </StyledForm>
  );
};
const CookieConferenceDetails = withCookies(ConferenceDetails);
export default CookieConferenceDetails;
