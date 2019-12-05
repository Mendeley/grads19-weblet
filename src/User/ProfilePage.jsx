import React from "react";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ProfilePage = ({
  error,
  isLoading,
  user,
  isCurrentUser,
  setIsCurrentUser,
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

  return (
    <StyledCard>
      {isCurrentUser && (
        <StyledEditLink className="editLink" to={`/users/${id}/edit`}>
          Edit
        </StyledEditLink>
      )}
      <StyledCardHeading className="name">
        {`Hello, ${firstName} ${lastName}!`}
      </StyledCardHeading>
      <p className="username">{`Username: ${username}`}</p>
      <p className="email">{`Email: ${email}`}</p>
      <p className="occupation">{`Occupation: ${occupation}`}</p>
      <p className="manager">
        {"Manager: "}
        {managerId ? (
          <StyledLink
            className="managerLink"
            onClick={() => setIsCurrentUser(false)}
            to={`/users/${managerId}`}
          >
            {managerName}
          </StyledLink>
        ) : (
          "None Assigned"
        )}
      </p>
    </StyledCard>
  );
};

export default ProfilePage;
