import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFavouritesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledFavouritesListItem = styled.li`
  :hover {
    background-color: papayawhip;
    cursor: pointer;
    display: inline;
  }
`;

const StyledConferenceLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #322d38;
`;

const FavouriteConferenceList = ({ favouriteConferences }) => {
  return (
    <StyledFavouritesList>
      {favouriteConferences.map(conference => (
        <StyledFavouritesListItem key={conference.id}>
          <StyledConferenceLink to={`/${conference.id}`}>
            {conference.name}
          </StyledConferenceLink>
        </StyledFavouritesListItem>
      ))}
    </StyledFavouritesList>
  );
};

export default FavouriteConferenceList;
