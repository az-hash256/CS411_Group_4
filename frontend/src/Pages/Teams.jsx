import { React, useState } from 'react';
import { TeamCard } from './../components/TeamCard'

export const Teams = () => {
    const [team, setTeam] = useState("Celtics");
    return (
        <TeamCard teamName={team}/>
    )
}