"use client";  // Agrega esta línea para indicar que es un Client Component

import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Datos guardados en localStorage');
    };

    return (
        <Box>
            <div style={{ backgroundColor: "#524F81" }}></div>
            <div style={{ backgroundColor: "#B6B5DB", minHeight: '100vh', width: '100%' }}>
                <Box
                    component="form"
                    onSubmit={handleLogin}
                    sx={{
                        '& > :not(style)': { m: 5, width: '85ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off">
                    <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "purple" }}>
                        Inicio de sesión
                    </h1>
                    <TextField
                        label="Username"
                        color="secondary"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        color="secondary"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="success">
                        Iniciar Sesión
                    </Button>
                </Box>
            </div>
        </Box>
    );
}
