import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledListItem = styled.li`
  padding: 5px;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #7a517d;
`;

const LinkListItem = ({ displayText, link, className }) => {
  return (
    <StyledListItem>
      <StyledLink to={link}>{displayText}</StyledLink>
    </StyledListItem>
  );
};

export default LinkListItem;
