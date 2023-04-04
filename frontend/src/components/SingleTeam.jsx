import React from 'react';
import Figure from 'react-bootstrap/Figure';

export const SingleTeam = ({teamName, teamLogo}) => {
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
      </div>
    )
}