"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const Page = () => {
    const [results, setResults] = useState([]);

    const fetchCharacter = async (query) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        setResults(data.results || []);
    };

    const handleSearch = (query) => {
        fetchCharacter(query);
    };

    return (
        <div>
            <h1>Rick and Morty Search</h1>
            <SearchBar
                onSearch={handleSearch}
                placeholder="Search Rick and Morty characters..."
            />
            <div>
                {results.map((character) => (
                    <div key={character.id}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
