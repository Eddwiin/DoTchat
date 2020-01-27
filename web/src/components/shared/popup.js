import React from "react";
import "@scss/components/shared/popup.scss";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__content"></div>
      </div>
    );
  }
}
