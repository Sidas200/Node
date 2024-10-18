"use client";
import { useState } from "react";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const fetchCharacters = async (query, api) => {
        let url = "";

        if (api === "rickandmorty") {
            url = `https://rickandmortyapi.com/api/character/?name=${query}`;
        } else if (api === "pokeapi") {
            url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
        } else if (api === "swapi") {
            url = `https://swapi.dev/api/people/?search=${query}`;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("No results found");
            }
            const data = await response.json();

            // Adaptar el formato de los resultados según la API
            if (api === "rickandmorty") {
                setResults(data.results || []);
            } else if (api === "pokeapi") {
                // La PokeAPI devuelve un objeto con la información del Pokémon. Usamos la ID para la imagen.
                setResults([{ name: data.name, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png` }]);
            } else if (api === "swapi") {
                // SWAPI no tiene imágenes, así que solo mostramos el nombre
                setResults(data.results.map(result => ({ name: result.name })));
            }
            setError("");
        } catch (err) {
            setError("No results found or there was an error.");
            setResults([]);
        }
    };

    return (
        <div>
            <h1>Character Search</h1>
            <SearchBar onSearch={fetchCharacters} />

            {error && <p>{error}</p>}

            <div>
                {results.length === 0 && !error && <p>No characters found</p>}
                {results.map((result, index) => (
                    <div key={index}>
                        <h3>{result.name}</h3>
                        {result.image && <img src={result.image} alt={result.name} width={200} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
