import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  { PlayerCard }  from "../components/PlayerCard"
import teamData from "../data_file/team.json";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export const Players = () => {
      const [players, setPlayers] = useState([]);
      useEffect(() => {
        async function fetchPlayers() {
          const response = await axios.get('http://localhost:5500/players');
          const nba_players = response.data.league.standard.filter((player) => player.isActive === true);
          console.log(response.data.league.standard)
          setPlayers(nba_players);
        }
        fetchPlayers();
      }, []);
      function getTeamName(teamId) {
        const team = teamData.find((team) => team.teamId === teamId);
        return team ? team.teamName : "Unknown";
      }
      return(
        <div>
          <Row xs={1} md={2} lg = {4} xl={5}className="g-4">
            {players.map((player) => {
              
              const birthYear = new Date(player.dateOfBirthUTC).getFullYear();
              const currentYear = new Date().getFullYear();
              const age = currentYear - birthYear;
              const name = player.firstName + " " + player.lastName;
              const team = getTeamName(player.teamId);
              const position = player.teamSitesOnly.posFull;
              const photo = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
              return (
                <Col>
                <Link to="/other-page">
                  <PlayerCard 
                    key={player.personId} 
                    name={name} 
                    age={age} 
                    team={team}
                    photo = {photo}
                    role = {position}
                  />
                </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      );
  };
  