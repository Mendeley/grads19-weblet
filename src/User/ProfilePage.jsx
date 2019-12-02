import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: block;
  height: 40px;
  width: 100px;
  text-decoration: none;
  background-color: papayawhip;
  line-height: 40px;
  border-radius: 11px;
  border: 3px solid black;
  position: absolute;
  top: 18px;
  right: 18px;
`;

const StyledProfile = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledCard = styled.ul`
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  width: 45%;
  height: 80vh;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
  margin: 10px;
  display: inline-block;
`;

const StyledFavouritesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledFavouritesListItem = styled.li`
  :hover {
    background-color: papayawhip;
    cursor: pointer;
    display: inline;
  }
`;

const StyledConferenceLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #322d38;
`;

const ProfilePage = ({ user, favouriteConferences, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { id, username, firstName, lastName, email, occupation } = user || {};

  return (
    <StyledProfile>
      <StyledCard>
        <StyledLink className="editLink" to={`/users/${id}/edit`}>
          Edit
        </StyledLink>
        <StyledCardHeading className="name">
          {`Hello, ${firstName} ${lastName}!`}
        </StyledCardHeading>
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>
      </StyledCard>
      <StyledCard>
        <StyledCardHeading className="favourite-conferences">
          Favourited conferences
        </StyledCardHeading>
        <StyledFavouritesList>
          {favouriteConferences.map(conference => (
            <StyledFavouritesListItem key={conference.id}>
              <StyledConferenceLink to={`/${conference.id}`}>
                {conference.name}
              </StyledConferenceLink>
            </StyledFavouritesListItem>
          ))}
        </StyledFavouritesList>
      </StyledCard>
    </StyledProfile>
  );
};

export default ProfilePage;
