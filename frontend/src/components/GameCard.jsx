import React from 'react';

export const GameCard = (props) => {
    const gameName = props.gameName
    const price = props.price
    return(
        <div className = "gamecard">
            <h1>{gameName}</h1>
            <h3>{price} - {price}</h3>
        </div>
    )
}