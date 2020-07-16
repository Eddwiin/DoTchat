import React from "react";
import PropTypes from "prop-types";
import "./form-group.scss";

const FormGroup = ({
  label,
  name = "",
  type = "text",
  placeholder = "",
  onChange,
  value,
  required = "required",
  inputStyle
}) => {
  return (
    <div className="form-group">
      <input
        className="form-group__input"
        style={inputStyle}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {label && <label className="form-group__label">{label}</label>}
    </div>
  );
};

FormGroup.propType = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.string,
  inputStyle: PropTypes.object
};

export { FormGroup };
