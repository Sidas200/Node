"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Box from "@mui/material/Box";

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
            <h1 style={{ display: "flex", justifyContent: "center", fontSize:"60px", marginBottom: "20px"}}>API de busqueda de pokemon</h1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center"// Esto es opcional, solo si deseas centrar verticalmente también
                }}
            >
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Busca tu pokemon favorito..."
                    sx={{
                        width: "60%", // Ajusta el ancho según sea necesario
                    }}
                />
            </Box>
            {results ? (
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
                    <h2 style={{marginBottom: "10px", color: "black", fontSize:"40px", }}>{results.name.toUpperCase()}</h2>
                    {results.sprites && results.sprites.front_default ? (
                        <img
                            src={results.sprites.front_default}
                            alt={results.name}
                            style={{width: "150px", height: "150px", marginBottom: "10px"}}
                        />
                    ) : (
                        <p>Image not available.</p>
                    )}
                    <p style={{marginBottom: "5px", color: "black"}}>Altura: {results.height} decimeters</p>
                    <p style={{marginBottom: "5px", color:"black"}}>Peso: {results.weight} hectograms</p>
                    <p style={{marginBottom: "0", color: "black"}}>Experiencia Base: {results.base_experience}</p>
                </div>

            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default PokeAPI;

