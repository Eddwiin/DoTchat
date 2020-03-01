import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  type = "text",
  label = "",
  placeholder = "",
  name = "",
  value,
  onChange,
  width = "w-85",
  minWidth = "mw-85"
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={"input " + width + " " + minWidth}
    />
  );
};

Input.propType = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  width: PropTypes.string,
  minWidth: PropTypes.string
};

export { Input };
