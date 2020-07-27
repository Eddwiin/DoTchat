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
  inputStyle,
  register,
  errors,
  required
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
        autoComplete="off"
        aria-invalid={true ? "true" : "false"}
        ref={register}
        required={required ? true : false}
      />
      {label && <label className="form-group__label">{label}</label>}
      {errors && errors[name] && <span className="form-group__errors">{errors[name].message}</span>}
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
  inputStyle: PropTypes.object,
  validation: PropTypes.object
};

export { FormGroup };
