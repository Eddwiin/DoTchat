import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({
  label,
  color = "primary",
  type = "submit",
  isAnimate = false,
  onClick,
  width = ""
}) => {
  const animationClass = isAnimate ? "btn--animated" : "";

  return (
    <button
      className={"btn btn--" + color + " " + animationClass + " " + width}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  isAnimate: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string
};

export { Button };
