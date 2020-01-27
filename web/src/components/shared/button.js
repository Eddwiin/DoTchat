import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "@scss/components/shared/button.scss";

const Button = props => (
  <Link to={props.path} className="btn btn--white btn--animated ">
    {props.label}
  </Link>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string
};

export default Button;
