import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Players } from '../Pages/Players';
import teamData from "../data_file/team.json";
function getTeamId(teamName) {
  const team = teamData.find((team) => team.teamName.includes(teamName));
  return team ? team.teamId : "Unknown";
}
export const SingleTeam = ({teamName, teamLogo}) => {
    const teamId = getTeamId(teamName);
    return (
        <div>
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={teamLogo}
        />
        <h1>
          {teamName}
        </h1>
      </Figure>
      <Players teamId = {teamId}/>
      </div>
    )
}