import React from "react";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
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

const ProfilePage = ({ error, isLoading, user }) => {
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
      <StyledLink className="editLink" to={`/users/${id}/edit`}>Edit</StyledLink>        
        <StyledCardHeading className="name">
          {`Hello, ${firstName} ${lastName}!`}
        </StyledCardHeading>
      <p className="username">{`Username: ${username}`}</p>
      <p className="email">{`Email: ${email}`}</p>
      <p className="occupation">{`Occupation: ${occupation}`}</p>
    </StyledCard>
  </StyledProfile>
  );
};

export default ProfilePage;