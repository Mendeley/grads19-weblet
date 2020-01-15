import React from "react";
import styled from "styled-components";
import LinkListItem from "../LinkListItem";

const StyledFavouritesList = styled.ul`
  margin: 0;
  padding:0;
  list-style-type: none;
`;

const FavouriteConferenceList = ({ favouriteConferences }) => {
  return (
    <StyledFavouritesList>
      {favouriteConferences.map(conference => (
        <LinkListItem
          key={conference.id}
          link={`/${conference.id}`}
          displayText={conference.name}
          className="conferenceLink"
        />
      ))}
    </StyledFavouritesList>
  );
};

export default FavouriteConferenceList;
