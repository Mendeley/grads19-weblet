import React from "react";
import {
  StyledCardHeading,
  StyledForm,
  StyledCard
} from "../StyledFormComponents";

const ProfilePage = ({ user, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred...</p>;
  }

  const { username, firstName, lastName, email, occupation } = user || {};

  return (
    <StyledForm>
      <StyledCard>
        <StyledCardHeading className="name">
          Hello {firstName} {lastName}
        </StyledCardHeading>
        <p className="username">Username: {username}</p>
        <p className="email">Email: {email}</p>
        <p className="occupation">Occupation: {occupation}</p>
      </StyledCard>
    </StyledForm>
  );
};
export default ProfilePage;
