import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Alt_PlayerCard = (props) => {
    const playerName = props.name;
    const age = props.age;
    const stats = props.stats;

    return (
        <Link to="/other-page">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{playerName}</Card.Title>
                    <Card.Text>
                        Team: team
                        <br/>
                        Age: {age}
                        <br/>
                    </Card.Text>
                    <Button variant="primary">Stats</Button>
                </Card.Body>
            </Card>
        </Link>

    );
}
