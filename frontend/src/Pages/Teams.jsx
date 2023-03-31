import { React, useState, useEffect } from 'react';
import { TeamCard } from './../components/TeamCard';
import axios from "axios";
import "../styles/Teams.css";



export const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      async function fetchTeams() {
        const response = await axios.get('http://localhost:5500/api/teams');
        const filteredData = response.data.response.filter((team) => team.nbaFranchise === true).filter((team)=>team.name!=="Home Team Stephen A");
        setTeams(filteredData);
      }
      fetchTeams();
    }, []);
  
    return (
      <div className = "cards">
        {teams.map((team) => (
            <TeamCard key={team.id} teamName = {team.name} teamCity = {team.city} teamLogo ={team.logo}/>
        ))}
      </div>
    );
  
}