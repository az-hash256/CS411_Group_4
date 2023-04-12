import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  { GameCard }  from "../components/GameCard"
import teamData from "../data_file/team.json";
import ListGroup from 'react-bootstrap/ListGroup';
import "../styles/Game.css";
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
      //console.log(prices)
    return (
      
      <div>
        <ListGroup>
          {games.map((game) => {
            console.log(game)
            let price_min = "N/A"; 
            let currency = "N/A";
            if (game.priceRanges != null){
              price_min = game.priceRanges[0].min;
              currency = game.priceRanges[0].currency;
            }
            let Price = "No info"
            if(price_min !== "N/A"){
              Price = `${price_min} ${currency}`
            }
            const link = game.url
            const date = `${game.dates.start.localDate} ${game.dates.start.localTime}`;
            return (
              <ListGroup.Item key={game.id} action href={link} variant="info">
                <div style={{ textAlign: "center" }}>
                  <h2>{game.name}</h2>
                  <h3>Time: {date}</h3>
                  <h4>Price: {Price}</h4>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup> 
      </div>

    )
}