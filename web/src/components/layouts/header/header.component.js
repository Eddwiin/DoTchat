import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.scss';

export default class HeaderComponent extends React.Component {
    
    render() {
        return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">DoTchat</Navbar.Brand>
                    <div className="nav-menu">
                        <Nav>
                            <Nav.Link className="menu-name" href="/auth/login">Log in</Nav.Link>
                            <Nav.Link className="menu-name" href="/auth/registration">Registration</Nav.Link>
                        </Nav>
                    </div>
            </Navbar>
        )
    }
}