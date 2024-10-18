"use client";
import { useState } from "react";
import {Button, TextField} from "@mui/material";

const SearchBar = ({ onSearch, placeholder, apiOptions = [] }) => {
    const [query, setQuery] = useState("");
    const [api, setApi] = useState(apiOptions.length > 0 ? apiOptions[0].value : "");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query, api);
    };

    return (
        <form onSubmit={handleSearch}>
            <TextField
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                id="outlined-basic"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Button type="submit" variant="contained" sx={{
                fontSize: '18px',
                padding: '12px 24px',
                width: '150px',
                height: '57px',
                marginLeft: '5px',
                backgroundColor: 'green'
            }} >Buscar</Button>
        </form>
    );
};

export default SearchBar;

