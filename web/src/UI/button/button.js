import React from 'react'
import style from './button.module.scss';
import PropTypes from "prop-types";

const Button = ({
    label,
    color,
    type = "submit",
    isAnimate = false,
    onClick,
}) => {
    const animationClass = isAnimate ? `${style.btn_animated}` : "";
    const btnColor = () => {
        switch (color) {

            case "danger":
                return style.btn_danger;

            case "light":
                return style.btn_light;

            default:
                return style.btn_primary
        }
    }
    return (
        <button
            className={`${style.btn} ${btnColor()} ${animationClass}`}
            type={type}
            onClick={onClick} >
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
