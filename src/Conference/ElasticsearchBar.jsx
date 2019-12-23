import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import { getElasticsearchResults } from "../api";

const ElasticsearchBar = () => {
  const [EsSearchInput, setEsSearchInput] = useState("");
  const [EsSearchResults, setEsSearchResults] = useState([]);
  const [conference, setConference] = useState({
    name: "",
    city: "",
    topic: "",
    description: ""
  });

  const handleSearch = event => {
    setEsSearchInput(event.target.value);
  };

  const searchConferences = async EsSearchInput => {
    try {
      const conferenceList = await getElasticsearchResults(EsSearchInput);
      setEsSearchResults(conferenceList);
    } catch (error) {}
  };

  useEffect(() => {
    if (EsSearchInput) {
      searchConferences(EsSearchInput);
    }
  }, [EsSearchInput]);

  const handleChange = event => {
    const { name, value } = event.target;
    setConference({ ...conference, [name]: value });
  };

  return (
    <ElasticsearchBar>
      <label>Search: </label>
      <DebounceInput
        minLength={3}
        debounceTimeout={500}
        onChange={handleSearch}
      />
      <select onChange={handleChange} name="conferenceId" defaultValue={null}>
        <option value={null}>---- search for conference ----</option>
        {EsSearchResults.map(conference => (
          <option key={conference.id} value={conference.id}>
            {conference.name} {conference.city}
          </option>
        ))}
      </select>
    </ElasticsearchBar>
  );
};

export default ElasticsearchBar;
