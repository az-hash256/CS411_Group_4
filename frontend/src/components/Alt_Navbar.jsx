import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Alt_Navbar.css";
import { Navbar, Nav } from 'react-bootstrap';
export const Alt_Navbar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">My App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Games</Nav.Link>
                    <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
        </Navbar>
    );
}

