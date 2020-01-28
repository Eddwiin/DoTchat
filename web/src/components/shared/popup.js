import React from "react";
import "@scss/components/shared/popup.scss";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__content__cross">
            <span className="popup__content__cross__1"></span>
            <span className="popup__content__cross__2"></span>
          </div>
        </div>
      </div>
    );
  }
}
