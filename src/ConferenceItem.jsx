import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: papayawhip;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledListItem = styled.li`
  width: 300px;
  margin: 24px;
`;

const ConferenceItem = ({ conference }) => {
  const { name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);
  return (
    <StyledListItem>
      <StyledCard>
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </p>
        <p>
          {date.getHours()}:{date.getMinutes()}
        </p>
        <p>{city}</p>
      </StyledCard>
    </StyledListItem>
  );
};
export default ConferenceItem;
