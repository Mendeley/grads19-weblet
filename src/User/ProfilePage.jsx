import React from "react";
import { StyledCardHeading, StyledCard } from "../StyledFormComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { noManager } from "../Constants/Constants";

export const StyledLink = styled(Link)`
  color: #7a517d;
`;

const StyledEmployeesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const StyledEmployeesListItem = styled.li`
  padding: 5px;
  :hover {
    background-color: papayawhip;
    cursor: pointer;
    display: inline;
  }
`;
const StyledEmployeesLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #322d38;
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

const ProfilePage = ({
  error,
  isLoading,
  user,
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

  return (
    <StyledProfile>
      <StyledCard>
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
      {isCurrentUser && (
        <StyledCard>
          <StyledCardHeading className="employeeList">
            Employees:
          </StyledCardHeading>
          {employees.length > 0 && (
            <StyledEmployeesList>
              {employees.map(employee => (
                <StyledEmployeesListItem>
                  <StyledEmployeesLink
                    className="employeeLink"
                    to={`/users/${employee.id}`}
                    key={employee.id}
                    employee={employee}
                  >
                    {`${employee.firstName} ${employee.lastName}`}
                  </StyledEmployeesLink>
                </StyledEmployeesListItem>
              ))}
            </StyledEmployeesList>
          )}
        </StyledCard>
      )}
    </StyledProfile>
  );
};

export default ProfilePage;
