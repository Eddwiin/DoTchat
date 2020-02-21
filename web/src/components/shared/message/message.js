import React from "react";
import propTypes from "prop-types";
import "./message.scss";

const Message = ({ color = "primary" }) => {
  return (
    <div className="message">
      <div className="message__text">
        <div className="message--primary">Message</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  color: propTypes.string
};

export { Message };
