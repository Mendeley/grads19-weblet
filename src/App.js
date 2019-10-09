import React, { useState, useEffect } from "react";
import "./App.css";
import ConferenceList from "./ConferenceList";
import axios from "axios";

const getConferenceList = async () => {
  try {
    const response = await axios.get("../conferenceDataMock.json");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const conferences = await getConferenceList();
      setConferences(conferences);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  getConferenceList();
  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ConferenceList conferences={conferences} />
      )}
    </div>
  );
}

export default App;
