import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./../styles/PlayerCard.css";
export const PlayerCard = ({ name, age, team, photo, role }) => {
  return (
    <Card border="secondary" className="custom-card">
      <Link to="/other-page">
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}
            <br />
            Age: {age}
            <br />
            Role: {role}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};
