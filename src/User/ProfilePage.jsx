<<<<<<< HEAD
import { StyledCardHeading, Card } from "../StyledFormComponents";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { noManager } from "../Constants/Constants";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

export const StyledLink = styled(Link)`
  color: #7a517d;
`;

export const StyledEditLink = styled(Link)`
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

const StyledProfileCard = styled.ul`
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

const ProfilePage = ({
  user,
  favouriteConferences,
  isLoading,
  error,
  isCurrentUser,
  managerName
}) => {
=======
import React from "react";
import { StyledCardHeading, Card } from "../StyledFormComponents";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

// const StyledProfileCard = styled.ul`
//   border-style: solid;
//   border-color: black;
//   border-radius: 25px;
//   background: #dbd8db;
//   width: 45%;
//   height: 80vh;
//   transition: 0.3s;
//   :hover {
//     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//   }
//   vertical-align: middle;
//   margin: 10px;
//   display: inline-block;
// `;

const ProfilePage = ({ user, isLoading, error, favouriteConferences }) => {
>>>>>>> GP19-15: WIP CSS changes, implementing reusable card
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { id, username, firstName, lastName, email, occupation, managerId } =
    user || {};

  const displayManager = () => {
    if (managerName === noManager) {
      return <p className="manager">{`Manager: None Assigned`}</p>;
    } else {
      return (
        <p className="manager">
          <>
            {"Manager: "}
            <StyledLink className="managerLink" to={`/users/${managerId}`}>
              {managerName}
            </StyledLink>
          </>
        </p>
      );
    }
  };

  return (
<<<<<<< HEAD
    <StyledProfile>
      <StyledProfileCard>
        {isCurrentUser && (
          <StyledEditLink className="editLink" to={`/users/${id}/edit`}>
            Edit
          </StyledEditLink>
        )}
=======
    <>
      <Card>
>>>>>>> GP19-15: WIP CSS changes, implementing reusable card
        <StyledCardHeading className="name">
          {`Hello, ${firstName} ${lastName}!`}
        </StyledCardHeading>
<<<<<<< HEAD
        <p className="username">{`Username: ${username}`}</p>
        <p className="email">{`Email: ${email}`}</p>
        <p className="occupation">{`Occupation: ${occupation}`}</p>
        {isCurrentUser && displayManager()}
      </StyledProfileCard>
      <StyledProfileCard>
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
        <FavouriteConferenceList favouriteConferences={favouriteConferences} />
      </StyledProfileCard>
    </StyledProfile>
=======
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>
      </Card>
      <Card>
        <StyledCardHeading className="favourite-conferences">
          Favourited conferences
        </StyledCardHeading>
        <FavouriteConferenceList favouriteConferences={favouriteConferences} />
      </Card>
    </>
>>>>>>> GP19-15: WIP CSS changes, implementing reusable card
  );
};

export default ProfilePage;
