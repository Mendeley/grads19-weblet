import styled from "styled-components";
import React from "react";

const StyledForm = styled.div`
  height: 400px;
  padding: 20px;
`;

const StyledCardHeading = styled.h3`
  background: #dbd8db;
  width: 100%;
  height: 55px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  ${props =>
    props.profilePage
      ? `
  width: 45%;
  height: 80vh;
  margin: 10px;
  display: inline-block;
  `
      : `width: 900px;
  height: 450px;
  margin: 0 auto;`}
  border-style: solid;
  border-color: black;
  border-radius: 25px;
  background: #dbd8db;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  vertical-align: middle;
`;

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export { StyledCardHeading, StyledForm, Card };
