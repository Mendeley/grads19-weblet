import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledEmployeesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const StyledEmployeesListItem = styled.li`
  padding: 5px;
`;
const StyledEmployeesLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #7a517d;
`;

const EmployeeList = ({ employees }) => {
  return (
    <StyledEmployeesList className="employeeList">
      {employees.map(employee => (
        <StyledEmployeesListItem key={employee.id}>
          <StyledEmployeesLink
            className="employeeLink"
            to={`/users/${employee.id}`}
          >
            {`${employee.firstName} ${employee.lastName}`}
          </StyledEmployeesLink>
        </StyledEmployeesListItem>
      ))}
    </StyledEmployeesList>
  );
};

export default EmployeeList;
