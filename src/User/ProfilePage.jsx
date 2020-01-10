import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { noManager } from "../Constants/Constants";
import EmployeeList from "./EmployeeList";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
import FavouriteConferenceList from "../Conference/FavouriteConferenceList";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #7a517d;
`;

export const StyledEditLink = styled(Link)`
  display: block;
  height: 13%;
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
  right: 10%;
`;

const StyledProfile = styled.div`
  height: 100%;
  padding: 20px;
`;

const ProfilePage = ({
  user,
  isLoading,
  error,
  favouriteConferences,
  isCurrentUser,
  managerName,
  employees
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


  const displayFavouriteConferences = () => {
    if (favouriteConferences.length) {
      return (
        <>
          <StyledCard profileCard>
            <StyledCardHeading className="favouriteConferencesHeader">
              Favourited Conferences:
            </StyledCardHeading>
            <FavouriteConferenceList
              className="favouriteConferencesList"
              favouriteConferences={favouriteConferences}
            />
          </StyledCard>
        </>)
    }
  }

  const displayEmployees = () => {
    if (employees.length) {
      return (
        <>
          <StyledCard profileCard className="employeesCard">
            <StyledCardHeading className="employeeListHeader">
              Employees:
            </StyledCardHeading>
            <EmployeeList className="employeeList" employees={employees} />
          </StyledCard>
        </>)
    }
  }

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
      {isCurrentUser && (displayEmployees())}
      {isCurrentUser && (displayFavouriteConferences())}
    </StyledProfile >
  );
};

export default ProfilePage;
