import React from "react";
import "@scss/components/shared/modal.scss";

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <div onClick={this.props.closeModal} className="modal__close">
              &times;
            </div>
          </div>
          {/* { this.props.children } */}
        </div>
      </div>
    );
  }
}
