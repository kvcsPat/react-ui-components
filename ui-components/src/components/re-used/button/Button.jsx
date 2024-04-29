import React from "react";
import "./Button.css";

export default function Button({
  btnDisabled = false,
  btnClass = "general-btn",
  btnClick,
  btnText,
}) {
  return (
    <button disabled={btnDisabled} className={btnClass} onClick={btnClick}>
      {btnText}
    </button>
  );
}
