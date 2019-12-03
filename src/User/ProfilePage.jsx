import React from "react";
import styled from "styled-components";
import { StyledCardHeading } from "../StyledFormComponents";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

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

const ProfilePage = ({ user, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { username, firstName, lastName, email, occupation } = user || {};

  return (
    <>
      <StyledProfileCard>
        <StyledCardHeading className="name">
          Hello {firstName} {lastName}
        </StyledCardHeading>
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>
      </StyledProfileCard>
      <StyledProfileCard>
        <StyledCardHeading className="favourite-conferences">
          Favourited conferences
        </StyledCardHeading>
        <FavouriteConferenceList />
      </StyledProfileCard>
    </>
  );
};
export default ProfilePage;
