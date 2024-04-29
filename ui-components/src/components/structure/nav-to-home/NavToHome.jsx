import React from "react";
import { NavLink } from "react-router-dom";
import "./NavToHome.css";

export default function NavToHome({ componentTitle }) {
  return (
    <div className="component-title-container">
      <NavLink to="/" className="nav-to-home-btn">
        <span className="material-icons-round">chevron_left</span>
      </NavLink>
      <h2 className="component-title">{componentTitle}</h2>
    </div>
  );
}
