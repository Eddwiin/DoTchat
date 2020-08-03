import React from 'react';
import PropTypes from "prop-types";
import style from './input.module.scss';

const Input = ({
    type = "text",
    name = "",
    placeholder = "",
    value,
    onChange,
    autoComplete = "off",
    label,
    inputStyle,
    refs,
    errors
}) => {
    return (
        <div className={style.input}>
            <input className={style.input__text} type={type} placeholder={placeholder} name={name}
                value={value} onChange={onChange} autoComplete={autoComplete} style={inputStyle}
                ref={refs} aria-invalid={errors ? "true" : "false"}  />
            {label && <label className={style.input__label}>{label}</label>}
            { errors && <span className={style.input__errors}>{errors}</span>}
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
};

export { Input }