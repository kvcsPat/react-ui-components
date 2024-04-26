import React from "react";
import { NavLink } from "react-router-dom";
import "./NavToHomeBtn.css";

export default function NavToHomeBtn() {
  return (
    <NavLink to="/" className="nav-to-home-btn">
      <span className="material-icons-round">chevron_left</span>
    </NavLink>
  );
}
