import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

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
  bottom: 18px;
  left: 18px;
`;

const StyledProfile = styled.div`
  height: 400px;
  padding: 20px;
`;

const ProfilePage = ({ user, isLoading, error, favouriteConferences }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { id, username, firstName, lastName, email, occupation } = user || {};

  return (
    <StyledProfile>
      <StyledCard favouritesCard>
        <StyledCardHeading className="name">
          {`Hello, ${firstName} ${lastName}!`}
        </StyledCardHeading>
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>

        <StyledLink className="editLink" to={`/users/${id}/edit`}>
          Edit
        </StyledLink>
      </StyledCard>
      <StyledCard favouritesCard>
        <StyledCardHeading className="favourite-conferences">
          Favourited conferences
        </StyledCardHeading>
        <FavouriteConferenceList favouriteConferences={favouriteConferences} />
      </StyledCard>
    </StyledProfile>
  );
};

export default ProfilePage;
