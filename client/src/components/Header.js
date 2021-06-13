import React, { useEffect, useState } from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

const Header = () => {
    const [councilNames, setCouncilNames] = useState([]);
    const fetchCouncilNames = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/councilNames');
            setCouncilNames(data.data);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchCouncilNames()
    }, [])
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">WebKriti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Events" id="basic-nav-dropdown">
                        {councilNames.map((councilName) => {
                            return <NavDropdown.Item href={`#${councilName.councilName}`}>{councilName.councilName}</NavDropdown.Item>
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
