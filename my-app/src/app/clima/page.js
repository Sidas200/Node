"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Box from "@mui/material/Box";

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
            <h1 style={{ display: "flex", justifyContent: "center", fontSize: "60px", marginBottom: "20px" }}>
                Star Wars API Personajes
            </h1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Personajes de star wars"
                    sx={{
                        width: "60%",
                    }}
                />
            </Box>
            {results && results.length > 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#f0f0f0",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        maxWidth: "400px",
                        margin: "10px auto",
                    }}
                >
                    {results.map((character) => (
                        <div key={character.name} style={{ marginBottom: "20px" }}>
                            <h2 style={{ marginBottom: "10px", color: "black", fontSize: "40px" }}>
                                {character.name.toUpperCase()}
                            </h2>
                            <p style={{ marginBottom: "5px", color: "black" }}>Altura: {character.height} cm</p>
                            <p style={{ marginBottom: "5px", color: "black" }}>Peso: {character.mass} kg</p>
                            <p style={{ marginBottom: "5px", color: "black" }}>Color de cabello: {character.hair_color}</p>
                            <p style={{ marginBottom: "0", color: "black" }}>Color de piel: {character.skin_color}</p>
                        </div>
                    ))}
                </div>
            ) : (
                results && results.length === 0 && <p style={{ textAlign: "center" }}>No results found.</p>
            )}
        </div>
    );
};

export default StarWarsAPI;


