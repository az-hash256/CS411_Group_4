import { React, useState, useEffect } from 'react';
import { TeamCard } from './../components/TeamCard';
import axios from "axios";


export const Teams = () => {
    const [team, setTeam] = useState("");
    return (
        <TeamCard teamName={team}/>
    )
}