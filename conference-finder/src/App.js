import React from "react";
import "./App.css";
import ConferenceItem from "./ConferenceItem";
import conferences from "./conferenceDataMock.json";

function App() {
  return (
    <div className="App">
      <ul>
        {conferences.map(conference => (
          <ConferenceItem key={conference.id} conference={conference} />
        ))}
      </ul>
    </div>
  );
}

export default App;
