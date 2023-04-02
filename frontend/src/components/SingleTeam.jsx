import React from 'react';
import Figure from 'react-bootstrap/Figure';
export const SingleTeam = (props) => {
    console.log("props");
    return (

        <div>
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={props.logo}
        />
        <Figure.Caption>
          {props.teamName}
        </Figure.Caption>
      </Figure>
      </div>
    )
}