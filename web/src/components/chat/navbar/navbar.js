import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.scss";
import APP_ROUTES from "../../../utils/route-config";

const Navbar = () => {

  const history = useHistory();

  const loggout = () => {
    localStorage.removeItem("access_token");
    setTimeout(() => {
      history.push(APP_ROUTES.AUTH);
    }, 500)
  }

  return (
    <nav className="navbar">
      <span className="navbar__title">DoTchat</span>
      <span className="navbar__menu">
        <Link to="/" className="navbar__menu__logout">
          <span onClick={loggout}>Log out</span>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
