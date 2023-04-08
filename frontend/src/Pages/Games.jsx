import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  { GameCard }  from "../components/GameCard"
import teamData from "../data_file/team.json";

export const Games = () => {
    const [games, setGames] = useState([]);
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        async function fetchGames() {
            const response = await axios.get('http://localhost:5500/games');
            setGames(response.data._embedded.events);
            setPrices(response.data._embedded.events.priceRanges)
        }
        fetchGames();
      }, []);
    return (
        <div className = "cards">
        {games.map((game, price) => (
            <GameCard key={game.id} gameName={game.name} price={price.max}/>
        ))}
      </div>
    )
}