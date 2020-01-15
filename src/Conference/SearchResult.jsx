import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ConferenceItem from "./ConferenceItem";
import Input from "../Input";
import { getElasticsearchResults, getConferenceList } from "../api";

const StyledConferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchResult = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [EsSearchInput, setEsSearchInput] = useState("");
    const [error, setError] = useState(false);
    const [conferences, setConferences] = useState([]);

    const handleSearch = event => {
        setEsSearchInput(event.target.value);
    };

    const searchConferences = async () => {
        try {
            const conferenceList = await getElasticsearchResults(EsSearchInput);
            setConferences(conferenceList);

        } catch (error) { }
    };

    const onSubmit = ev => {
        ev.preventDefault();
        searchConferences();
    };


    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input onChange={handleSearch} placeholder="Search by topic..." />
                <Input type="submit" value="Submit" />
            </form>

            <StyledConferenceList>
                {isLoading && <p>Loading...</p>}
                {!isLoading &&
                    conferences.length > 0 &&
                    conferences.map(conference => (
                        <ConferenceItem key={conference.id} conference={conference} />
                    ))}
                {error && <p>An error has occurred...</p>}
            </StyledConferenceList>
        </div>
    );
};

export default SearchResult;
