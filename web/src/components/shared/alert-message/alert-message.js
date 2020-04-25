import React from "react"
import './alert-message.scss';

const AlertMessage = ({ children, color = "primary" }) => (
    <div className={"alert-message alert-message--" + color}>
        { children }
    </div>
)

export { AlertMessage }