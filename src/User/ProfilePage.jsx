import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { noManager } from "../Constants/Constants";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
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
  bottom: 18px;
  left: 18px;
`;

const StyledProfile = styled.div`
  height: 400px;
  padding: 20px;
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
  isLoading,
  error,
  favouriteConferences,
  isCurrentUser,
  managerName
}) => {
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
    <StyledProfile>
      <StyledCard profileCard>
        {isCurrentUser && (
          <StyledEditLink className="editLink" to={`/users/${id}/edit`}>
            Edit
          </StyledEditLink>
        )}
        <StyledCardHeading className="name">
          {`${firstName} ${lastName}`}
        </StyledCardHeading>
        <p className="username">{`Username: ${username}`}</p>
        <p className="email">{`Email: ${email}`}</p>
        <p className="occupation">{`Occupation: ${occupation}`}</p>
        {isCurrentUser && displayManager()}
      </StyledCard>
      <StyledCard profileCard>
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
      </StyledCard>
    </StyledProfile>
  );
};

export default ProfilePage;
