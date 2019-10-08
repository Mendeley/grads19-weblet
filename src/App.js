import React from "react";
import "./App.css";
import ConferenceItem from "./ConferenceItem";
import conferences from "./conferenceDataMock.json";
import ConferenceList from "./ConferenceList";
function App() {
  return (
    <div className="App">
      <ConferenceList />
    </div>
  );
}

export default App;
