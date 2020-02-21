import React from "react";
import propTypes from "prop-types";
import "./modal.scss";

const Modal = ({
  closeModal = () => {},
  children,
  modalSize = "md",
  title = ""
}) => (
  <div className="modal">
    <div className={"modal__content modal__content--" + modalSize}>
      <div className="modal__header">
        <div className="modal__title">{title}</div>
        <div onClick={closeModal} className="modal__close">
          &times;
        </div>
      </div>

      <div className="modal__content--center">
        <div className="">{children}</div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  closeModal: propTypes.func,
  modalSize: propTypes.string,
  title: propTypes.string
};

export { Modal };
