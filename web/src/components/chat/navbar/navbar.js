import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__title">DoTchat</span>
      <span className="navbar__menu">
        <Link to="/" className="navbar__menu__logout">
          Log out
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
