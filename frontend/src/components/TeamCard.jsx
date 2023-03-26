import React from 'react';

export const TeamCard = (props) => {
    const teamName = props.teamName;
    const teamCity = props.teamCity;
    return (
        <div>
            <h1>Team Name: {teamName}</h1>
            <h3>City: {teamCity}</h3>
        </div>
    )
}