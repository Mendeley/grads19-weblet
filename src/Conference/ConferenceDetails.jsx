import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
import Button from "../Button";
import { getTimestring, getDatestring } from "../utils";
import {
  deleteConferenceById,
  addFavouriteConference,
  removeFavouriteConference,
  getFavouritedConferencesByUserId
} from "../api.js";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";



export const StyledEditLink = styled(Link)`
  display: block;
  height: 10.5%;
  width: 7%;
  color: black;
  text-decoration: none;
  background-color: #1F73B2;
  color: white;
  font-weight: bold;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 12%;
  right: 20%;

   
  @media only screen and (max-width:1100px){
  display: block;
  height: 10%;
  width: 20%;
  color: black;
  text-decoration: none;
  background-color: #1F73B2;
  color: white;
  font-weight: bold;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 2%;
  right: 35%;
  }
`;

export const StyledDeleteButton = styled(Button)`
  border-style: solid;
  display: block;
  height: 11%;
  width: 7%;
  font-weight: bold;
  font-size: 17px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  margin: auto;
  bottom: 12%;
  right: 10%;
  text-align: center;
  line-height: 0%;
  

  @media only screen and (max-width:1100px){
  border-style: solid;
  display: block;
  height: 10%;
  width: 24%;
  font-weight: bold;
  font-size: 15px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  margin: auto;
  bottom: 2%;
  right: 8%;
  }
`;

export const StyledInterestButton = styled(Button)`
  border-style: solid;
  display: block;
  height: 11%;
  width: 11%;
  font-weight: bold;
  font-size: 17px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 12%;
  right: 30%;
  text-align: center;
  line-height: 0%;
	
  @media only screen and (max-width:1100px){
  border-style: solid;
  display: block;
  height: 10%;
  width: 40%;
  font-weight: bold;
  font-size: 15px;
  background-color: #1F73B2;
  color: white;
  border-radius: 11px;
  position: absolute;
  bottom: 2%;
  right: 58%;
  }
`;

export const ConferenceDetails = ({
  conference,
  id,
  isLoading,
  error,
  allCookies = {}
}) => {
  const history = useHistory();

  const [userInterested, setUserInterested] = useState(false);
  const conferenceDoesntExistInFavList = async () => {
    try {
      const favConferenceList = await getFavouritedConferencesByUserId(token);
      var i;
      for (i = 0; i < favConferenceList.length; i++) {
        if (favConferenceList[i].id === conferenceId) {
          setUserInterested(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    conferenceDoesntExistInFavList();
  }, []);

  const token = allCookies.sessionToken ? allCookies.sessionToken.token : null;
  const userId = allCookies.sessionToken ? allCookies.sessionToken.userId : null;

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
    setUserInterested(true);
  };

  const deexpressInterest = () => {
    removeFavouriteConference(conferenceId, token);
    setUserInterested(false);
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
        <br></br>
        <br></br>
        <br></br>

        {token && (
          <>
            {!userInterested ? (
              <StyledInterestButton onClick={expressInterest}>Interested</StyledInterestButton>
            ) : (
                <StyledInterestButton onClick={deexpressInterest}>Uninterested</StyledInterestButton>
              )}
            <StyledEditLink className="editLink" to={`/${id}/edit`}>
              Edit
						</StyledEditLink>
            <StyledDeleteButton className="deleteButton" onClick={deleteThisConference}>
              Delete
						</StyledDeleteButton>
          </>
        )}
      </StyledCard>
    </StyledForm>
  );
};

export default withCookies(ConferenceDetails);
