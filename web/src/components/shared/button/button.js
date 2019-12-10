import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = props => (
  <a href="#" className="btn btn--white btn--animated ">
    {props.label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;
