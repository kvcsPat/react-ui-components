import React from "react";
import Button from "../re-used/button/Button";
import "./ModalPopup.css";

export default function ModalPopup({
  id,
  modalTitle,
  modalText,
  modalBtnText,
  handleToggleModal,
}) {
  return (
    <div id={id || "modal"} className="modal">
      <h3 className="modal-title">{modalTitle ? modalTitle : "Modal Title"}</h3>
      <p className="modal-text">{modalText ? modalText : "Modal Text"}</p>
      <Button
        btnClick={handleToggleModal}
        btnText={modalBtnText ? modalBtnText : "Modal Button"}
      />
    </div>
  );
}
