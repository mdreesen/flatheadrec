import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../../utils/auth';

function Navigation() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {Auth.loggedIn() ? (
                    <Nav className="me-auto link_bundle">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/all">All</Nav.Link>
                        <Nav.Link href="/bars">Bars</Nav.Link>
                        <Nav.Link href="/coffee-shops">Coffee Shops</Nav.Link>
                        <Nav.Link href="/eatery">Eatery</Nav.Link>
                        <Nav.Link href="/lodging">Lodging</Nav.Link>
                        <Nav.Link href="/outdoor">Outdoor</Nav.Link>
                        <Nav>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
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