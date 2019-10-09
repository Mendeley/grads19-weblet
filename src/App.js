import React from "react";
import ConferenceList from "./ConferenceList";
import styled from "styled-components";
import conferences from "./conferenceDataMock.json";

const StyledApp = styled.div`
  text-align: center;
  background: lightgrey;
`;

function App() {
  return (
    <StyledApp>
      <ConferenceList conferences={conferences} />
    </StyledApp>
  );
}

export default App;
