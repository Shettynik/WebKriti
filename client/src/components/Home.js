import React from 'react';
import './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Home = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">WebKriti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Events" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link href="#link" className="login-link">Login</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Home
