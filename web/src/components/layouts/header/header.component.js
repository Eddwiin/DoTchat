import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.scss';

export default class HeaderComponent extends React.Component {
    
    render() {
        return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">DotTchat</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/auth/login">Log in</Nav.Link>
                    <Nav.Link href="/auth/registration">Registration</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}