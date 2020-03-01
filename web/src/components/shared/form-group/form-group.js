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
  width = "w-85"
}) => {
  return (
    <div className="form-group">
      <input
        className={"form-group__input " + width}
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
  width: PropTypes.string
};

export { FormGroup };
