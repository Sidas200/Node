"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Box from "@mui/material/Box";

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
            <h1 style={{ display: "flex", justifyContent: "center", fontSize: "60px", marginBottom: "20px" }}>
                Rick and Morty API Personajes
            </h1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Rick & Morty..."
                    sx={{
                        width: "60%",
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {results.length > 0 ? (
                    results.map((character) => (
                        <div
                            key={character.id}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "10px",
                                backgroundColor: "#f0f0f0",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                maxWidth: "200px",
                            }}
                        >
                            <h3 style={{ marginBottom: "10px", fontSize: "18px", color: "black" }}>
                                {character.name}
                            </h3>
                            <img
                                src={character.image}
                                alt={character.name}
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>No results found.</p>
                )}
            </Box>
        </div>
    );
};

export default Page;

