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

const StyledConferenceItem = styled.li`
  width: 300px;
  margin: 24px;
`;

const ConferenceItem = ({ conference }) => {
  const { name, topic, dateTime, city } = conference;
  const date = new Date(dateTime);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <StyledConferenceItem>
      <StyledCard>
        <h3>{name}</h3>
        <p>{topic}</p>
        <p>
          {day}/{month}/{year}
        </p>
        <p>
          {hours}:{minutes}
        </p>
        <p>{city}</p>
      </StyledCard>
    </StyledConferenceItem>
  );
};
export default ConferenceItem;
