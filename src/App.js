import React from "react";
import ConferenceList from "./ConferenceList";
import styled from "styled-components";

const StyledApp = styled.div`
  text-align: center;
  background: lightgrey;
`;

function App() {
  return (
    <StyledApp>
      <ConferenceList />
    </StyledApp>
  );
}

export default App;
