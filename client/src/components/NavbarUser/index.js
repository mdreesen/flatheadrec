import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Navigation() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return(
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {Auth.loggedIn() ? (
            <Nav className="me-auto link_bundle">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                <Nav>
                    <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Nav>
        ) : (
            <Nav>
                <Nav.Link href="/">Back</Nav.Link>
            </Nav>
        )}
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigation;