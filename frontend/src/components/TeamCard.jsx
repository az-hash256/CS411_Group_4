import React from 'react';
import { Link } from "react-router-dom";
/*import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; */
import "../styles/TeamCard.css";
export const TeamCard = (props) => {
    const teamName = props.teamName;
    const teamCity = props.teamCity;
    const teamLogo = props.teamLogo
    return (
        <div>
        <Link to={`/teams/${teamName}`} state={{ teamLogo }}>  
            <div className = "teamcard">
                <img className = "logo" src={teamLogo} alt="Not Found"></img>
                <h1>{teamName}</h1>
                <h3>City: {teamCity}</h3>
            </div>
        </Link>
        </div>
    )
}