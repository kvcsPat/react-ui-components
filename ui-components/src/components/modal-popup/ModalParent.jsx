import React, { useState } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import Button from "../re-used/button/Button";
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
      <div className="container">
        <Button
          btnDisabled={showModalPopup}
          btnClass={showModalPopup ? "general-btn btn-disabled" : "general-btn"}
          btnClick={handleToggleModal}
          btnText={"Open Modal"}
        />
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
