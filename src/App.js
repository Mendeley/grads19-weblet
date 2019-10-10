import React, { useState, useEffect } from "react";
import "./App.css";
import ConferenceList from "./ConferenceList";
import { getConferenceList } from "./api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [conferences, setConferences] = useState([]);
  const [errorCaught, setErrorCaught] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const conferences = await getConferenceList();
        setConferences(conferences);
      } catch (error) {
        setErrorCaught(true);
      }

      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ConferenceList conferences={conferences} />
      )}
      {errorCaught ? <p>An error has occurred...</p> : ""}
    </div>
  );
}

export default App;
