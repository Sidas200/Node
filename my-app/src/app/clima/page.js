"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const StarWarsAPI = () => {
    const [results, setResults] = useState(null);

    const fetchCharacter = async (characterName) => {
        const response = await fetch(
            `https://swapi.dev/api/people/?search=${characterName}`
        );
        const data = await response.json();
        setResults(data.results);
    };

    const handleSearch = (query) => {
        fetchCharacter(query);
    };

    return (
        <div>
            <h1>Star Wars Character Search</h1>
            <SearchBar
                onSearch={handleSearch}
                placeholder="Search Star Wars character..."
            />
            {results && results.length > 0 && (
                <div>
                    {results.map((character) => (
                        <div key={character.name}>
                            <h3>{character.name}</h3>
                            <p>Height: {character.height} cm</p>
                            <p>Mass: {character.mass} kg</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                        </div>
                    ))}
                </div>
            )}
            {results && results.length === 0 && <p>No results found.</p>}
        </div>
    );
};

export default StarWarsAPI;

