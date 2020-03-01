import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({
  label = "",
  path = "",
  btnColor = "light",
  isAnimate = false,
  onClick
}) => {
  const animationClass = isAnimate ? "btn--animated" : "";
  return (
    <Link
      to={path}
      className={"btn btn--" + btnColor + " " + animationClass}
      onClick={() => onClick(true)}
    >
      {label}
    </Link>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  btnColor: PropTypes.string,
  isAnimate: PropTypes.bool,
  onClick: PropTypes.func
};

export { Button };
