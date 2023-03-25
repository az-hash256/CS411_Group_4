import React from 'react';

export const TeamCard = (props) => {
    const teamName = props.teamName;
    const teamRecord = props.teamRecord;
    return (
        <div>
            <h1>Team Name: {teamName}</h1>
            <h3>Record: {teamRecord}</h3>
        </div>
    )
}