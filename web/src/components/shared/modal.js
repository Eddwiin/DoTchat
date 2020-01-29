import React from "react";
import "@scss/components/shared/modal.scss";

const Modal = ({ closeModal = () => {}, children, modalSize = "md" }) => (
  <div className="modal">
    <div className={"modal__content modal__content--" + modalSize}>
      <div className="modal__header">
        <div onClick={closeModal} className="modal__close">
          &times;
        </div>
      </div>

      <div className="">{children}</div>
    </div>
  </div>
);

export default Modal;
