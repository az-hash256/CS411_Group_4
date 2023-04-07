import { React, useState, useEffect } from 'react';
import { SingleTeam } from './../components/SingleTeam';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
export const Team = () => {
    const {teamName} = useParams(); 
    const { state: { teamLogo } } = useLocation();
    return (
        <div>
            <SingleTeam teamName={teamName} teamLogo={teamLogo} />
        </div>
    )
}