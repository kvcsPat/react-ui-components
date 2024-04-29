import React, { useState } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import ModalPopup from "./ModalPopup";

export default function ModalParent() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModal() {
    setShowModalPopup(!showModalPopup);
  }

  const modalId = "modal-test";
  const modalTitle = "Success!";
  const modalText = "Modal is open.";
  const modalBtnText = "Close Modal";

  return (
    <Layout>
      <NavToHome componentTitle={"ModalPopup"} />
      <div className="modal-popup-container">
        <button
          disabled={showModalPopup}
          className={showModalPopup ? "modal-btn btn-disabled" : "modal-btn"}
          onClick={handleToggleModal}
        >
          Open Modal
        </button>
        <div className="modal-container">
          {showModalPopup ? (
            <ModalPopup
              id={modalId}
              modalTitle={modalTitle}
              modalText={modalText}
              modalBtnText={modalBtnText}
              handleToggleModal={handleToggleModal}
            />
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
