import React from "react";
import styled from "styled-components";
import LinkListItem from "../LinkListItem";

const StyledEmployeesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const EmployeeList = ({ employees }) => {
  return (
    <StyledEmployeesList>
      {employees.map(employee => (
        <LinkListItem
          key={employee.id}
          link={`/users/${employee.id}`}
          displayText={`${employee.firstName} ${employee.lastName}`}
          className="employeeLink"
        />
      ))}
    </StyledEmployeesList>
  );
};

export default EmployeeList;
