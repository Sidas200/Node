"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const PokeAPI = () => {
    const [results, setResults] = useState(null);

    const fetchPokemon = async (pokemonName) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );
        if (response.ok) {
            const data = await response.json();
            setResults(data);
        } else {
            setResults(null); // Reinicia si no encuentra resultados
        }
    };

    const handleSearch = (query) => {
        fetchPokemon(query);
    };

    return (
        <div>
            <h1>PokeAPI Search</h1>
            <SearchBar
                onSearch={handleSearch}
                placeholder="Search Pokémon..."
            />
            {results ? (
                <div>
                    <h3>{results.name}</h3>
                    <img src={results.sprites.front_default} alt={results.name} />
                    <p>Height: {results.height} decimeters</p>
                    <p>Weight: {results.weight} hectograms</p>
                    <p>Base Experience: {results.base_experience}</p>
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default PokeAPI;
