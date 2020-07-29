import React from 'react';
import PropTypes from "prop-types";
import './input.scss';

const Input = ({
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
    autoComplete = "off",
    label,
    style,
    refs,
    errors
}) => {
    return (
        <div className="input">
            <input className="input__text" type={type} placeholder={placeholder} name={name}
                value={value} onChange={onChange} autoComplete={autoComplete} style={style}
                ref={refs} aria-invalid={errors ? "true" : "false"}  />
            {label && <label className="input__label">{label}</label>}
            { errors && <span className="form-group__errors">{errors}</span>}
        </div>
    )
}

Input.propType = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    autocomplete: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.object,
    refs: PropTypes.object
    // errorMessage: PropTypes.string,
};

export { Input }