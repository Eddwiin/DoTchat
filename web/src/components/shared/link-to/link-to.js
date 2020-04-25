import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./link-to.scss";

const LinkTo = ({ children, redirect = "" }) => {
  return (
    <div className="link">
      <Link to={redirect} >{children}</Link>
    </div>
  );
};

LinkTo.propTypes = {
  redirect: PropTypes.string.isRequired
};

export { LinkTo };
