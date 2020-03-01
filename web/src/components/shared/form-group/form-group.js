import React from "react";
import PropTypes from "prop-types";
import "./form-group.scss";

const FormGroup = ({
  name = "",
  type = "text",
  placeholder = "",
  onChange,
  value,
  required = "required"
}) => {
  return (
    <div className="form-group">
      <input
        className="form-group__input"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {/* <label>Email</label> */}
    </div>
  );
};

FormGroup.propType = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.string
};

export { FormGroup };
