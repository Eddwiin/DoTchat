import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  type = "text",
  placeholder = "",
  width = "w-85",
  minWidth = "mw-85"
}) => {
  return (
    // <div className="input">
    <input
      type={type}
      placeholder={placeholder}
      className={width + " " + minWidth}
    />
    // </div>
  );
};

Input.propType = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string
};

export { Input };
