import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  { PlayerCard }  from "../components/PlayerCard"
import teamData from "../data_file/team.json";

export const Games = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        async function fetchGames() {
            const response = await axios.get('http://localhost:5500/games');
            setGames(response.data.name);
        }
        fetchGames();
      }, []);
    return (
    <h1>{games}</h1>
    )
}