import React from "react";
import propTypes from "prop-types";
import "./message.scss";

const Message = ({ color = "primary" }) => {
  return (
    <div className="message">
      <div className={"message--" + color}>
        <div className="message__text">
          Message Message Message Message Message Message Message
          <span className="message__date">23/02/2020</span>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  color: propTypes.string
};

export { Message };
