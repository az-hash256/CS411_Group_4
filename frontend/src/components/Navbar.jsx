import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';


export const Navbar = () => {
    return (
        <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <BootstrapNavbar.Brand href="/">NBAMaster</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Games</Nav.Link>
                    <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}
