import React from 'react';
import './App.css';
import ConferenceItem from './ConferenceItem';
import conferences from './conferenceDataMock.json';

function App() {
  return (
    <div className="App">
      <ul>
        <ConferenceItem conference={conferences[0]} />
        <ConferenceItem conference={conferences[1]} />
        <ConferenceItem conference={conferences[2]} />
        <ConferenceItem conference={conferences[3]} />
        <ConferenceItem conference={conferences[4]} />
      </ul>
    </div>
  );
}

export default App;
