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
  height: 8%;
  width: 7%;
  color: black;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  background-color: #1F73B2;
  color: white;
  font-weight: bold;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 7%;
  right: 47%;

   
  @media only screen and (max-width:1100px){
  display: block;
  height: 4.5%;
  width: 25%;
  color: black;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  background-color: #1F73B2;
  color: white;
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 2.2%;
  right: 55%;
  }
`;

export const StyledDeleteButton = styled(Button)`
  border-style: solid;
  display: block;
  height: 8.5%;
  width: 9%;
  font-weight: bold;
  font-size: 25px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  margin: auto;
  bottom: 7%;
  right: 36%;
  text-align: center;
  line-height: 0%;
  

  @media only screen and (max-width:1100px){
  border-style: solid;
  display: block;
  height: 5%;
  width: 31%;
  font-weight: bold;
  font-size: 18px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  margin: auto;
  bottom: 2%;
  right: 20%;
  }
`;

export const StyledInterestButton = styled(Button)`
  border-style: solid;
  display: block;
  height: 8.5%;
  width: 11%;
  font-weight: bold;
  font-size: 25px;
  background-color: #1F73B2;
  color: white;
  line-height: 40px;
  border-radius: 11px;
  position: absolute;
  bottom: 7%;
  right: 56%;
  text-align: center;
  line-height: 0%;

	
  @media only screen and (max-width:1100px){
  border-style: solid;
  display: block;
  height: 5%;
  width: 48%;
  font-weight: bold;
  font-size: 18px;
  background-color: #1F73B2;
  color: white;
  border-radius: 11px;
  position: absolute;
  bottom: 8%;
  right:27%;
  }
`;

export const StyledPadding = styled.div`
 padding-top: 30px;
   @media only screen and (max-width:1100px){
    padding-top: 60px;
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
        <StyledPadding></StyledPadding>
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
