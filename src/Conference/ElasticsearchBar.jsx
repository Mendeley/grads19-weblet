import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import Input from "../Input";
import { getElasticsearchResults } from "../api";

const ElasticsearchBar = () => {
  const [EsSearchInput, setEsSearchInput] = useState("");
  const [EsSearchResults, setEsSearchResults] = useState([]);

  const handleSearch = event => {
    setEsSearchInput(event.target.value);
  };

  const searchConferences = async () => {
    try {
      const conferenceList = await getElasticsearchResults(EsSearchInput);
      setEsSearchResults(conferenceList);
    } catch (error) {}
  };

  const onSubmit = ev => {
    ev.preventDefault();
    searchConferences();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input onChange={handleSearch} />
      <Input type="submit" value="Submit" />
    </form>
  );
};

export default ElasticsearchBar;
