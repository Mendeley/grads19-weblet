import React from "react";
import "./App.css";
import ConferenceList from "./ConferenceList";
import axios from "axios";
import conferences from "./conferenceDataMock.json";

function App() {
  const getConferenceList = async () => {
    try {
      const response = await axios.get(
        `jdbc:mysql://localhost:3306/conferenceFinder/conferences`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <ConferenceList conferences={conferences} />
    </div>
  );
}

export default App;
