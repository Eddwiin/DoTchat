import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { INITIAL_AUTH_ROUTES } from "./../../utils/configs/route.config";

const navMenu = {
  display: "flex",
  flexDirection: "row-reverse",
  width: "100%"
};

const menuName = {
  color: "white",
  border: "1px solid white",
  padding: "10px"
};

const HeaderComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">DoTchat</Navbar.Brand>
      <div style={navMenu}>
        <Nav>
          <Nav.Link style={menuName} href={INITIAL_AUTH_ROUTES.SIGNIN}>
            Sign in
          </Nav.Link>
          <Nav.Link style={menuName} href={INITIAL_AUTH_ROUTES.SIGNUP}>
            Sign up
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default HeaderComponent;
