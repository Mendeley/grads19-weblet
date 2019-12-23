import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledListItem = styled.li`
  :hover {
    background-color: papayawhip;
    cursor: pointer;
    display: inline;
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #322d38;
`;

const LinkListItem = ({ displayText, link, className }) => {
  return (
    <StyledListItem>
      <StyledLink to={link}>{displayText}</StyledLink>
    </StyledListItem>
  );
};

export default LinkListItem;
